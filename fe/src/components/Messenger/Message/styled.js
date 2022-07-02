import styled from 'styled-components';

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

const UserContainer = styled.div`
  position: relative;
  color: ${(props) => (props.color ? props.color : '#fff')};

  &:hover {
    text-decoration: underline;
  }
`;


export {
  MessageText,
  MessageContentText,
  MessageWrapper,
  MessageAvatar,
  UserContainer,
};
