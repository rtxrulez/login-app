import axios from "axios";
import config from "../../config/config";

export const postsRequest = () => {
  return {
    type: "POSTS_REQUEST",
    payload: ""
  };
};

export const postsSuccess = posts => {
  return {
    type: "POSTS_SUCCESS",
    payload: posts
  };
};

export const postsFailure = error => {
  return {
    type: "POSTS_FAILURE",
    payload: "",
    error: error
  };
};

export function postsFetch() {
  return dispatch => {
    console.log("posts fetch");
    dispatch(postsRequest());

    axios.get(`${config.domain}posts`).then(result => {
      console.log("result posts", result.data);
      dispatch(postsSuccess(result.data));
    });
  };
}
