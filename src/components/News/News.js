import React from "react";
import PostsContainer from "../Posts/PostsContainer";
import css from "./News.module.css";

function News() {
  return (
    <div className={css.newsitem}>
      <div className={css.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis,
        nam, unde saepe voluptatibus nulla laborum dicta voluptas veniam facilis
        a quae ducimus? Modi id quis hic veritatis voluptatibus asperiores?
      </div>
      <div className={css.posts}>
        <PostsContainer />
      </div>
    </div>
  );
}

export default News;
