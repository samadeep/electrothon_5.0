import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are Planning something big.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Feb XX, 2022"
          text="AI/ML is the future. Let us exlore how it is?"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Feb XX, 2022"
          text="Ever wondered about neural networks. Let us exlore what they are?"
        />
        <Article
          imgUrl={blog03}
          date="Feb XX, 2022"
          text="Block-Chain is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog04}
          date="Feb XX, 2022"
          text="Curious about Quantum Computing?"
        />
        <Article
          imgUrl={blog05}
          date="Feb XX, 2022"
          text="Let's deep dive into the world of D.S.A"
        />
      </div>
    </div>
  </div>
);

export default Blog;
