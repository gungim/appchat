import styled from 'styled-components';

const MessageButton = styled.div`
  position: absolute;
  top: -100%;
  right: 10px;
  border-radius: 4px;
  background-color: #36393f;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  user-select: none;
  transform: translateY(50%);

  z-index: 10;
  opacity: 0;
`;
const MessageAvatar = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
  margin-right: 12px;
  position: absolute;
  top: 0px;
  left: -60px;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #36393f;
  padding-left: 72px;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-right: 48px !important;
  position: relative;
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #2f3136;
  }
  &:hover .create-at {
    opacity: 1;
  }

  & .create-at {
    position: absolute;
    top: 50%;
    left: -100px;
    transform: translate(0, 50%);
    opacity: 0;
    transition: all ease-in-out 0.2s;
  }

  &:hover ${MessageButton} {
    opacity: 1;
    z-index: 10;
  }
`;

const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const MessageContentText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  & p {
  }
  & span {
    margin-left: 10px;
    color: #aaa;
    font-size: 10px;
  }
`;

const MessageText = styled.div`
  margin-top: 4px;
  & p {
    font-weight: 300;
  }
`;

const MessageButtonIcon = styled.div`
  padding: 3px;

  & svg {
    font-size: 1.2em;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const MessageContent = styled.div`
  position: relative;
  width: 100%;
`;

const ReplyMessageContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  color: #fff;
  margin-bottom: 7px;
  font-size: 14px;
  &:before {
    width: 38px;
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    right: 100%;
    bottom: 0;
    margin-right: 4px;
    margin-top: 0;
    margin-left: 0;
    margin-bottom: calc(0.125rem - 4px);
    border-left: 2px solid #4f545c;
    border-bottom: 0 solid red;
    border-right: 0 solid red;
    border-top: 2px solid #4f545c;
    border-top-left-radius: 6px;
  }
`;

const ReplyMessageWrapper = styled.div`
  background-color: #2f3136;
  width: 90%;
  padding: 10px 5px;
  display: flex;
  justify-content:start
  align-items: center;
  font-size: 14px;

  span {
    color: #ccc;
  }
`;

const UserContainer = styled.div`
  position: relative;
  color: ${(props) => (props.color ? props.color : '#fff')};

  &:hover {
    text-decoration: underline;
  }
`;

const ReplyMessage = styled.div``;

export {
  MessageButton,
  MessageButtonIcon,
  MessageText,
  MessageContentText,
  MessageWrapper,
  MessageContainer,
  ReplyMessageContainer,
  ReplyMessageWrapper,
  MessageContent,
  MessageAvatar,
  UserContainer,
};
