import { create } from 'dva-core';
import createLoading from 'dva-loading';

function createApp(opt) {
    const app = create(opt);
    app.use(createLoading({}));

    opt.models.forEach(model => app.model(model));
    app.start();

    const store = app._store;
    app.getStore = () => store;

    const dispatch = store.dispatch;
    app.getDispatch = () => dispatch;

    return app;
}

export default { createApp };