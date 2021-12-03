const namespace = 'study';
const selectState = state => state[namespace];

export default {
    namespace,
    state: {
        articleUrl: '',
        tabList: [{ title: '掘金' }, { title: 'CSDN' }, { title: '美团技术团队' }]
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
        *setArticleUrl({ payload }, { put }) {
            yield put({
                type: 'overrideStateProps',
                payload: {
                    articleUrl: payload.articleUrl
                },
            });
        },
    }
};
