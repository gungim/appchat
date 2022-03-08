import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllFriend } from '../../../actions/friends.actions';
import { SideBar, SideBarContainer } from '../../../styled/styled';
import Layout from '../../Layout';

function HomeGuild({}) {
  const { user: currentUser } = useSelector((state) => state.auth.user);
  const { friends } = useSelector((state) => state.friends);
  const dispatch = useDispatch();
  const location = useLocation();

  // useEffect(() => {
  // dispatch(getAllFriend(currentUser.id));
  // }, [currentUser]);

  return (
    <SideBar>
      <SideBarContainer>
        <div className="sidebar-wrapper">
          {/* <div className="friendslist"> */}
          {/* {friends?.map((friend) => ( */}
          {/* <div className="friend" key={friend._id}> */}
          {/* <div className="friend-img"> */}
          {/* <img */}
          {/* src="https://cctaxlaw.com/wp-content/uploads/2018/10/noimg.jpg" */}
          {/* alt="" */}
          {/* /> */}
          {/* </div> */}
          {/* <div className="friend-name">{friend.username}</div> */}
          {/* </div> */}
          {/* ))} */}
          {/* </div> */}
          home
        </div>
      </SideBarContainer>
    </SideBar>
  );
}

export default HomeGuild;
