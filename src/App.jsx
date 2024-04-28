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

const insideStyle = {
    width: 'calc(100% -245px)',
    minHeight: 'calc(100vh - 10vh - 65px)',
    overflow: 'auto',

}

const App = function App() {
    return <div className="App-box">
        <HashRouter>
            <Layout style={layoutStyle}>
                {/* <Sider /> */}
                {/* <Layout>
                <HashRouter>
                    <Routerview/>
                </HashRouter>
            </Layout> */}
                <Sider />

                <Layout style={insideStyle}>

                    <Header />
                    <Routerview />

                </Layout>

            </Layout>
        </HashRouter>

    </div >
}

export default App;