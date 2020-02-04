import {
  postsRequest,
  postsFailure,
  postsSuccess
} from "../actions/postsActions";

let defaultData = {
  posts: [],
  isFetched: false,
  isFetching: false,
  error: false
};

export default (state = defaultData, action) => {
  switch (action.type) {
    case postsRequest().type:
      return {
        ...state,
        isFetched: false,
        isFetching: true
      };

    case postsSuccess().type:
      return {
        ...state,
        posts: [...action.payload],
        isFetched: true,
        isFetching: false
      };

    case postsFailure().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};
