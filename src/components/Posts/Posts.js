import React, { Component } from "react";
import { Badge, Button, Spin } from "antd";
import css from "./Posts.module.css";

class Posts extends Component {
  render() {
    const { posts, fetching } = this.props;
    if (!posts) return null;

    console.log("pro", this.props);
    return (
      <Spin spinning={fetching} tip="Loading...">
        <div className={css.posts}>
          {posts.map((val, key) => {
            return (
              <div key={key} className={css.postsItem}>
                {val.title}
                <div className={css.footer}>
                  <Badge size="large" count={25} />
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
