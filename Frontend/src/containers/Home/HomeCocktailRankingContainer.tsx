import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../swiper.css';
import { CocktailRanking } from '../../pages/Home/Home';

interface HomeCocktailRankingContainerProps {
  cocktailRankingList: CocktailRanking[];
}

export const HomeCocktailRankingContainer = ({
  cocktailRankingList,
}: HomeCocktailRankingContainerProps) => {
  return (
    <Carousel>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {cocktailRankingList.map((cocktailRankingInfo, index) => (
          <SwiperSlide key={index}>{cocktailRankingInfo.name}</SwiperSlide>
        ))}
      </Swiper>
    </Carousel>
  );
};

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  padding: 10px;
`;
