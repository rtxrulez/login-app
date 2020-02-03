import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route
            path="/"
            exact={true}
            component={() => {
              return <LoginPageContainer />;
            }}
          ></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
