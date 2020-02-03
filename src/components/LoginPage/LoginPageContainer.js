import React, { Component } from "react";
import LoginPage from "./LoginPage";

class LoginPageContainer extends Component {
  render() {
    return (
      <div>
        <LoginPage {...this.props} />
      </div>
    );
  }
}

export default LoginPageContainer;
