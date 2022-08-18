import { useState, useEffect } from "react";
import Navbar from "../Navbar";

import "./CreateBlog.css"


function CreateBlog(){

    // const date = new Date();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    const titleHandler =(e) => setTitle(e.target.value)
    const descHandler = (e) => setDesc(e.target.value);

    const blogHandler =(e) =>{
        e.preventDefault();

        let blog = {
            title: title,
            desc: desc,
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString()
        }
        console.log(blog);
    }

    return <>
        <Navbar/>
        <div className="createBlog">
            <h1>Create A Blog</h1>
            <form className="createBlog_form" onSubmit={blogHandler}>
                <input className="blog_title" placeholder="title" onChange={titleHandler} value={title}/>
                <textarea className="blog_desc" rows="10" cols="100" placeholder="Write blog" onChange={descHandler} value={desc}/>
                <button className="blog_btn">Submit</button>
            </form>
        </div>
    </>
}

export default CreateBlog;