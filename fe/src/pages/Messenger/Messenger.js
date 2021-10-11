import "./messenger.css";
import Conversation from "../../components/Conversation";
import Message from "../../components/Message";
import ChatOnline from "../../components/ChatOnline";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Header from "../../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";

import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../../actions/conversation.action";
import { getMessages, sendMessage } from "../../actions/message.actions";

export default function Messenger() {
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [page, setPage] = useState(0);
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const { user: currendUser } = useSelector((state) => state.auth);
  const { conversation } = useSelector((state) => state.conversation);
  const messages = useSelector((state) => state.messagesReducer.messages);

  useEffect(() => {
    dispatch(getConversations(currendUser.user.id));
  }, [currendUser]);

  useEffect(() => {
    if (currentChat && currentChat._id)
      dispatch(getMessages(currentChat._id, page));
    else return;
  }, [currentChat, page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      sendMessage({
        conversationId: currentChat._id,
        sender: currendUser.user.id,
        text: newMessage,
      })
    ).then(() => {
      setNewMessage("");
    });
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Header />
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-input">
            <input
              placeholder="Search for friends"
              className="chat-menu-input"
            />
          </div>
          <div className="chat-menu-wrapper">
            {conversation?.map((c) => (
              <div
                onClick={() => {
                  setCurrentChat(c);
                }}
                key={c._id}
              >
                <Conversation conversation={c} currentUser={currendUser} />
              </div>
            ))}
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            {currentChat ? (
              <>
                <div className="chat-box-top" id="chat-box-top-id">
                  <InfiniteScroll
                    dataLength={10}
                    next={() => setPage(page + 1)}
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                    inverse={true} //
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="chat-box-top-id"
                    endMessage="You fetch all message"
                  >
                    {messages?.map((m) => (
                      <div ref={scrollRef} key={m._id}>
                        <Message
                          message={m}
                          own={m.sender === currendUser.user.id}
                        />
                      </div>
                    ))}
                  </InfiniteScroll>
                </div>
                <div className="chat-box-bottom">
                  <input
                    type="text"
                    className="chat-message-input"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  />
                  <button className="chat-submit-button" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="no-conversation-text">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chat-online">
          <div className="chat-online-wrapper"></div>
        </div>
      </div>
    </>
  );
}
