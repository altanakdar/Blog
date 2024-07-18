import { useState } from "react";
import "./AddNewBlog.css";
import Button from "../UI/Button";

const AddNewBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
  });

  const [blogList, setBlogList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleChange({ target: { name, value } }) {
    setBlogData({ ...blogData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedBlogList = blogList.map((blog, index) =>
        index === editIndex ? blogData : blog
      );
      setBlogList(updatedBlogList);
      setEditIndex(null);
    } else {
      setBlogList([...blogList, blogData]);
    }
    setBlogData({ title: "", content: "", author: "", date: "" });
  }

  function handleEdit(index) {
    setBlogData(blogList[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    const updatedBlogList = blogList.filter((_, i) => i !== index);
    setBlogList(updatedBlogList);
  }

  return (
    <div>
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="blog-input">
          <label className="blog-title">Title</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Blog Başlığı giriniz"
            name="title"
            value={blogData.title}
          />
        </div>
        <div className="blog-input">
          <label className="blog-title">Content</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="İçeriği giriniz"
            name="content"
            value={blogData.content}
          />
        </div>
        <div className="blog-input">
          <label className="blog-title">Author</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="İçeriği giriniz"
            name="author"
            value={blogData.author}
          />
        </div>
        <div className="blog-input">
          <label className="blog-title">Date</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="İçeriği giriniz"
            name="date"
            value={blogData.date}
          />
        </div>
        <Button color="primary" size="md" type="submit">
          {editIndex !== null ? "Blog Güncelle" : "Yeni Blog Ekle"}
        </Button>
      </form>
      <div className="blog-list">
        {blogList.map((blog, index) => (
          <div key={index} className="blog-item">
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-content">{blog.content}</p>
            <strong className="blog-author">{blog.author}</strong>
            <p className="blog-date">{blog.date}</p>
            <Button color="secondary" size="sm" onClick={() => handleEdit(index)}>
              Düzenle
            </Button>
            <Button color="danger" size="sm" onClick={() => handleDelete(index)}>
              Sil
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddNewBlog;
