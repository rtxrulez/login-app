import React, { Component } from "react";
import css from "./LoginPage.module.css";
import { Input, Button } from "antd";

class LoginPage extends Component {
  render() {
    return (
      <div className={css.LoginPage}>
        <div className={css.widget}>
          <h2 className={css.head}>Авторизация</h2>
          <div className={css.form}>
            <div className={css.input}>
              <Input size="large" placeholder="Логин" />
            </div>
            <div className={css.input}>
              <Input size="large" placeholder="Пароль" />
            </div>
            <div className={css.input}>
              <Button size="large" type="primary" block>
                Войти
              </Button>
              ,
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
