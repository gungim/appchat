import styled from 'styled-components';

const SettingContainer = styled.div`
  padding: 5px;
  border-radius: 4px;
  width: 220px;
  position: absolute;
  top: 55px;
  left: 50%;
  z-index: 200;
  color: #fff;
  background-color: #18191c;
  transform: translateX(-50%)
    ${(props) => (props.active ? `scale(1)` : `scale(0)`)};
  transform-origin: top;
  transition: 0.25s ease all;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const SettingWrapper = styled.div`
  overflow: hidden scroll;
  padding-right: 0px;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 4px;
    background-color: transparent;
  }
`;

const SettingGroup = styled.div`
  padding: 3px 0;
  border-bottom: 1px solid #3e3e3e;

  &:last-child {
    border-bottom: none;
  }
`;

const SettingItem = styled.div`
  cursor: pointer;
  white-space: nowrap;
  width: 100%;
  color: ${(props) => (props.color ? props.color : '#b9bbbe')};
  transition: 0.1s ease all;
  border-radius: 3px;
  padding: 6px 8px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #5662e8;
    color: #fff;
  }

  &:hover svg {
    color: #fff;
  }
`;

const SettingIcon = styled.div`
  & svg {
    color: ${(props) => (props.color ? props.color : '#b9bbbe')};
    font-size: 1.2em;
  }
`;

export {
  SettingContainer,
  SettingWrapper,
  SettingGroup,
  SettingItem,
  SettingIcon,
};
