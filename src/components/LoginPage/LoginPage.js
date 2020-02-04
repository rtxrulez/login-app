import React, { Component } from "react";
import css from "./LoginPage.module.css";
import config from "../../config/config";
import { Input, Button, notification } from "antd";

const errorMsg = {
  duration: config.durationNoty,
  message: "Сообщение ошибки",
  description: "Не корректный логин или пароль!"
};

class LoginPage extends Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoginCorrect) {
      notification.error(errorMsg);
    }
  }

  onSubmit = () => {
    console.log("submit");
    this.props.onSubmitLogined();
  };

  handleLogin = e => {
    this.props.onChangeLogin(e.target.value);
  };

  handlePass = e => {
    this.props.onChangePass(e.target.value);
  };

  render() {
    const { valid } = this.props;

    return (
      <div className={css.LoginPage}>
        <div className={css.widget}>
          <h2 className={css.head}>Авторизация</h2>
          <form className={css.form}>
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
                block
              >
                Войти
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
