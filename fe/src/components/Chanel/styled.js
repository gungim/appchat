import styled from 'styled-components';

const CreateChannelContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 101;
  background: red;
  padding: 10px;
  transition: 0.25s ease all;

  transform: ${(props) => (props.active ? `scale(1)` : `scale(0)`)};
`;

const CreateChannelWrapper = styled.div`
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
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;
const SideBarHeader = styled.div`
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
const SideBarItemIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    font-size: 1em;
    color: ${(props) => (props.color ? props.color : '#fff')};
  }
`;

const ItemIcon = styled.div`
  position: relative;
  margin-left: 4px;
  line-height: 0;
`;

const ChannelContainer = styled.div`
  width: 100%;
`;
export {
  CreateChannelContainer,
  CreateChannelWrapper,
  SideBarHeader,
  ItemIcon,
  SideBarItemIcon,
  ChannelContainer,
};
