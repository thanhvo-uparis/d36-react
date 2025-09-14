import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Posts.module.scss';
import Loading from "../../components/Loading";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPosts, setTotalPosts] = useState(0);

    const getSizePost = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        return data.length;
    }

    useEffect(() => {
        getSizePost().then(size => setTotalPosts(size));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
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
        {
            loading ? "" :
            <div className={styles.pagination}>
                <ul className={styles.listPagination}>
                    <li><i class="fa-solid fa-left-long"></i></li>
                    {Array(Math.floor(totalPosts / 10)).fill().map((_, index) => 
                    {
                        return (
                            <li key={index}><Link className={styles.itemLink}>{index + 1}</Link></li>
                        )
                    })}
                    <li><i class="fa-solid fa-right-long"></i></li>
                </ul>
            </div>
        }
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