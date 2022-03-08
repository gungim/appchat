import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
`;

export const FloatTingComponents = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 888;
`;

export const FloatTingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  z-index: 999;
  padding: 13px;
  border-radius: 4px;
  color: #111;
`;

export const Layers = styled.div`
  position: fixed;
  top: 0;
  lef: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #36393f;
`;
export const LayersGrid = styled.div`
  display: grid;
  grid-template-columns: 28% 72%;
  width: 100vw;
  height: 100vh;
`;

export const DisplayFlex = styled.div`
  position: relative;
  display: flex;
`;

export const DisplayFlexNowrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const DisplayFloatRight = styled.div`
  float: right;
`;

export const MenuBar = styled.div`
  background-color: #2f3136;
  padding-top: 20px;
  align-items: center;
`;

export const MenuBarContainer = styled.div`
  overflow-y: scroll;
  margin-left: 170px;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 4px;
    background-color: transparent;
  }
`;

export const ContentRegion = styled.div`
  width: 100%;
  background-color: #36393f;
`;
export const ContentRegionContainer = styled.div`
  max-width: 700px;
  width: 100%;
`;

export const MenuItem = styled.div`
  margin: 10px 0;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  transition: background-color ease-in-out 0.3s;
  &:hover {
    background-color: #393c42;
  }
  & p,
  span {
    font-size: 14px;
    margin-left: 3px;
  }
  & span {
    font-size: 13px;
    color: #999999;
  }
`;
export const MenuHeader = styled(MenuItem)`
  color: #ccc;
  border-radius: 0;
  cursor: default;
  &:not(:first-child) {
    border-top: 1px solid #ccc;
  }
  &:hover {
    background-color: transparent;
  }
`;

export const MenuItemWarning = styled(MenuItem)`
  color: #f44336;
  &:hover {
    background-color: #f44336;
    color: #fff;
  }
`;

export const CloseButton = styled.div`
  padding: 5px;
  cursor: pointer;
  position: fixed;
  top: ${(props) => (props.top ? props.top : '30px')};
  right: ${(props) => (props.right ? props.right : '50px')};

  color: ${(props) => (props.color ? props.color : '#fff')};
  & > svg {
    width: 1.5em;
    height: 1.5em;
  }
  &:hover > svg {
    color: #ccc;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.color ? props.color : '#fff')};
  padding: 8px 10px;
  border-radius: 4px;
  float: right;
  background: ${(props) => (props.bg ? props.bg : '#000')};
`;

export const ButtonPrimary = styled(Button)`
  background-color: #3ba55d;
`;

export const ButtonWarning = styled(Button)`
  background-color: #ed4245;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: ${(props) =>
    props.background ? props.background : '#303338'};
  color: #000;
  width: 100%;
  outline: none;
  padding: 8px 10px;
  height: 40px;

  transition: all 0.2s ease-in-out;
  font-size: 16px;

  &:focus {
    border: 1px solid #2acaea;
  }
`;

export const SideBar = styled.div`
  width: 100%;
  background: #e1e1e1;
  max-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
`;

export const SideBarContainer = styled.div`
  background-color: #2f3136;
  max-width: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100vh;
  overflow: hidden;
`;

export const SideBarItems = styled.div`
  height: 86vh;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    height: 4px;
    background-color: transparent;
  }
`;

export const SideBarItem = styled.div`
  position: relative;
  margin: 8px;
  padding: 5px 8px;
  cursor: pointer;
  border-radius: 4px;
  color: #b9bbbe;
  transition: background-color ease-in-out 0.3s;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  height: 35px;

  &:hover {
    background-color: #5d5d5d;
  }

  span {
    color: #fff;
  }
`;

export const Border = styled.div`
  width: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  border-radius: 4px;
  padding: 4px;
  transition: background-color ease-in-out 0.3s;
  cursor: pointer;
`;

export const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 50%;
  margin-right: 12px;

  & img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`;

export const HeaderContainer = styled.div`
  color: #b9bbbe;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 1px 0 rgb(4 4 5 / 20%), 0 1.5px 0 rgb(6 6 7 / 5%),
    0 2px 0 rgb(4 4 5 / 5%);
  height: 48px;
  display: flex;
  align-items: center;
  position: relative;
  color: #fff;
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
`;

export const FormFlex = styled(Form)`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;
