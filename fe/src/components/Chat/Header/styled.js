import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  box-shadow: 0 1px 0 rgb(4 4 5 / 20%), 0 1.5px 0 rgb(6 6 7 / 5%),
    0 2px 0 rgb(4 4 5 / 5%);
  height: 48px;
  min-height: 48px;
  width: 100%;
  align-items: center;
  background-color: #36393f;
  padding: 0 8px;
  color: #dcddde;
`;

export const Children = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
`;

export const TabBar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-width: 40px;
  border-radius: 4px;
  margin: 0 8px;
  padding: 2px 8px;
  cursor: pointer;
`;
