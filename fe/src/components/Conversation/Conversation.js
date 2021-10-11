import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriend } from "../../actions/user.actions";
import "./conversation.css";

function Conversation({ conversation, currentUser }) {
  const friendId = conversation.members.find((m) => m !== currentUser._id);
  const dispatch = useDispatch();

  const friend = useSelector((state) => state.userReducer.friend);

  useEffect(() => {
    dispatch(getFriend(friendId));
  }, [friendId]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          friend?.image && friend.image
            ? ""
            : "https://cctaxlaw.com/wp-content/uploads/2018/10/noimg.jpg"
        }
        alt=""
      />
      <p className="conversationName">{friend?.username}</p>
    </div>
  );
}

export default Conversation;
