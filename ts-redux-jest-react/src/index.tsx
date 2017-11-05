import * as React from 'react';// 如果不写这一句，会报错，解决了好久
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

// createStore<StoreState>  规定这个函数返回 interface StoreState规范的东西
const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
// 类型断言有两种形式。 其一是“尖括号”语法：
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
// let strLength: number = (someValue as string).length;