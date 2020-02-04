import {
  commentsRequest,
  commentsFailure,
  commentsSuccess
} from "../actions/commentsActions";

let defaultData = {
  comments: [],
  isFetched: false,
  isFetching: false,
  error: false
};

export default (state = defaultData, action) => {
  switch (action.type) {
    case commentsRequest().type:
      return {
        ...state,
        isFetched: false,
        isFetching: true
      };

    case commentsSuccess().type:
      return {
        ...state,
        comments: [...action.payload],
        isFetched: true,
        isFetching: false
      };

    case commentsFailure().type:
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
