import React from "react";
import { HeaderContainer, Children, Toolbar, TabBar, Item } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Children>
        <TabBar>
          <Item>Trực tuyến</Item>
          <Item>Tất cả </Item>
          <Item>Đang chờ xử lý </Item>
          <Item>Đã chặn</Item>
        </TabBar>
      </Children>
      <Toolbar></Toolbar>
    </HeaderContainer>
  );
};

export default Header;
