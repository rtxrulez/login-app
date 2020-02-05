import axios from "axios";
import config from "../../config/config";

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

export const loginedFailureDestroy = () => {
  return {
    type: "LOGINED_FAILURE_DESTROY",
    payload: "",
    error: false
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
  return dispatch => {
    dispatch(loginedRequest());

    axios
      .get(`${config.domain}profile`)
      .then(result => {
        if (
          result.data.name === loginFormData.login &&
          config.pass === loginFormData.pass
        ) {
          // сохранение в localStorage
          dispatch(saveStorage(loginFormData));
        } else {
          dispatch(loginedFailure("Неверный логин или пароль"));
          dispatch(loginedFailureDestroy());
        }
      })
      .catch(function(error) {
        dispatch(loginedFailure(error.toString()));
        dispatch(loginedFailureDestroy());
      });
  };
}
