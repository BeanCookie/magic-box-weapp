import Home from '@/services/home';

const namespace = 'home';
const selectState = state => state[namespace];

export default {
    namespace,
    state: {
        current: 0,
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
        *fetch({ payload }, { call, put, select }) {
            const res = yield call(Juejin.fetch);
            yield put({
                type: 'overrideStateProps',
                payload: {
                    articles: res.data.list,
                }
            })
        },
    }
};
