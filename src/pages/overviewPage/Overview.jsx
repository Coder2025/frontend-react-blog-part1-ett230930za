import './Overview.css';
import posts from '../../constants/dataX231001zo.json';
import {Link} from 'react-router-dom';
import axios from "axios";
import {useState} from "react";

function Overview() {

    const [allPosts, setAllPosts] = useState([])
    async function haalPosts(){
        try {
            const result = await axios.get("http://localhost:3000/posts");
            console.log(result);
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <section className="overview-section outer-content-container">
            <div className="inner-content-container">
                <button onClick={() => allPosts()}>Get All Post</button>
                <h1>Bekijk alle {haalPosts.length} posts op het platform</h1>
                <ul className="post-list">
                    {posts.map((haalPosts) => {
                        return <li key={haalPosts.id} className="post-item">
                            <h2 className="post-title"><Link to={`/posts/${haalPosts.id}`}>{haalPosts.title}</Link> ({haalPosts.author})</h2>
                            <p>{haalPosts.comments} reacties - {haalPosts.shares} keer gedeeld</p>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Overview;