import React, { useEffect, useState } from "react";
import Header from "./Header";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { ChatItem, ChatList } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../redux/actions/message.actions";
import { useParams } from "react-router-dom";

const Messenger = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messages);
  const [page, setPage] = useState(0);
  const [replyMessage, setReplyMessage] = useState(null);

  useEffect(() => {
    if (channelId) dispatch(getMessages(channelId, page));
  }, [channelId, page]);

  return (
    <div className="w-full bg-gray-800 flex flex-col">
      <Header />
      <div className="flex-1 h-full overflow-hidden">
        <ChatList className="px-4">
          {messages?.map((m) => (
            <ChatItem key={m._id}>
              <Message message={m} setReplyMessage={setReplyMessage} />
            </ChatItem>
          ))}
        </ChatList>
      </div>
      <SendMessage
        replyMessage={replyMessage}
        setReplyMessage={setReplyMessage}
      />
    </div>
  );
};

export default Messenger;
