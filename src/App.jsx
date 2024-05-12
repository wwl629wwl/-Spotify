import { Layout } from 'antd';
import React from 'react';
import { HashRouter } from "react-router-dom";
import './App.less';
import Header from './components/Header.jsx';
import Sider from './components/Sider';
import Routerview from './router/index.js';
import { connect } from 'react-redux';

const layoutStyle = {
    overflow: 'hidden',
    width: 'calc(100%)',
    height: 'calc(100%)',
    flexDirection: 'row',
}

const insideStyle = {
    width: 'calc(100%)',
    minHeight: 'calc(100vh - 10vh - 65px)',
    overflow: 'auto',

}

const App = function App(props) {
    const { toLogin } = props;

    return <div className="App-box">
        <HashRouter>
            <Layout style={layoutStyle}>
                {/* <Sider /> */}
                {/* <Layout>
                <HashRouter>
                    <Routerview/>
                </HashRouter>
            </Layout> */}
                <Sider style={{ width: '245px' }} />

                <Layout style={insideStyle}>

                    {!toLogin.toLogin && <Header />}
                    <Routerview />

                </Layout>

            </Layout>
        </HashRouter>

    </div >
}

export default connect(
    state => {
        return {
            toLogin: state.toLogin
        }
    }
)(App);