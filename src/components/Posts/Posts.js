import React, { Component } from "react";
import { Badge, Button, Spin } from "antd";
import css from "./Posts.module.css";

class Posts extends Component {
  render() {
    const { posts, isFetched } = this.props;
    if (!posts) return null;

    console.log("pro", this.props);
    return (
      <Spin spinning={isFetched} tip="Loading...">
        <div className={css.posts}>
          {posts.map((val, key) => {
            let count = val.commentCount;

            return (
              <div key={key} className={css.postsItem}>
                {val.title}
                <div className={css.footer}>
                  <Badge size="large" showZero={true} count={count} />
                  <Button className={css.btn} type="dashed">
                    Показать еще
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Spin>
    );
  }
}

export default Posts;
