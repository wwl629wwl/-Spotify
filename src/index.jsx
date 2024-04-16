import React from "react";
import ReactDOM from 'react-dom/client';
import './index.less';
import App from "./App";

/* antd国际化 */
import { ConfigProvider } from "antd";
import zhCN from 'antd/locale/zh_CN';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>
)