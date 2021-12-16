const namespace = 'hotNew';
const selectState = state => state[namespace];

export default {
    namespace,
    state: {
        hotNewUrl: '',
        tabList: [{ title: '微博' }]
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
        *setHotNewUrl({ payload }, { put }) {
            console.log(payload);
            yield put({
                type: 'overrideStateProps',
                payload: {
                    hotNewUrl: payload.hotNewUrl
                },
            });
        },
    }
};
