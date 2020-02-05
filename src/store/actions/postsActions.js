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

export const postsFailureDestroy = () => {
  return {
    type: "POSTS_FAILURE_DESTROY",
    payload: "",
    error: false
  };
};

export function postsFetch() {
  return dispatch => {
    console.log("posts  fetch");
    dispatch(postsRequest());

    const getPosts = () => {
      return axios.get(`${config.domain}posts`);
    };

    const getComments = () => {
      return axios.get(`${config.domain}comments`);
    };

    axios
      .all([getPosts(), getComments()])
      .then(
        axios.spread(function(resPosts, resComments) {
          let posts = resPosts.data;
          let comments = resComments.data;
          let newPosts = [...posts];

          posts.map((postItem, k) => {
            newPosts[k].commentCount = 0;
            newPosts[k].comments = [];
            comments.map(commentItem => {
              if (postItem.id === commentItem.postId) {
                newPosts[k].commentCount = newPosts[k].commentCount + 1;
                newPosts[k].comments.push(commentItem);
              }
            });
          });

          dispatch(postsSuccess(newPosts));
        })
      )
      .catch(error => {
        console.log("error: ", error);
        dispatch(postsFailure(error.toString()));
        dispatch(postsFailureDestroy());
      });
  };
}
