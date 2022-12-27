import styled from 'styled-components';
import { ChangeEvent, useEffect, useState } from 'react';
import { CockflowBadge } from '../../components/Cockflow/CockflowBadge';
import { Middle, FlexMiddle } from '../../components/Cockflow/style';
import { trimDate } from './CockflowUtils';
import { CockflowEnrollBtns } from './CockflowEnrollBtns';
import axios from 'axios';

interface dataType {
  detailData: {
    _id: number,
    id: number,
    title: string,
    isBartender: boolean,
    nickname: string,
    createdAt: Date,
    content: string
  };
};

export const CockflowDetailBox = ({ detailData }: dataType) => {
  const [inputUnActived, setinputUnActived] = useState(true);
  const { title, isBartender, nickname, createdAt, content } = { ...detailData };

  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);


  const [updateData, setUpdateData] = useState({
    'title': '',
    'content': ''
  })

  useEffect(() => {
    setNewTitle(title);
    setNewContent(content);
  }, [title, content]);

  const editFn = () => {
    setinputUnActived(() => !inputUnActived);
  };

  const updateAxios = async () => {
    const copiedData = {
      title: newTitle,
      content: newContent
    }

    console.log(copiedData)
    await axios.put(`/api/cockflow/${detailData._id}`, copiedData)
      .then(() => {
        alert('수정되었습니다.');
        window.location.replace(`/cockflow/detail/${detailData._id}`);
      }).catch(() => alert('권한이 없습니다.'))
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.currentTarget.value);
  }



  return (
    <ContWrap>
      <form>
        <TitleWrap>
          <div>
            <ChangedInput
              type="text"
              value={newTitle}
              onChange={handleInput}
              readOnly={inputUnActived}
            />
          </div>
          <FlexMiddle>
            <Middle>
              {isBartender && <CockflowBadge />}{nickname} &nbsp;
            </Middle>
            <div>
              <span>
                {trimDate(createdAt)}
              </span>
            </div>
          </FlexMiddle>
          <div>
            {/* <span>(+)조회수</span> */}
          </div>
        </TitleWrap>
        <TextBox
          defaultValue=""
          value={newContent}
          onChange={handleTextArea}
          readOnly={inputUnActived}
        />
        {!inputUnActived &&
          <CockflowEnrollBtns
            typeBtn="button"
            pageId={detailData._id}
            linkto={`/cockflow`}
            editFn={editFn}
            updateAxios={updateAxios}
          />}
        {
          inputUnActived
          && <CockflowEnrollBtns
            typeBtn="edit"
            linkto={`/cockflow`}
            pageId={detailData._id}
            editFn={editFn}
          />
        }
      </form>
    </ContWrap>
  );
};

const ContWrap = styled.div`
  // border: 1px solid #ddd;
  border-radius: 7px;
  overflow: hidden;
  color: #555;
`;

const TitleWrap = styled.div`
  width: 100%;
  padding: 0px 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 13px;
`;

const TextBox = styled.textarea`
  width: 100%;
  padding: 10.5px 15px;
  border: none;
  resize: none;
  height: 190px;
  line-height: 1.6;
`;

const ChangedInput = styled.input`
  display: block;
  width: 100%;
  padding: 16.5px 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  resize: none;

  &:read-only {
  padding: 5px 0px;
    border: none;
    color: #555;  
    font-size: 17px;
    font-weight: bold;
  }
`;
