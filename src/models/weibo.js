import Weibo from '@/services/weibo';

const namespace = 'weibo';
const selectState = state => state[namespace];

export default {
    namespace,
    state: {
        hotNews: [],
        hotNewUrl: '',
        params: {
            page: 1
        },
    },
    reducers: {
        overrideStateProps(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },

        updateStateProps(state, { payload }) {
            const { name, value } = payload;
            return {
                ...state,
                ...{ [name]: { ...state[name], ...value } },
            };
        },
    },
    effects: {
        *list(_, { call, put, select }) {
            const { params, hotNews } = yield select(selectState);

            const res = yield call(Weibo.fetch, params);
            yield put({
                type: 'overrideStateProps',
                payload: {
                    hotNews: [...hotNews, ...res.data.list],
                }
            })
        },
        *setParams({ payload }, { put }) {
            yield put({
                type: 'updateStateProps',
                payload: {
                    name: 'params',
                    value: {
                        ...payload,
                    },
                },
            })
        },
        *resetFilter(_, { put }) {
            yield put({
                type: 'overrideStateProps',
                payload: {
                    params: { page: 1 },
                },
            })
        },
    }
}
