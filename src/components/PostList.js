import React, {useContext, useEffect} from 'react'
import BlogContext from '../context/BlogContext'
import {PostCard} from "./PostCard";

export const PostList = () => {
    const blogContext = useContext(BlogContext)
    const {getPosts, blogPosts, loading} = blogContext;

    useEffect(() => {
        getPosts();
    }, [])

    console.log(blogPosts)
    return (
        <div className='posts'>
            <div className="container">
                <h2>Posts</h2>
                {
                    !loading ? (
                        <div className='post-grid-container'>
                            {
                                blogPosts.map((post,i) => {
                                    return (
                                    <PostCard
                                        key={i}
                                        title={post.title}
                                        image={post.image}
                                        author={post.author}
                                        date={post.date}
                                        id={post.id}
                                    />
                                )
                                })
                                }
                        </div>
                            ) : (
                        <div>Loading...</div>
                    )
                            }
            </div>
        </div>
    )
}