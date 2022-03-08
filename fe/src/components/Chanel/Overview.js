import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateChannel } from '../../actions/channels.actions';
import { ButtonPrimary, Input } from '../../styled/styled';
import './overview.css';

function Overview({ currentChannel, setShowSettingChannel }) {
  const [channel, setChannel] = useState({
    _id: currentChannel._id,
    name: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (channel.name !== '')
      dispatch(updateChannel(channel)).then(() => {
        setShowSettingChannel(false);
      });
  };
  return (
    <div className="overview">
      <div className="overview-container">
        <h1>TỔNG QUAN</h1>
        <div className="overview-wrapper">
          <div className="overview-name-channel">
            <p>Tên kênh </p>
            <Input
              defaultValue={currentChannel.name}
              type="text"
              onChange={(e) => setChannel({ ...channel, name: e.target.value })}
            />
            <span className="focus-border"></span>
          </div>
        </div>
        <ButtonPrimary onClick={handleSubmit}>Cập nhật</ButtonPrimary>
      </div>
    </div>
  );
}

export default Overview;
