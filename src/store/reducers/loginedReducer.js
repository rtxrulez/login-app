import {
  loginedRequest,
  loginedFailure,
  loginedSuccess,
  loginedFailureDestroy
} from "../actions/loginedActions";

let defaultData = {
  isUserAuth: false,
  isFetched: false,
  isFetching: false,
  error: false
};

export default (state = defaultData, action) => {
  switch (action.type) {
    case loginedRequest().type:
      return {
        ...state,
        isFetched: false,
        isFetching: true,
        error: false
      };

    case loginedSuccess().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        isUserAuth: true,
        error: false
      };

    case loginedFailure().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.error
      };

    case loginedFailureDestroy().type:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};
