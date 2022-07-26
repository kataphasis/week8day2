import { useState } from 'react'
import Post from './Post'

export default function PostList() {
    const [posts, setPosts] = useState([
        {
            id: 0,
            title: "Hollow Knight Beastiary",
            text: "A strange car I've never heard of"
        },
        {
            id: 1,
            title: "footmobile",
            text: "An ancient stone car pushed by feet"
        },
        {
            id: 2,
            title: "Mystery Machine",
            text: "Good for nighttime mystery solving"
        }
    ])

    return (
        <>
            {/* { 
                posts.map(post => {
                    return (
                        <div className="card">
                            <h2>{ post.title }</h2>
                            <p>{ post.text }</p>
                        </div>
                    )
                }) 
            } */}
            { 
                posts.map(post => <Post post={post} key={ post.id } />)
            }
        </>
    )
} 