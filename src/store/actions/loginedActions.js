import axios from "axios";
import config from "../../config/config";
import { Redirect } from "react-router-dom";

export const loginedRequest = () => {
  return {
    type: "LOGINED_REQUEST",
    payload: ""
  };
};

export const loginedSuccess = () => {
  return {
    type: "LOGINED_SUCCESS",
    payload: ""
  };
};

export const loginedFailure = error => {
  return {
    type: "LOGINED_FAILURE",
    payload: "",
    error: error
  };
};

export const loginedCorrect = () => {
  return {
    type: "LOGINED_CORRECT"
  };
};

export const loginedIncorrect = () => {
  return {
    type: "LOGINED_INCORRECT"
  };
};

export const loginedDelete = () => {
  return {
    type: "LOGINED_DELETE"
  };
};

export const loginedSave = payload => {
  return {
    type: "LOGINED_SAVE",
    payload: payload
  };
};

export function saveStorage(data) {
  return dispatch => {
    localStorage.setItem("login", data.login);
    localStorage.setItem("pass", data.pass);
    localStorage.setItem("isUserAuth", true);

    dispatch(loginedSuccess());
  };
}

export function loginedFetch(loginFormData) {
  console.log("Data Login", loginFormData);
  return dispatch => {
    dispatch(loginedRequest());

    axios.get(`${config.domain}profile`).then(result => {
      if (
        result.data.name === loginFormData.login &&
        config.pass === loginFormData.pass
      ) {
        // сохранение в localStorage
        dispatch(saveStorage(loginFormData));
      } else {
        dispatch(loginedIncorrect());

        setTimeout(() => {
          dispatch(loginedCorrect());
          dispatch(loginedFailure());
        }, config.durationNoty * 1000);
      }
    });

    // setTimeout(() => {
    //   dispatch(loginedSuccess());
    // }, 2000);
  };
}
