import { combineReducers } from "redux";
import loginedReducer from "./loginedReducer";
import postsReducer from "./postsReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  logined: loginedReducer,
  posts: postsReducer,
  comments: commentsReducer
});
