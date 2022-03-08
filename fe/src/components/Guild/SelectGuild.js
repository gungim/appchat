import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GuildItemImg } from './styled';

const SelectGuild = ({ guildId, selectedChannelId }) => {
  return (
    <Link
      to={{
        pathname: `/channels/${guildId}/${selectedChannelId}`,
        state: { guildId, selectedChannelId },
      }}
      replace
    >
      <GuildItemImg>
        <img
          src={`http://localhost:8080/api/v1/conversations/avatar/${guildId}`}
          alt=""
        />
      </GuildItemImg>
    </Link>
  );
};

export default SelectGuild;
