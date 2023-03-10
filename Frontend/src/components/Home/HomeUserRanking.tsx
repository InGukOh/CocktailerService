import styled from 'styled-components';
import { UserRanking } from '../../../../types';
import { BartenderBadge } from './BartenderBadge';

interface HomeUserRankingProps {
  userRankingInfo: UserRanking;
  ranking: number;
}

export const HomeUserRanking = ({
  userRankingInfo,
  ranking,
}: HomeUserRankingProps) => {
  return (
    <Container>
      <UserAvatarWrap>
        <UserAvatar src={userRankingInfo.avatarUrl}></UserAvatar>
      </UserAvatarWrap>
      <UserInfo>
        <Ranking>{ranking}등</Ranking>
        <UserName>
          <UserNickname>{userRankingInfo.nickname}</UserNickname>
          {userRankingInfo.isBartender && <BartenderBadge />}
        </UserName>
        <UserPoint>{userRankingInfo.points} points</UserPoint>
      </UserInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.indigo0};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 5px;

  @media screen and (max-width: 500px) {
    padding: 5px;
  }
`;

const UserAvatarWrap = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media screen and (max-width: 500px) {
    width: 75px;
    height: 75px;
  }

  @media screen and (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;

const UserInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 0px 5px;

  @media screen and (max-width: 500px) {
    margin-top: 5px;
  }
`;

const Ranking = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const UserNickname = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 500px) {
    font-size: 10px;
    margin-top: 5px;
  }
`;

const UserPoint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.colors.indigo5};
  margin-top: 10px;

  @media screen and (max-width: 500px) {
    font-size: 10px;
    margin-top: 5px;
  }
`;
