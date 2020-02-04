import React, { Component } from "react";
import { connect } from "react-redux";
import { postsFetch } from "../../store/actions/postsActions";
import Posts from "./Posts";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.postsFetch();
  }

  render() {
    const { posts, isFetched } = this.props.posts;

    return (
      <div>
        <Posts isFetched={!isFetched} posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    posts: store.posts
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
