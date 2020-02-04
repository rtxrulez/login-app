import React, { Component } from "react";
import { connect } from "react-redux";
import { loginedFetch } from "../../store/actions/loginedActions";
import LoginPage from "./LoginPage";
import { Redirect } from "react-router-dom";

class LoginPageContainer extends Component {
  state = {
    login: "",
    pass: ""
  };

  componentDidMount() {
    console.log("storage", localStorage.getItem("isUserAuth"));
    if (localStorage.getItem("isUserAuth") === "true") {
      const data = {
        login: localStorage.getItem("login"),
        pass: localStorage.getItem("pass")
      };

      this.props.requestLogin(data);
    }
  }

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
    let { login, pass } = this.state;

    console.log("isUserAuth", this.props.isUserAuth);

    let validate = true;
    if (login !== "" && pass !== "") {
      validate = false;
    }
    return (
      <div>
        {this.props.isUserAuth ? <Redirect to="/profile" /> : ""}
        <LoginPage
          valid={validate}
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
    isLoginCorrect: store.isLoginCorrect,
    isFetching: store.isFetching,
    isFetched: store.isFetched,
    isUserAuth: store.isUserAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLogin: data => dispatch(loginedFetch(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
