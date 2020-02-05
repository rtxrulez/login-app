import React, { Component } from "react";
import { Layout } from "antd";
import News from "../News/News";
import css from "./ProfilePage.module.css";
const { Header, Content } = Layout;

class ProfilePage extends Component {
  render() {
    return (
      <Layout className={css.layout}>
        <Header className={css.header}>
          <a className={css.logo} href="/profile">
            Profile News
          </a>
        </Header>
        <Layout className={css.layout}>
          <Content className={css.content}>
            <News />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default ProfilePage;
