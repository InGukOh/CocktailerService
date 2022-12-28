import axios from 'axios';
import React, { ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { GET_S3_URL } from '../../../constants/api';
import { NoEncryptionGmailerrorred } from '@mui/icons-material';

export const InputTitleImg = ({ setImg, img }: any) => {
  const [imgSrc, setImgsrc] = useState<string>('');
  const onChooseImg = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 미리보기
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        const res = e?.target?.result as string;
        setImgsrc(res);
      };
      // 업로드
      const formData = new FormData();
      formData.append('image', file);
      axios
        .post(GET_S3_URL, {
          folder: 'cocktails',
        })
        .then((res) => {
          const key = new URL(res.data).pathname.split('/')[2];
          console.log(key);
          setImg(key);
          axios
            .put(`${res.data}`, file, {
              headers: {
                'Content-Type': file.type,
              },
              withCredentials: false,
            })
            .then((res) => {
              console.log(res.status);
            });
        });
    }
  };

  return (
    <ImgContainer>
      <InsertWrapper>
        <label htmlFor="input_img">
          <AddPhotoAlternateIcon fontSize="large" />
        </label>
        <input
          type="file"
          id="input_img"
          name="img"
          style={{ display: 'none' }}
          onChange={onChooseImg}
        />
      </InsertWrapper>
      <PreviewImg>
        {!imgSrc ? (
          <img src={img} alt="preview" width="300" height="300" />
        ) : (
          imgSrc && <img src={imgSrc} alt="preview" width="300" height="300" />
        )}
      </PreviewImg>
    </ImgContainer>
  );
};

const PreviewImg = styled.div`
  border: 2px solid #dee2e6;
  border-radius: 15px;
  width: 300px;
  height: 300px;
  margin-left: 30px;
`;
const InsertWrapper = styled.div`
  margin-right: 30px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
