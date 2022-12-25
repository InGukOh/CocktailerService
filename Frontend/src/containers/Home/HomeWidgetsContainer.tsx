import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HomeWidget } from '../../components/Home/HomeWidget';
import { contentMenus } from './../../constants/pages';

export const HomeWidgetsContainer = () => {
  return (
    <Container>
      {contentMenus.map((contentMenu) => (
        <Link to={contentMenu.link}>
          <HomeWidget title={contentMenu.pageName} />
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  padding: 30px;
`;
