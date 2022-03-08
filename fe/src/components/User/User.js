import React, { useState } from "react";
import Account from "./Account";
import Other from "./Other";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import {
  CloseButton,
  ContentRegion,
  Layers,
  LayersGrid,
  MenuBar,
  MenuBarContainer,
  MenuHeader,
  MenuItem,
  ContentRegionContainer,
} from "../../styled/styled";

function User({ showSettingUser, setShowSettingUser }) {
  const [name, setName] = useState("Account");
  return (
    <Layers>
      <LayersGrid>
        <MenuBar>
          <MenuBarContainer>
            <MenuHeader>Cài đặt người dùng</MenuHeader>
            <MenuItem onClick={() => setName("Account")}>
              Tài khoản của tôi
            </MenuItem>
            <MenuItem onClick={() => setName("Other")}>Other</MenuItem>
          </MenuBarContainer>
        </MenuBar>
        <ContentRegion>
          <ContentRegionContainer>
            {name === "Account" && <Account />}
            {name === "Other" && <Other />}
          </ContentRegionContainer>
        </ContentRegion>
        <CloseButton onClick={() => setShowSettingUser(false)}>
          <CancelOutlinedIcon />
        </CloseButton>
      </LayersGrid>
    </Layers>
  );
}

export default User;
