import {Link, useParams} from 'react-router-dom';
import formatDateString from '../../helpers/formatDateString.js';
import {CaretLeft, Clock} from "@phosphor-icons/react";
import './PostDetail.css';
import {useEffect, useState} from "react";
import axios from "axios";

function PostDetail() {
    const [post,setPost]=useState({});
    const {id} = useParams();

    useEffect(() => {
        void fetchPost()
    });

    async function fetchPost() {
            try {
                const response = await axios.get("http://localhost:3000/posts/" + id);
                console.log(id);
                setPost(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        const {
        title,
        readTime,
        subtitle,
        author,
        created,
        content,
        comments,
        shares
        } = post;

    async function deletePost() {
        console.log ( id )
        try {
            const result = await axios.delete("http://localhost:3000/posts/" + id);
            console.log("Deleted Last Entry = " , result.statusText);
            // result({}).data.length === 0 ? console.log("Data is verwijderd!!!") : console.log("Data is niet verwijderd!!!");
        } catch (e) {
            //console.error(e);
            console.log("response.statusText =", e.response.statusText); // response.statusText = "OK"
        }
    }

    return (
        <section className="post-detail-section outer-content-container">
            <div className="inner-content-container">
                {/*<button onClick={fetchPost}>Fetch Posts</button>*/}
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p className="post-detail-author">Geschreven door <em>{author}</em> op {formatDateString(created)}</p>
                <span className="post-detail-read-time">
                    <Clock color="#50535C" size={18}/>
                    <p> {readTime} minuten lezen</p>
                </span>
                <p>{content}</p>
                <p>{comments} reacties - {shares} keer gedeeld</p>

                <Link to="/posts" className="back-link">
                    <CaretLeft color="#38E991" size={22}/>
                    <p>Terug naar de overzichtspagina</p>
                </Link>
                <button onClick={deletePost}>Delete This Post</button>

            </div>
        </section>
    );
}

export default PostDetail;