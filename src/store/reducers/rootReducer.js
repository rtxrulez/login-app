import {
  loginedRequest,
  loginedFailure,
  loginedSuccess,
  loginedCorrect,
  loginedIncorrect
} from "../actions/loginedActions";

let defaultData = {
  isUserAuth: false,
  isFetched: false,
  isFetching: false,
  error: false,
  isLoginCorrect: true
};

export default (state = defaultData, action) => {
  switch (action.type) {
    case loginedRequest().type:
      return {
        ...state,
        isFetched: false,
        isFetching: true
      };

    case loginedSuccess().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        isUserAuth: true
      };

    case loginedFailure().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.error
      };

    case loginedCorrect().type:
      return {
        ...state,
        isLoginCorrect: true
      };

    case loginedIncorrect().type:
      return {
        ...state,
        isLoginCorrect: false
      };

    default:
      return state;
  }
};
