import React, { useState } from 'react';
import {
  CloseButton,
  Layers,
  LayersGrid,
  MenuBar,
  MenuBarContainer,
  MenuHeader,
  MenuItem,
  MenuItemWarning,
  ContentRegion,
  ContentRegionContainer,
} from '../../styled';
import Overview from './Overview';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DeleteChannel from './DeleteChannel';
import { useSelector } from 'react-redux';

function SettingChannel({
  isShowSettingChannel,
  setShowSettingChannel,
  currentChannel,
  setCurrentChannel,
}) {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [component, setComponent] = useState('Overview');
  const [showDeleteChannel, setShowDeleteChannel] = useState(false);
  return (
    <Layers>
      <LayersGrid>
        <MenuBar>
          <MenuBarContainer>
            <MenuHeader>
              <p>
                {currentChannel.name}
                {currentChannel.channelType === 'void' ? (
                  <span>Kênh trò chuyện</span>
                ) : (
                  <span>Kênh chat</span>
                )}
              </p>
            </MenuHeader>
            <MenuItem>Tong quan</MenuItem>
            <MenuItemWarning onClick={() => setShowDeleteChannel(true)}>
              Xoá kênh
            </MenuItemWarning>
          </MenuBarContainer>
        </MenuBar>
        <ContentRegion>
          {component === 'Overview' && (
            <ContentRegion>
              <ContentRegionContainer>
                <Overview
                  currentChannel={currentChannel}
                  setShowSettingChannel={setShowSettingChannel}
                />
              </ContentRegionContainer>
            </ContentRegion>
          )}
        </ContentRegion>
      </LayersGrid>
      <CloseButton
        onClick={() => {
          setShowSettingChannel(false);
          setCurrentChannel(null);
        }}
      >
        <CancelOutlinedIcon />
      </CloseButton>
      {showDeleteChannel && (
        <DeleteChannel
          currentChannel={currentChannel}
          setShowDeleteChannel={setShowDeleteChannel}
          setShowSettingChannel={setShowSettingChannel}
        />
      )}
    </Layers>
  );
}

export default SettingChannel;
