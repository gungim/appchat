import styled from 'styled-components';

const GuildComponent = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  background-color: #202225;
  height: 100vh;
  max-width: 70px;
  width: 100%;
`;

const GuildWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
  align-items: center;
  padding-top: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  background-color: rgba(229, 229, 229, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all ease-in-out 0.3s;
  width: 50px;
  height: 50px;
`;

const GuildItemImg = styled(Item)`
  width: 50px;
  border-radius: 50%;
  transition: border-radius ease-in-out 0.3s;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: border-radius ease-in-out 0.3s;
  }
  &:hover img {
    border-radius: 30%;
  }
`;

const GuildItemWrapper = styled.div`
  padding: 0;
  margin-top: 10px;
`;

const CircleIcon = styled(Item)`
  margin-bottom: 10px;
  padding: 5px;
  & svg {
    width: 1.5em;
    height: 1.5em;
    transition: all ease-in-out 0.3s;
    color: #fff;
  }
  &:hover svg {
    color: #fff;
  }

  &:hover {
    color: #fff;
    background-color: #5865f2;
    border-radius: 30%;
  }
`;

const CircleIconGreen = styled(Item)`
  margin-bottom: 10px;
  padding: 5px;
  & svg {
    width: 1em;
    height: 1em;
    color: #379634;
    transition: all ease-in-out 0.3s;
  }
  &:hover svg {
    color: #ccc;
  }
  &:hover {
    background-color: #379634;
    border-radius: 30%;
  }
`;

export {
  CircleIcon,
  CircleIconGreen,
  GuildComponent,
  GuildWrapper,
  GuildItemWrapper,
  GuildItemImg,
};
