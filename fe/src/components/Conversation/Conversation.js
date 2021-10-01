import axios from "axios";
import React, { useState, useEffect } from "react";
import { getToken } from "../../Utils/Common";
import "./conversation.css";

function Conversation({ conversation, currentUser }) {
  const [friend, setFriend] = useState(null);
  const token = getToken();
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/user?userId=" + friendId,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setFriend(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, [currentUser, conversation, token]);
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://cf.shopee.vn/file/7c8634b6ed86b13472223b222254e1f4"
        alt=""
      />
      <p className="conversationName">{friend?.username}</p>
    </div>
  );
}

export default Conversation;
