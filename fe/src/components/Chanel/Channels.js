import React, { useEffect, useState } from 'react';
import './channels.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGuild } from '../../actions/conversations.action';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  SideBar,
  SideBarContainer,
  SideBarItem,
  SideBarItems,
  HeaderContainer,
} from '../../styled/styled';
import CreateChannel from './CreateChannel';
import Chats from '../Chat';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getAllChannel } from '../../actions/channels.actions';
import SettingGuild from '../Guild/SettingGuild/SettingGuild';
import {
  ChannelContainer,
  ItemIcon,
  SideBarHeader,
  SideBarItemIcon,
} from './styled';
import SettingChannel from './SettingChannel';

function Channels() {
  const { guildId, channelId } = useParams();
  const { channels } = useSelector((state) => state.channels);
  const { conversation } = useSelector((state) => state.conversation);
  const dispatch = useDispatch();
  const [isShowCreateChannel, setIsShowCreateChannel] = useState(false);
  const [isShowSettingGuild, setIsShowSettingGuild] = useState(false);
  const [isShowSettingChannel, setShowSettingChannel] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [currentChannel, setCurrentChannel] = useState(null);

  useEffect(() => {
    if (guildId !== null) dispatch(getGuild(guildId));
  }, [guildId]);

  useEffect(() => {
    dispatch(getAllChannel(guildId));
  }, [guildId]);

  return (
    <SideBar>
      <SideBarContainer>
        <div className="channel-private">
          <SideBarHeader onClick={() => setIsShowSettingGuild(true)}>
            <div className="channel-header-wrapper">
              <p>{conversation?.name}</p>
            </div>
            <SettingGuild
              isShowSettingGuild={isShowSettingGuild}
              setIsShowSettingGuild={setIsShowSettingGuild}
            />
          </SideBarHeader>
          <SideBarItems>
            <SideBarItem>
              <div className="channel-type-name">Void</div>
              {conversation?.admin === currentUser.user.id ? (
                <SideBarItemIcon>
                  <ItemIcon onClick={() => setIsShowCreateChannel(true)}>
                    <AddCircleOutlinedIcon />
                  </ItemIcon>
                </SideBarItemIcon>
              ) : (
                <></>
              )}
            </SideBarItem>
            {channels?.map((c) => (
              <div key={c._id}>
                <SideBarItem>
                  <ChannelContainer>
                    <Link
                      to={{
                        pathname: `/channels/${guildId}/${c._id}`,
                        state: { guildId: guildId, selectedChannelId: c._id },
                      }}
                    >
                      <div className="channel-name">
                        <div className="channel-type">
                          {c.channelType === 'void' ? (
                            <div className="channel-info">
                              <ContactlessOutlinedIcon />
                              <span>{c.name}</span>
                            </div>
                          ) : (
                            <div className="channel-info">
                              <ForumOutlinedIcon />
                              <span>{c.name}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </ChannelContainer>
                  {conversation?.admin === currentUser.user.id ? (
                    <SideBarItemIcon>
                      <ItemIcon>
                        <AddCircleOutlinedIcon />
                      </ItemIcon>
                      <ItemIcon
                        onClick={() => {
                          setShowSettingChannel(true);
                          setCurrentChannel(c);
                        }}
                      >
                        <SettingsIcon />
                      </ItemIcon>
                    </SideBarItemIcon>
                  ) : (
                    <></>
                  )}
                </SideBarItem>
              </div>
            ))}
          </SideBarItems>
        </div>
      </SideBarContainer>
      <Chats guildId={guildId} channelId={channelId} />

      <CreateChannel
        guildId={guildId}
        setIsShowCreateChannel={setIsShowCreateChannel}
        isShowCreateChannel={isShowCreateChannel}
      />
      {isShowSettingChannel && currentChannel && (
        <SettingChannel
          isShowSettingChannel={isShowSettingChannel}
          setShowSettingChannel={setShowSettingChannel}
          currentChannel={currentChannel}
          setCurrentChannel={setCurrentChannel}
        />
      )}
    </SideBar>
  );
}

export default Channels;
