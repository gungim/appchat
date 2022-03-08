import styled from 'styled-components';
import { DisplayFlex } from '../../styled/styled';

const MemberWrapper = styled.div`
  min-width: 240px;
  max-width: 240px;
  widht: 100%;
  background-color: #2f3136;
`;
const ChatContainer = styled.div`
  background-color: #36393f;
  display: flex;
  flex: 1 auto 1;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const ChatContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const ChatList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden scroll;
  height: 80vh;
  width: 100%;

  &::-webkit-scrollbar {
    background-color: #2e3338;
    width: 7px;
    margin: 3px;
    left: -10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: #2e3338;
    width: 95%;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 7px;
    background-color: #202225;
  }
`;

const ChatItem = styled.div`
  width: 100%;
  border-radius: 4px;
  color: #fffddd;
  margin: 10px 0;
`;

const Form = styled.form`
  position: relative;
  flex-shrink: 0;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: -8px;
`;

const ChannelTextArea = styled.div`
  margin-bottom: 24px;
  osition: relative;
  width: 100%;
  text-indent: 0;
  border-radius: 8px;
  background-color: #36393f;
`;

const SansAttachButton = styled(DisplayFlex)`
  padding-left: 18px;
  display: flex;
  position: relative;
  height: min-content;
  max-height: 50vh;
`;

const UploadInput = styled.div`
  position: relative;
  width: 0;
  height: 0;
  pointer-events: none;

  input {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    font-size: 0px;
  }
`;

const AttachWrapper = styled.div`
  position: sticky;
  align-items: stretch;

  & svg {
    color: #fff;
    font-size: 2em;
    margin: 5px;
    cursor: pointer;
  }
`;

const ScrollableContainer = styled.div`
  background-color: #40444b;
  max-height: 50vh;
  border-radius: 8px;
`;
const TextArea = styled.div`
  background-color: transparent;
  resize: none;
  border: none;
  appearance: none;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;
  width: 100%;
  height: 44px;
  min-height: 44px;
  color: #fff;
  padding-left: 0;
  padding-right: 10px;

  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: #2e3338;
    width: 7px;
    margin: 3px;
    left: -10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: #2e3338;
    width: 95%;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 7px;
    background-color: #202225;
  }
`;
export {
  ChatItem,
  ChatContent,
  ChatContainer,
  ChatList,
  MemberWrapper,
  Form,
  SansAttachButton,
  UploadInput,
  AttachWrapper,
  ScrollableContainer,
  ChannelTextArea,
  TextArea,
};
