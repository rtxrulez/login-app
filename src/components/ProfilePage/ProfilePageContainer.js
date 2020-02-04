import React, { Component } from "react";
import { connect } from "react-redux";
import { loginedFetch } from "../../store/actions/loginedActions";
import ProfilePage from "./ProfilePage";

class ProfilePageContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <ProfilePage />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePageContainer);
