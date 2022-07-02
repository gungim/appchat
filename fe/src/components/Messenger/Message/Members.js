import React, { useEffect } from 'react';
import { MemberWrapper } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  AvatarContainer,
  AvatarWrapper,
  SideBarItems,
} from '../../styled/styled';
import { useLocation, useParams } from 'react-router-dom';
import { getAllMember } from '../../actions/members.actions';

const Members = ({ guildId }) => {
  const { members } = useSelector((state) => state.members);
  return (
    <MemberWrapper>
      <SideBarItems>
        {members?.map((m) => (
          <AvatarContainer key={m._id}>
            <AvatarWrapper>
              <img
                src="https://cctaxlaw.com/wp-content/uploads/2018/10/noimg.jpg"
                alt=""
              />
            </AvatarWrapper>
            {m.user.username}
          </AvatarContainer>
        ))}
      </SideBarItems>
    </MemberWrapper>
  );
};

export default Members;
