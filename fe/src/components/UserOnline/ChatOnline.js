import axios from "axios";
import React, { useEffect, useState } from "react";
import { getToken, getUser } from "../../Utils/Common";

function ChatOnline({ onlineUser, currentId, setCurrentChat }) {
  const token = getToken();
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/v1/friends/" + currentId,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setFriends(res.data);
    };
    getFriends();
  }, [currentId, token]);

  useEffect(() => {
    // setOnlineFriends(friends.filter((f) => onlineUser.includes(f._id)));
  }, [friends, onlineUser]);

  const handleClick = () => {};
  return (
    <div className="chat-online">
      {onlineFriends.map((o) => {
        <div className="chat-online-friend" onClick={() => handleClick()}>
          <div className="chat-online-img-container">
            <img className="chat-online-img" src="" alt="" />
            <div className="chat-online-badge"></div>
          </div>
          <span className="chatOnlineName">{o.username}</span>
        </div>;
      })}
    </div>
  );
}

export default ChatOnline;
