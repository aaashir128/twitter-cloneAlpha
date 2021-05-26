import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "../config/firebase";
import "./TweetBox.css";
import firebase from "firebase";
import { useStateValue } from "../config/StateProvider";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [{user}, dispatch] = useStateValue();


  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: user?.displayName,
      username: user?.displayName,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: user?.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user?.photoURL} />

          <input
            value={tweetMessage}
            placeholder="What's happening"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          className="tweetBox__tweetButton"
          onClick={sendTweet}
          type="submit"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
