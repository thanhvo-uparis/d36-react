import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import styles from './PostDetail.module.scss';

function PostDetail() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all(
            [
                fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => res.json()),
                fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`).then(res => res.json())
            ]
        ).then(([postData, commentData]) => {
            setPost(postData);
            setComment(commentData);
            setLoading(false);
        })
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.back}>
                <button onClick={() => {navigate(-1)}}><i class="fa-solid fa-left-long"></i> Back</button>
            </div>
            <p>PostDetail Page</p>
            {loading && <Loading />}
            <div className={styles.postContainer}>
                <p><span>User Id: </span>{post.userId}</p>
                <p>Title: {post.title}</p>
                <p>{post.body}</p>

            </div>
        </div>
    )
}

export default PostDetail;