import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, ispending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = ()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {/* <h2>Blog ka details as follows</h2> */}
            {/* <h3>blog ka id is {id}</h3> */}
            {ispending && <div>loading...</div>}
            {error && <div> {error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>writen by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}

        </div>
     );
}
 
export default BlogDetails;