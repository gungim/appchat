import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuild } from "../../redux/actions/guild.action";
import { getAllChannel } from "../../redux/actions/channels.actions";
import ContactlessOutlinedIcon from "@mui/icons-material/ContactlessOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CreateChannel from "./CreateChannel";
import Messenger from "../Messenger";
import { Link, useParams } from "react-router-dom";
import SettingGuild from "../Guild/SettingGuild/SettingGuild";
import {
  ChannelContainer,
  ItemIcon,
  SideBarHeader,
  SideBarItemIcon,
} from "./styled";
import {
  SideBarContainer,
  SideBarItem,
  SideBarItems,
} from "../../styled";
import SettingChannel from "./SettingChannel";

function Channels() {
  const { guildId } = useParams();
  const { channels } = useSelector((state) => state.channels);
  const { guild } = useSelector((state) => state.guild);
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
    <div className="max-h-screen flex w-full overflow-hidden relative">
      <SideBarContainer>
        <div>
          <SideBarHeader onClick={() => setIsShowSettingGuild(true)}>
            <div>
              <p>{guild?.name}</p>
            </div>
            <SettingGuild
              isShowSettingGuild={isShowSettingGuild}
              setIsShowSettingGuild={setIsShowSettingGuild}
            />
          </SideBarHeader>
          <SideBarItems>
            <SideBarItem>
              <div>Kênh thoại</div>
              {guild?.admin === currentUser.user.id ? (
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
                    {c.channelType === "void" ? (
                      <div className="channel-info">
                        <ContactlessOutlinedIcon />
                        <span>{c.name}</span>
                      </div>
                    ) : (
                      <Link
                        to={{
                          pathname: `/channels/${guildId}/${c._id}`,
                          state: {
                            guildId: guildId,
                            selectedChannelId: c._id,
                          },
                        }}
                      >
                        <div className="">
                          <ForumOutlinedIcon />
                          <span>{c.name}</span>
                        </div>
                      </Link>
                    )}
                  </ChannelContainer>
                  {guild?.admin === currentUser.user.id ? (
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
      <Messenger />

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
    </div>
  );
}

export default Channels;
