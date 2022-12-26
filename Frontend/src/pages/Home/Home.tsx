import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { HomeWidgetsContainer } from '../../containers/Home/HomeWidgetsContainer';
import { HomeMainCarousel } from '../../containers/Home/HomeMainCarousel';
import { HomeCocktailRankingContainer } from '../../containers/Home/HomeCocktailRankingContainer';
import { HomeUserRankingContainer } from '../../containers/Home/HomeUserRankingContainer';

export interface CocktailRanking {
  id: number;
  img: string;
  name: string;
  official: boolean;
  owner: {
    nickname: string;
    isBartender: boolean;
  };
}

export interface UserRanking {
  id: number;
  avatarUrl: string;
  nickname: string;
  points: number;
  isBartender: boolean;
}

const cocktailRankingList_mock: CocktailRanking[] = [
  {
    id: 1,
    img: 'img',
    name: '1위 칵테일 이름',
    official: false,
    owner: {
      nickname: '1위 유저 닉네임',
      isBartender: true,
    },
  },
  {
    id: 2,
    img: 'img',
    name: '2위 칵테일 이름',
    official: false,
    owner: {
      nickname: '2위 유저 닉네임',
      isBartender: true,
    },
  },
  {
    id: 3,
    img: 'img',
    name: '3위 칵테일 이름',
    official: false,
    owner: {
      nickname: '3위 유저 닉네임',
      isBartender: true,
    },
  },
  {
    id: 4,
    img: 'img',
    name: '4위 칵테일 이름',
    official: false,
    owner: {
      nickname: '4위 유저 닉네임',
      isBartender: true,
    },
  },
  {
    id: 5,
    img: 'img',
    name: '5위 칵테일 이름',
    official: false,
    owner: {
      nickname: '5위 유저 닉네임',
      isBartender: true,
    },
  },
  {
    id: 6,
    img: 'img',
    name: '6위 칵테일 이름',
    official: false,
    owner: {
      nickname: '6위 유저 닉네임',
      isBartender: true,
    },
  },
  {
    id: 7,
    img: 'img',
    name: '7위 칵테일 이름',
    official: false,
    owner: {
      nickname: '7위 유저 닉네임',
      isBartender: true,
    },
  },
  {
    id: 8,
    img: 'img',
    name: '8위 칵테일 이름',
    official: false,
    owner: {
      nickname: '8위 유저 닉네임',
      isBartender: true,
    },
  },
];

export const Home = () => {
  const [cocktailRankingList, setCocktailRankingList] = useState<
    CocktailRanking[]
  >(cocktailRankingList_mock);

  useEffect(() => {
    axios.get('/api/cocktails/main1').then((res) => {
      console.log('axios 요청');
      console.log(res);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Cocktailer | 홈</title>
      </Helmet>
      <Container>
        <Section>
          <HomeMainCarousel />
        </Section>
        <Section>
          <HomeWidgetsContainer />
        </Section>
        <SectionHeader>칵테일 레시피 랭킹 TOP 10</SectionHeader>
        <Section>
          <HomeCocktailRankingContainer
            cocktailRankingList={cocktailRankingList}
          />
        </Section>
        <SectionHeader>유저 랭킹 TOP 10</SectionHeader>
        <Section>
          <HomeUserRankingContainer />
        </Section>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid gray;
`;

const Section = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid gray;
  margin-bottom: 10px;
`;

const SectionHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  font-size: 16px;
`;
