import Juejin from '@/services/juejin';

const namespace = 'juejin';
const selectState = state => state[namespace];

export default {
    namespace,
    state: {
        articles: [],
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
            console.log(res);
            yield put({
                type: 'overrideStateProps',
                payload: {
                    articles: res.data.list,
                }
            })
        },
    }
};
