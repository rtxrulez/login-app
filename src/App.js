import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";

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
          <Route
            path="/profile"
            render={() => {
              if (localStorage.getItem("isUserAuth") === "true") {
                return <ProfilePageContainer />;
              } else {
                return <LoginPageContainer />;
              }
            }}
          ></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
