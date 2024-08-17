import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = ({blogs, title}) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.toReversed().map(blog=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>writen by {blog.author}</p>
                    </Link>
                    
                    {/* <p>content: {blog.body}</p> */}
                    {/* <button className="delete-button">Delete blog</button> */}
                </div>
            ))}
        </div>
        
    );
}
 
export default BlogList;