import React, { useEffect, useState } from 'react';
import Header from './Header';
import Message from './Message';
import {
  Form,
  ChatContainer,
  ChatContent,
  ChatItem,
  ChatList,
  SansAttachButton,
  UploadInput,
  AttachWrapper,
  ScrollableContainer,
  ChannelTextArea,
  TextArea,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, sendMessage } from '../../actions/message.actions';
import { useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MdOutlineCancel } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';
import './style.css';
import MessageBox from './Editor/MessageBox';

const Chats = () => {
  const { guildId, selectedChannelId } = useLocation().state;
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messages);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [page, setPage] = useState(0);
  const [dataLength, setDataLength] = useState(20);
  const [replyMessage, setReplyMessage] = useState(null);

  const [newMessage, setNewMessage] = useState({
    channel: selectedChannelId,
    user: currentUser.user.id,
    text: '',
    replyId: null,
  });

  useEffect(() => {
    if (selectedChannelId) dispatch(getMessages(selectedChannelId, page));
  }, [selectedChannelId, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = newMessage.text;
    if (text.trim() !== '') {
      if (replyMessage) {
        setNewMessage({
          ...newMessage,
          replyId: replyMessage.user._id,
        });
      }
      setNewMessage({
        ...newMessage,
        text: text,
      });
      dispatch(sendMessage(newMessage)).then(() => {
        setReplyMessage(null);
      });
    }
  };

  const handlePage = () => {
    // setPage(page + 1);
    // useEffect(() => {
    // if (guildId) dispatch(getAllMember(guildId));
    // }, [guildId]);
  };

  const handleChangeText = (e) => {
    if (e) setNewMessage({ ...newMessage, text: e.target.value });
  };

  return (
    <ChatContainer>
      <Header />
      <ChatContent>
        <ChatList className="scrollableDiv">
          {messages?.map((m) => (
            <ChatItem key={m._id}>
              <Message message={m} setReplyMessage={setReplyMessage} />
            </ChatItem>
          ))}
          <button onClick={handlePage}>Load more message</button>
        </ChatList>
      </ChatContent>
      <Form onSubmit={handleSubmit}>
        <ChannelTextArea>
          {/* {replyMessage ? ( */}
          {/* <div> */}
          {/* <div> */}
          {/* <p> */}
          {/* Đang phản hồi <span> {replyMessage.user.username}</span> */}
          {/* </p> */}
          {/* <MdOutlineCancel onClick={() => setReplyMessage(null)} /> */}
          {/* </div> */}
          {/* </div> */}
          {/* ) : ( */}
          {/* <></> */}
          {/* )} */}
          <ScrollableContainer>
            <SansAttachButton>
              <UploadInput>
                <input type="text" />
              </UploadInput>
              <AttachWrapper>
                <IoIosAddCircle style={{ fontSize: '2em' }} />
              </AttachWrapper>
              {/* <Input */}
              {/* type="text" */}
              {/* onChange={handleChangeText} */}
              {/* style={{ marginRight: '30px' }} */}
              {/* /> */}

              <TextArea>
                <MessageBox />
              </TextArea>
            </SansAttachButton>
          </ScrollableContainer>
        </ChannelTextArea>
      </Form>
    </ChatContainer>
  );
};

export default Chats;
