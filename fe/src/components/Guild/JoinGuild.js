import React from "react";
import { useDispatch } from "react-redux";

const JoinGuild = (guildId) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>Join guild</div>
      <button className="add-room">Add</button>
    </div>
  );
};

export default JoinGuild;
