
import "./BlogItem.css"

const BlogItem = ({title,content,author,date}) => {
  return (
    <div className="blog-item">
     <h2 className="blog-title">{title}</h2>
     <p className="blog-content">{content}</p>
     <strong className="blog-author">{author}</strong>
     <p className="blog-date">{date}</p>
    </div>
  )
}

export default BlogItem