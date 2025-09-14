import { useEffect, useState } from "react";
import styles from './Posts.module.scss';
import Loading from "../../components/Loading";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
        }, 500);
    }, [])
    return (
        <>
        {loading && <Loading />}
        <ul className={styles.postsContainer}>
            {posts.map((item) => {
                return (
                    <li className={styles.itemContainer}>
                        <div>
                            <div className={styles.itemHeading}>
                                <h3><span>User Id: </span>{item.userId}</h3>
                            </div>
                        </div>
                        <div className={styles.itemContent}>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </div>
                        <div className={styles.itemFooter}>
                            <button className={styles.itemBtn}>Details</button>
                        </div>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Posts;