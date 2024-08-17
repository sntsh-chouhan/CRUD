// import { useState , useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
// import { wait } from "@testing-library/user-event/dist/utils";


const Home = () => {
    
    const {data: blogs, ispending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            <h2>Home page stuff and some other lorem shit</h2>
            {error && <div>{error}</div>}
            {ispending && <div>loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "ALL Blogs"/>}
            {/* <BlogList blogs = {blogs.filter((blog)=>blog.author==='mario')} title = "Mario's Blogs" handleDelete={handleDelete}/> */}
        </div>
     );
}
 
export default Home;