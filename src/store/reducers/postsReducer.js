import {
  postsRequest,
  postsFailure,
  postsSuccess,
  postsFailureDestroy
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
        isFetching: true,
        error: false
      };

    case postsSuccess().type:
      return {
        ...state,
        posts: [...action.payload],
        isFetched: true,
        isFetching: false,
        error: false
      };

    case postsFailure().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.error
      };

    case postsFailureDestroy().type:
      return {
        ...state,
        error: false
      };

    default:
      return state;
  }
};
