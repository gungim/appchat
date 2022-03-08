import React, { useState } from 'react';
import {
  MessageContainer,
  MessageContentText,
  MessageText,
  MessageWrapper,
  MessageButton,
  MessageButtonIcon,
  UserContainer,
  MessageContent,
  ReplyMessageContainer,
  MessageAvatar,
} from './styled';
import parse from 'html-react-parser';
import { DisplayFlexNowrap } from '../../../styled/styled';
import dateFormat from 'dateformat';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ReplyIcon from '@mui/icons-material/Reply';

const Messenger = ({ message, setReplyMessage }) => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <MessageContainer>
      <MessageWrapper>
        {message.user ? (
          <MessageContent>
            {message.replyId ? (
              <ReplyMessageContainer>
                <div>tra loi {message.replyId.username}</div>
              </ReplyMessageContainer>
            ) : (
              <></>
            )}

            <div style={{ width: '100%' }}>
              <MessageContentText>
                <span className="create-at">
                  {dateFormat(message.createdAt, 'hh:MM')}
                </span>
                <UserContainer color="#B698F9">
                  <p onClick={() => setShowProfile(true)}>
                    {message.user.username}
                  </p>
                  <MessageAvatar>
                    <img
                      src="https://cctaxlaw.com/wp-content/uploads/2018/10/noimg.jpg"
                      alt=""
                    />
                  </MessageAvatar>
                </UserContainer>
                <span>{dateFormat(message.createdAt, 'dd/mm/yyyy')}</span>
              </MessageContentText>
              <MessageText>
                <p>{message.text}</p>
              </MessageText>
            </div>
            <MessageButton>
              <DisplayFlexNowrap>
                <MessageButtonIcon>
                  <AddReactionIcon />
                </MessageButtonIcon>
                <MessageButtonIcon>
                  <MoreHorizIcon />
                </MessageButtonIcon>
                <MessageButtonIcon onClick={() => setReplyMessage(message)}>
                  <ReplyIcon />
                </MessageButtonIcon>
              </DisplayFlexNowrap>
            </MessageButton>
          </MessageContent>
        ) : (
          <div>{parse(message.text)}</div>
        )}
      </MessageWrapper>
    </MessageContainer>
  );
};

export default Messenger;
