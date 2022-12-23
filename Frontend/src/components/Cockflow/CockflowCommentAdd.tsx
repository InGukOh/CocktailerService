import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CockflowMoreComment } from './CockflowMoreComment';
import { P15B1, Right } from './style';

const postAdopted = () => {
  
}

const onSubmit = () => {

}

interface newArrType {
  content: string
}

// const addMoreComments = <T extends Array<newArrType>>(arr: T[]): void => {
//   console.log(arr);
//   return 
// }

export const CockflowCommentAdd = ({ item }: any) => {
    const { register, handleSubmit, reset } = useForm();

    const gets = async (data: any) => {
      await axios.post('http://localhost:8000/api/cockflow/16/comments/63a5b1e01baa03436d5214d6', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const onSubmit = (data: any) => {
      alert(JSON.stringify(data));
      gets(data);
      reset();
    };
  
    const [subComment, setSubComment] = useState(false)
    const [moreComments, setMoreComments] = useState([])

    useEffect(() => {
      if (item.subComments.length > 0) {
        const contArr = item.subComments.map((items: any) => items.content)
        setMoreComments(contArr)
      }
    },[item])

    return (
        <P15B1 key={item._id}>
            <Comment2 readOnly={true}>{item.content}</Comment2>
            <Right>
              <Button variant="outlined" onClick={() => {
                  if (subComment) {
                  setSubComment(false)
                  return;
                  }
                  setSubComment(true)
                  return;
              }}>댓글달기</Button>&nbsp;&nbsp;
              <Button variant="contained" onClick={postAdopted}>채택하기</Button>
            </Right>
            {
              subComment
                ?
                <SubComments
                  onSubmit={handleSubmit(onSubmit)}>
                  <SubTextarea
                    {...register("content")}
                    placeholder="대댓글을 입력해주세요"
                  />
                  <Button2
                    type="submit"
                    variant="contained">
                    등록하기
                  </Button2>
                </SubComments>
                : null
            }
            <P15B1>
              {
                moreComments.map(co => <CockflowMoreComment content={ co } />)
              }
            </P15B1>
        </P15B1>
    )
}

const Comment2 = styled.textarea`
  width: 100%;
  padding: 15px;
  line-height: 1.8;
  border: none;
  resize: none;
`;

const SubComments = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 120px;
  margin: 0 auto;
  &::before {
    display: block;
    content: '';
    top: -11PX;
    right: 98px;
    position: absolute;
    width: 0px;
    height: 0px;
    border-bottom: 13px solid #ddd;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    z-index: 1;
  }
  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: #ddd;
    border-radius: 10px;
  }
`

const SubTextarea = styled.input`
  position: relative;
  width: 70%;
  height: 90px;
  margin-right: 13px;
  padding: 16.5px 14px;
  border: none;
  resize: none;
  background: #fff;
  z-index: 1;
`

const Button2 = styled(Button)`
  position: relative;
  z-index: 1;
  padding: 2px 4px;
  font-size: 12px;
  background: #fff;
  color: #555;
  font-weight: bold;
  &:hover {
    background: #7b7b7b;
    color: #fff;
  }
`