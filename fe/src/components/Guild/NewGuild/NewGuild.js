import React, { useState, useEffect } from 'react';
import './style.css';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {
  CloseButton,
  FloatTingComponents,
  FloatTingWrapper,
  Input,
} from '../../../styled/styled';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { createGuild } from '../../../actions/conversations.action';
import FileBase64 from 'react-file-base64';

function NewGuild({ isNewGuild, setIsNewGuild }) {
  const [values, setValues] = useState({
    formData: new FormData(),
  });
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { formData } = values;
  formData.append('name', `May chu cua ${currentUser.user.username}`);
  const [baseImg, setBaseImg] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append('admin', currentUser.user.id);
    dispatch(createGuild(formData)).then(() => {
      setIsNewGuild(false);
    });
  };

  const handleChange = (name) => (e) => {
    const value = name === 'avatar' ? e.target.files[0] : e.target.value;
    formData.append(name, value);
    setValues({ ...values, formData });
  };

  const handleOnDone = (file) => {
    setBaseImg(file);
    formData.append('avatar', file.file);
  };

  return (
    <FloatTingComponents>
      <FloatTingWrapper width="500px" height="min-content" background="#fff">
        <div className="new-conversation-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="new-header">
              <div className="new-header-wrapper">
                <h2>Tuỳ chỉnh máy chủ của bạn </h2>
                <p>
                  Hãy cá nhân hoá máy chủ của bạn bằng cách đặt tên và thêm biểu
                  tượng đại diên. Bạn có thể đổi bất cứ lúc nào{' '}
                </p>
              </div>
            </div>
            <div className="upload-container">
              <div className="upload-img">
                <FileBase64
                  type="file"
                  className="file-input"
                  onChange={handleChange('avatar')}
                  onDone={handleOnDone}
                />
                {baseImg !== null ? (
                  <img src={baseImg.base64} alt="your img" />
                ) : (
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_134042.png"
                    alt="no-imt"
                  />
                )}
              </div>
            </div>

            <div className="name-conversation">
              <label>
                <p>TÊN MÁY CHỦ</p>
              </label>
              <Input
                type="text"
                background="#fff"
                defaultValue={`May chu cuar ${currentUser.user.username}`}
                onChange={handleChange('name')}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </div>
        <CloseButton
          onClick={() => setIsNewGuild(!isNewGuild)}
          color="#000"
          top="5px"
          right="5px"
        >
          <CancelOutlinedIcon />
        </CloseButton>
      </FloatTingWrapper>
    </FloatTingComponents>
  );
}

export default NewGuild;
