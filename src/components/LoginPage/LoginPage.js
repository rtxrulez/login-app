import React, { Component } from "react";
import css from "./LoginPage.module.css";
import config from "../../config/config";
import { Input, Button, notification, Spin } from "antd";

const errorMsg = {
  duration: config.durationNoty,
  message: "Сообщение ошибки",
  description: "Не корректный логин или пароль!"
};

class LoginPage extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      console.log(nextProps.error);
      errorMsg.description = nextProps.error;
      notification.destroy();
      notification.error(errorMsg);
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmitLogined();
  };

  handleLogin = e => {
    this.props.onChangeLogin(e.target.value);
  };

  handlePass = e => {
    this.props.onChangePass(e.target.value);
  };

  render() {
    const { valid, isFetching } = this.props;

    return (
      <div className={css.LoginPage}>
        <div className={css.widget}>
          <Spin spinning={isFetching} delay={10}>
            <form onSubmit={this.onSubmit} className={css.form}>
              <h2 className={css.head}>Авторизация</h2>
              <div className={css.input}>
                <Input
                  onChange={this.handleLogin}
                  size="large"
                  placeholder="Логин"
                />
              </div>
              <div className={css.input}>
                <Input
                  onChange={this.handlePass}
                  size="large"
                  placeholder="Пароль"
                />
              </div>
              <div className={css.input}>
                <Button
                  disabled={valid}
                  onClick={this.onSubmit}
                  size="large"
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Войти
                </Button>
              </div>
            </form>
          </Spin>
        </div>
      </div>
    );
  }
}

export default LoginPage;
