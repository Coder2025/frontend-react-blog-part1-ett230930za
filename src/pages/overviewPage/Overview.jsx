import "./Overview.css"
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";


function Overview() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        void fetchPosts()
    });
    async function fetchPosts() {
        try{
            const response = await axios.get("http://localhost:3000/posts")
            //console.log(response.data);
            setPosts(response.data)
        }
        catch (e){
            console.error(e)
        }
    }
    return (
        <section className="overview-section outer-content-container">
            <div className="inner-content-container">
                <button onClick={fetchPosts}>Fetch Posts</button>
                <h1>Bekijk alle {posts.length} posts op het platform</h1>
                <ul className="post-list">
                    {posts.map((post) => {
                        return <li key={post.id} className="post-item">
                            <h2 className="post-title"><Link to={`/posts/${post.id}`}>{post.title}</Link> ({post.author})</h2>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Overview;