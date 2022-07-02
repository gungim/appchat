import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GuildItemImg } from '../../styled';

const SelectGuild = ({ guildId }) => {
  return (
    <Link
      to={{
        pathname: `/channels/${guildId}`,
      }}
      replace
    >
      <GuildItemImg>
        <img
          src={`http://localhost:8080/api/v1/guilds/avatar/${guildId}`}
          alt=""
        />
      </GuildItemImg>
    </Link>
  );
};

export default SelectGuild;
