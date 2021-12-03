import Csdn from '@/services/csdn';

const namespace = 'csdn';
const selectState = state => state[namespace];

export default {
    namespace,
    state: {
        articles: [],
        articleUrl: '',
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
            const { params, articles } = yield select(selectState);

            const res = yield call(Csdn.fetch, params);
            yield put({
                type: 'overrideStateProps',
                payload: {
                    articles: [...articles, ...res.data.list],
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
