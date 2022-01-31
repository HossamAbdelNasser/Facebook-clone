import React, { useEffect, useState } from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import { useStateValue } from './StateProvider'
import StoryReel from "./StoryReel.js"
import db from "./firebase.js"


function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })
            )))
    )
}, []);

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map(post=>(
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message= {post.data.message}
                    timestamp={post.data.timestamp}
                    image={post.data.image}
                    username = {post.data.username}
                 />
            ))}
        </div>
    )
}

export default Feed
