import { Component } from 'react'
import { Provider } from 'react-redux';
import dva from './utils/dva';
import models from './models';
import './app.scss'
// 全局引入一次即可
import 'taro-ui/dist/style/index.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models,
});

const store = dvaApp.getStore();

class App extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App
