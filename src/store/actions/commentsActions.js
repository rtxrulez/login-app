import axios from "axios";
import config from "../../config/config";

export const commentsRequest = () => {
  return {
    type: "COMMENTS_REQUEST",
    payload: ""
  };
};

export const commentsSuccess = comments => {
  return {
    type: "COMMENTS_SUCCESS",
    payload: comments
  };
};

export const commentsFailure = error => {
  return {
    type: "COMMENTS_FAILURE",
    payload: "",
    error: error
  };
};

export function commentsFetch() {
  return dispatch => {
    console.log("comments fetch");
    dispatch(commentsRequest());

    axios.get(`${config.domain}comments`).then(result => {
      console.log("result comments", result.data);
      dispatch(commentsSuccess(result.data));
    });
  };
}
