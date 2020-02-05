import React, { Component } from "react";
import { Spin, notification } from "antd";
import config from "../../config/config";
import PostItem from "../PostItem/PostItem";
import css from "./Posts.module.css";

const errorMsg = {
  duration: config.durationNoty,
  message: "Ошибка в постах",
  description: "Ошибка!"
};

class Posts extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      errorMsg.description = nextProps.error;
      notification.destroy();
      notification.error(errorMsg);
    }
  }

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
