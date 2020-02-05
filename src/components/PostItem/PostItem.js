import React, { Component } from "react";
import { Badge, Button } from "antd";
import css from "./PostItem.module.css";

class PostItem extends Component {
  state = {
    commentsShow: false
  };

  handleCommentShow = () => {
    this.setState({
      commentsShow: !this.state.commentsShow
    });
  };

  render() {
    const { count, title, comments } = this.props;
    const { commentsShow } = this.state;
    let Comments = null;
    if (comments.length !== 0) {
      Comments = (
        <div className={css.footer}>
          <div className={css.control}>
            <Badge size="large" showZero={true} count={count} />
            <Button
              onClick={this.handleCommentShow}
              className={css.btn}
              type="dashed"
            >
              Показать комментарии
            </Button>
          </div>
          <div
            className={[css.comments, commentsShow ? css.show : css.hide].join(
              " "
            )}
          >
            {comments.map((val, k) => {
              return <p key={k}>{val.body}</p>;
            })}
          </div>
        </div>
      );
    }

    return (
      <div className={css.item}>
        {title}
        {Comments}
      </div>
    );
  }
}

export default PostItem;
