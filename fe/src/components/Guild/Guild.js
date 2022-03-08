import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewGuild from './NewGuild/NewGuild';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { Border } from '../../styled/styled';
import AppleIcon from '@mui/icons-material/Apple';
import {
  GuildComponent,
  GuildWrapper,
  CircleIcon,
  GuildItemWrapper,
  CircleIconGreen,
} from './styled';
import './style.css';
import { Link } from 'react-router-dom';
import SelectGuild from './SelectGuild';

function Guilds() {
  const dispatch = useDispatch();
  const [isNewGuild, setIsNewGuild] = useState(false);
  const { conversations } = useSelector((state) => state.conversations);
  const [activeId, setActiveId] = useState('home');

  return (
    <>
      <GuildComponent>
        <GuildWrapper>
          <GuildItemWrapper>
            <Link to="/channels/@me">
              <CircleIcon
                className={activeId === 'home' ? 'active' : ''}
                onClick={() => {
                  setActiveId('home');
                }}
              >
                <AppleIcon />
                <Border />
              </CircleIcon>
            </Link>
          </GuildItemWrapper>
          <GuildItemWrapper>
            {conversations?.map((c) => (
              <CircleIcon
                className={activeId === c.conversation._id ? 'active' : ''}
                key={c.conversation._id}
              >
                <SelectGuild
                  key={c.conversation._id}
                  guildId={c.conversation._id}
                  selectedChannelId={c.selectedChannel._id}
                  onClick={() => setActiveId(c.conversation._id)}
                />
              </CircleIcon>
            ))}
            <CircleIconGreen onClick={() => setIsNewGuild(!isNewGuild)}>
              <AddOutlinedIcon />
            </CircleIconGreen>
            <CircleIconGreen
              onClick={() => setActiveId('Discover')}
              className={activeId === 'Discover' ? 'active' : ''}
            >
              <Link to="/discover">
                <DashboardOutlinedIcon />
              </Link>
              <Border />
            </CircleIconGreen>
          </GuildItemWrapper>
        </GuildWrapper>
        {isNewGuild && (
          <NewGuild isNewGuild={isNewGuild} setIsNewGuild={setIsNewGuild} />
        )}
      </GuildComponent>
    </>
  );
}

export default Guilds;
