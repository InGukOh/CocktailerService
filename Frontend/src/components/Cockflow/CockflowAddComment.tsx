import Button from '@mui/material/Button';
import CockflowBoxTitle from '../../components/Cockflow/CockflowBoxTitle'
import styled from 'styled-components';
import { Center } from '../../components/Cockflow/CockflowStyle';

const TextBox = styled.textarea`
  width: 100%;
  padding: 16.5px 14px;
  border-color: rgba(0, 0, 0, 0.23);
  resize: none;
`

// 댓글 박스
const CockflowAddComment = () => {
  return (
    <>
      <CockflowBoxTitle />
      <TextBox name="" id="" value="" placeholder='답글입력' onChange={() => { }}>
      </TextBox>
      <Center>
        <Button variant="contained">등록하기</Button>
      </Center>
    </>
  )
}

export default CockflowAddComment