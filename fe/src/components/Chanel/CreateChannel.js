import CancelOutlined from '@mui/icons-material/CancelOutlined';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createChannel } from '../../actions/channels.actions';
import { Input, CloseButton, ButtonPrimary } from '../../styled/styled';
import './createChannel.css';
import onClickOutside from 'react-onclickoutside';
import { CreateChannelContainer, CreateChannelWrapper } from './styled';

function CreateChannel({
  guildId,
  setIsShowCreateChannel,
  isShowCreateChannel,
}) {
  CreateChannel.handleClickOutside = () => setIsShowCreateChannel(false);

  const [name, setChannel] = useState('');
  const [channelType, setChannelType] = useState('void');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) setChannelType(target.value);
  };

  const handleSubmit = () => {
    const newName = name.trim();
    if (newName === '') return;
    const conversation = guildId;
    const channel = {
      name,
      channelType,
      conversation,
    };
    dispatch(createChannel(channel)).then(() => {
      setIsShowCreateChannel(false);
    });
  };

  return (
    <CreateChannelContainer active={isShowCreateChannel ? true : false}>
      <CreateChannelWrapper background="#36393f" width="500px">
        <CloseButton
          onClick={() => setIsShowCreateChannel(false)}
          top="10px"
          right="10px"
        >
          <CancelOutlined />
        </CloseButton>
        <div className="create-channel-header">
          <div>
            <h1>Tạo kênh mới</h1>
            <p>Trong kenh chat</p>
          </div>
        </div>
        <div className="create-container">
          <div>
            <p>Loại kênh</p>
            <div className="channel-options">
              <input
                type="radio"
                name="channelOptions"
                value="void"
                checked={channelType == 'void'}
                onChange={handleChange}
                id="void"
              />
              <label htmlFor="void">
                <p>Kênh thoại</p>
                <span>Gặp mặt bằng gọi thoại, video và chia sẻ màn hình</span>
              </label>
              <div className="check"></div>
            </div>
            <div className="channel-options">
              <input
                type="radio"
                name="channelOptions"
                value="chat"
                checked={channelType == 'chat'}
                onChange={handleChange}
                id="chat"
              />
              <label htmlFor="chat">
                <p>Kênh chat</p>
                <span>Đăng hình ảnh, sticker, ý kiến, ...</span>
              </label>
              <div className="check"></div>
            </div>
          </div>
          <div>
            <p>Tên kênh</p>
            <Input
              type="text"
              onChange={(e) => setChannel(e.target.value)}
              placeholder="Kênh mới "
              className="channel-input-name"
            />
          </div>
          <ButtonPrimary onClick={handleSubmit}>Tao</ButtonPrimary>
        </div>
      </CreateChannelWrapper>
    </CreateChannelContainer>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => CreateChannel.handleClickOutside,
};
export default onClickOutside(CreateChannel, clickOutsideConfig);
