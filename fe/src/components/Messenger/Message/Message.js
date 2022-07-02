import React, { useState } from "react";
import parse from "html-react-parser";
import dateFormat from "dateformat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ReplyIcon from "@mui/icons-material/Reply";

const Messenger = ({ message, setReplyMessage }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex">
        {message.user ? (
          <div className="relative group w-full hover:bg-gray-700">
            {message.replyId ? (
              <div>
                <span>Trả lời: </span>
                {message.replyId.username}
              </div>
            ) : (
              <></>
            )}

            <div className="pl-20 relative">
              <div className="relative">
                <div className="absolute top-1/2 -left-16">
                  <img
                    src="https://cctaxlaw.com/wp-content/uploads/2018/10/noimg.jpg"
                    alt=""
                    className="w-10 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="mr-3 hover:underline cursor-pointer">
                    <p
                      onClick={() => setShowProfile(true)}
                      className="text-sm font-bold"
                    >
                      {message.user.username}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-300">
                      {dateFormat(message.createdAt, "hh:MM")}{" "}
                      {dateFormat(message.createdAt, "dd/mm/yyyy")}
                    </span>
                  </div>
                </div>
                <div className="">
                  <p>{message.text}</p>
                </div>
              </div>
            </div>
            <div className="hidden group-hover:flex absolute right-0 -top-3 bg-gray-700 rounded-lg px-4 py-2 shadow-c1">
              <AddReactionIcon />
              <MoreHorizIcon />
              <ReplyIcon onClick={() => setReplyMessage(message)} />
            </div>
          </div>
        ) : (
          <div>{parse(message.text)}</div>
        )}
    </div>
  );
};

export default Messenger;
