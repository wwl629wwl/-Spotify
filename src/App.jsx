import React from 'react';
import { HashRouter } from "react-router-dom";
import Routerview from './router/index.js';
import { Layout } from 'antd';
import './App.less';
import Sider from './components/Sider';
import Header from './components/Header.jsx';

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
                <Header />
                <HashRouter>
                    <Routerview />
                </HashRouter>
            </Layout>

        </Layout>

    </div>
}

export default App;