import React from "react";
import { Layout, Flex } from 'antd';
import './less/Home.less';
const { Header, Footer, Sider, Content } = Layout;
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
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};

const Home = function Home() {
    return <div className="home-box">
        {/* <Layout style={layoutStyle}>
            <Sider width="25%" style={siderStyle}>
                Sider
            </Sider>
            <Layout>

                <Header style={headerStyle}>Header</Header>
                <Content style={contentStyle}>Content</Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout> */}
        home
    </div>
}

export default Home;