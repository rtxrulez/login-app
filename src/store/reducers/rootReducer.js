import { combineReducers } from "redux";
import loginedReducer from "./loginedReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  logined: loginedReducer,
  posts: postsReducer
});
