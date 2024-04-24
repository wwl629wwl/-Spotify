import React from 'react';
import { HashRouter } from "react-router-dom";
import Routerview from './router/index.js';
import { Layout } from 'antd';
import './App.less';
import Sider from './components/Sider';

const { Header, Footer, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};
const layoutStyle = {
    overflow: 'hidden',
    width: 'calc(100%)',
    height: 'calc(100%)',
    flexDirection: 'row',
}

const App = function App() {
    return <div className="App-box">
        <Layout style={layoutStyle}>
            {/* <Sider /> */}
            {/* <Layout>
                <HashRouter>
                    <Routerview/>
                </HashRouter>
            </Layout> */}
            <Sider />

            <Layout>
                <HashRouter>
                    <Routerview />
                </HashRouter>
            </Layout>

        </Layout>

    </div>
}

export default App;