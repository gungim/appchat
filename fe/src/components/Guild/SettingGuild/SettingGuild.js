import React from 'react';
import onClickOutside from 'react-onclickoutside';
import {
  SettingContainer,
  SettingGroup,
  SettingIcon,
  SettingItem,
  SettingWrapper,
} from './setting.styled';

import { RiAddCircleFill, RiSettings5Fill } from 'react-icons/ri';
import { GiStaryu } from 'react-icons/gi';
import { HiUserAdd } from 'react-icons/hi';

function SettingGuild({ isShowSettingGuild, setIsShowSettingGuild }) {
  SettingGuild.handleClickOutside = () => setIsShowSettingGuild(false);

  return (
    <SettingContainer active={isShowSettingGuild ? true : false}>
      <SettingWrapper>
        <SettingGroup>
          <SettingItem>
            <div>Nâng cấp máy chủ</div>
            <SettingIcon color="#FF73FA">
              <GiStaryu />
            </SettingIcon>
          </SettingItem>
        </SettingGroup>
        <SettingGroup>
          <SettingItem color="#949CF7">
            <div>Mời mọi người</div>
            <SettingIcon color="#949CF7">
              <HiUserAdd />
            </SettingIcon>
          </SettingItem>
          <SettingItem>
            <div>Tạo kênh </div>
            <SettingIcon>
              <RiAddCircleFill />
            </SettingIcon>
          </SettingItem>
          <SettingItem>
            <div>Cài đặt máy chủ</div>
            <SettingIcon>
              <RiSettings5Fill />
            </SettingIcon>
          </SettingItem>
        </SettingGroup>
      </SettingWrapper>
    </SettingContainer>
  );
}
const clickOutsideConfig = {
  handleClickOutside: () => SettingGuild.handleClickOutside,
};

export default onClickOutside(SettingGuild, clickOutsideConfig);
