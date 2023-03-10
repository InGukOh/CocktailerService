import { Header } from '../../components/Mypage/Header';
import { useEffect, useState } from 'react';
import { Board } from '../../components/Mypage/Board';
import { Carousel } from '../../components/Mypage/Carousel';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { GET_USER } from '../../constants/api';
import { MyPostsResData } from '../../../../types';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { withLogin } from '../../common/withLogin';
import { Container } from '@mui/material';
import { WithDrawlContainer } from '../../containers/Mypage/WithDrawlContainer';

const Mypage = () => {
  const user = useCurrentUser();
  const [userData, setUserData] = useState<MyPostsResData>();

  const getUserData = async () => {
    const { data: userData } = await axios.get(GET_USER);
    return userData;
  };

  useEffect(() => {
    getUserData().then((res) => setUserData(res[0]));
  }, []);

  return (
    <>
      <Helmet>
        <title>Cocktailer | 마이페이지</title>
      </Helmet>
      <Header user={user} />
      <Container>
        <Carousel
          title="나의 Cockcipe"
          cockcipes={userData?.cocktails}
          type="mine"
        />
        <Carousel
          title="내가 좋아한 Cockcipe"
          likes={userData?.myList}
          type="likes"
        />
        <Board
          title="나의 Cockflow"
          type="cockflow"
          cockflow={userData?.cockflows}
        />
        <Board
          title="나의 Cockflow Comments"
          type="comment"
          comments={userData?.comments}
        />
      </Container>
      <WithDrawlContainer />
    </>
  );
};

export const MypageWithLogin = withLogin(Mypage);
