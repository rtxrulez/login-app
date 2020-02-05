import React, { Component } from "react";
import { connect } from "react-redux";
import { postsFetch } from "../../store/actions/postsActions";
import Posts from "./Posts";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.postsFetch();
  }

  render() {
    const { posts, isFetched, error } = this.props.posts;

    return (
      <div>
        <Posts error={error} isFetched={!isFetched} posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log("sr", store);
  return {
    posts: store.posts,
    error: store.posts.posts.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postsFetch: () => {
      dispatch(postsFetch());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
