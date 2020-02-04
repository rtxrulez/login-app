import React, { Component } from "react";
import { connect } from "react-redux";
import { loginedFetch } from "../../store/actions/loginedActions";
import LoginPage from "./LoginPage";

class LoginPageContainer extends Component {
  state = {
    login: "",
    pass: ""
  };
  onChangeLogin = login => {
    this.setState({
      login: login
    });
  };

  onChangePass = pass => {
    this.setState({
      pass: pass
    });
  };

  onSubmitLogined = () => {
    this.props.requestLogin(this.state);
  };

  render() {
    let { login, pass, isLoginCorrect } = this.state;

    let validate = true;
    if (login !== "" && pass !== "") {
      validate = false;
    }
    return (
      <div>
        <LoginPage
          valid={validate}
          isLoginCorrect={isLoginCorrect}
          onChangeLogin={this.onChangeLogin}
          onChangePass={this.onChangePass}
          onSubmitLogined={this.onSubmitLogined}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoginCorrect: store.isLoginCorrect
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLogin: data => dispatch(loginedFetch(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
