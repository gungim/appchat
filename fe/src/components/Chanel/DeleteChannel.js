import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ButtonWarning,
  FloatTingComponents,
  FloatTingWrapper,
  ButtonPrimary,
  Button,
} from '../../styled/styled';
import { deleteChannel } from '../../actions/channels.actions';

function DeleteChannel({
  currentChannel,
  setShowDeleteChannel,
  setShowSettingChannel,
}) {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(deleteChannel(currentChannel._id)).then(() => {
      setShowDeleteChannel(false);
      setShowSettingChannel(false);
    });
  };
  return (
    <FloatTingComponents>
      <FloatTingWrapper background="#36393F" width="500px">
        <div className="notification">
          <h3>Xoá kênh</h3>
          <p>
            Bạn có chắc chắn muốn xoá {currentChannel.name} không. Hành động này
            không thể gỡ bỏ giữa chừng
          </p>
        </div>
        <div>
          <Button onClick={() => setShowDeleteChannel(false)}>Huỷ bỏ</Button>
          <ButtonWarning onClick={handleSubmit}>Xoá kênh</ButtonWarning>
        </div>
      </FloatTingWrapper>
    </FloatTingComponents>
  );
}

export default DeleteChannel;
