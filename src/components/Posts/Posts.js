import React, { Component } from "react";
import { Spin } from "antd";
import PostItem from "../PostItem/PostItem";
import css from "./Posts.module.css";

class Posts extends Component {
  render() {
    const { posts, isFetched } = this.props;
    if (!posts) return null;

    return (
      <Spin spinning={isFetched} tip="Loading...">
        <div className={css.posts}>
          {posts.map((val, key) => {
            let count = val.commentCount;
            return (
              <PostItem
                key={"post" + key}
                count={count}
                title={val.title}
                comments={val.comments}
              />
            );
          })}
        </div>
      </Spin>
    );
  }
}

export default Posts;
