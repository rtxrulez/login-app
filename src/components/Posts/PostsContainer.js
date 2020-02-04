import React, { Component } from "react";
import { connect } from "react-redux";
import { postsFetch } from "../../store/actions/postsActions";
import { commentsFetch } from "../../store/actions/commentsActions";
import Posts from "./Posts";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.postsFetch();
    this.props.commentsFetch();
  }

  render() {
    const { posts } = this.props.posts;
    const postFetching = this.props.posts.isFetching;
    const commentsFetching = this.props.comments.isFetching;
    let fetching = false;
    if (postFetching && commentsFetching) {
      console.log("Загрузка");
      fetching = true;
    }

    return (
      <div>
        <Posts fetching={fetching} posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log("st", store);
  return {
    posts: store.posts,
    comments: store.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postsFetch: () => {
      dispatch(postsFetch());
    },
    commentsFetch: () => {
      dispatch(commentsFetch());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
