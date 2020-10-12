import React, {useContext, useEffect} from 'react'
import  {useParams} from "react-router-dom";
import BlogContext from '../context/BlogContext'


export const Post = () => {
    const blogContext = useContext(BlogContext)
    const {
        getPostById,
        currentBlogPost
    } = blogContext;

    let {postId} = useParams();
    console.log(postId)

    useEffect(() => {
        getPostById(postId)
    }, [])

    return (
        <div className='post'>
            {
                currentBlogPost ? (
                    <>
                        <div className="post-image" style={{
                            width: '100%',
                            height: '300px',
                            backgroundImage: `url('${currentBlogPost.image}')`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            position: 'relative',
                            borderTopRightRadius: '2px',
                            borderTopLeftRadius: '2px'
                        }}/>
                        <div className="post-content">
                            <h2>{currentBlogPost.title}</h2>
                            <p>{currentBlogPost.content}</p>
                        </div>
                    </>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    )
}