import React from "react";
import ReactDOM from 'react-dom/client';
import './index.less';
import App from "./App";

/* antd国际化 */
import { ConfigProvider } from "antd";
import zhCN from 'antd/locale/zh_CN';

/* react-redux */
import store from "./store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>
)