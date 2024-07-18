import "./BlogList.css";
import { blogData } from "../../data/blogData";
import BlogItem from "./BlogItem";

const BlogList = () => {
  return (
    <div className="blog-list">
      <h2 className="blog-title"></h2>
      <div className="blog-wrapper">
        {blogData.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            content={blog.content}
            author={blog.author}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
