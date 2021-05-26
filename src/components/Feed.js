import React, { useEffect, useState } from "react";
import db from "../config/firebase";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy('timestamp','desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) =>  doc.data() ))
      );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified
            text={post.text}
            image={post.image}
            avatar={post.avatar}
            timestamp={post.timestamp}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
