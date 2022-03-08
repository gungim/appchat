import React from "react";
import { useDispatch } from "react-redux";

const JoinConversation = (conversationId) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>Join conversation</div>
      <button className="add-room">Add</button>
    </div>
  );
};

export default JoinConversation;
