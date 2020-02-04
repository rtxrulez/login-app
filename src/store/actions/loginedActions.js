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

export function loginedFetch(loginFormData) {
  console.log("Data Login", loginFormData);
  return dispatch => {
    dispatch(loginedRequest());

    axios.get(`${config.domain}profile`).then(result => {
      console.log("load list: ", result.data.name);

      if (
        result.data.name === loginFormData.login &&
        config.pass === loginFormData.pass
      ) {
        console.log("OKKK");
      } else {
        dispatch(loginedIncorrect());
        setTimeout(() => {
          dispatch(loginedCorrect());
        }, config.durationNoty * 1000);
      }
      // dispatch(addToListSinga(result.data));
      // dispatch(loadSingaSuccess());
    });

    // setTimeout(() => {
    //   dispatch(loginedSuccess());
    // }, 2000);
  };
}
