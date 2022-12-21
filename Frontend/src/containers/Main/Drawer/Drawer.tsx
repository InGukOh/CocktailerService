import styled from 'styled-components';
import CloseButton from '@mui/icons-material/Close';

import { DrawerUserPageButton } from '../../../components/Main/Drawer/DrawerUserPageButton';
import { DrawerContentPageButton } from './../../../components/Main/Drawer/DrawerContentPageButton';

interface DrawerProps {
  toggleDrawer: () => void;
}

export const Drawer = ({ toggleDrawer }: DrawerProps) => {
  return (
    <>
      <Dimmed onClick={toggleDrawer}></Dimmed>
      <DrawerContainer>
        <TopSection>
          <TopLeftSection>
            <UserPageButtonContainer>
              <DrawerUserPageButton
                pageName="로그인"
                link="/login"
                toggleDrawer={toggleDrawer}
              />
              <DrawerUserPageButton
                pageName="회원가입"
                link="/join"
                toggleDrawer={toggleDrawer}
              />
            </UserPageButtonContainer>
          </TopLeftSection>
          <TopRightSection>
            <CloseButtonWrap onClick={toggleDrawer}>
              <CloseButton />
            </CloseButtonWrap>
          </TopRightSection>
        </TopSection>
        <BottomSection>
          <DrawerContentPageButton
            pageName="칵시피"
            link="/cockcipe"
            toggleDrawer={toggleDrawer}
          />
          <DrawerContentPageButton
            pageName="칵플로우"
            link="/cockflow"
            toggleDrawer={toggleDrawer}
          />
          <DrawerContentPageButton
            pageName="칵고리즘"
            link="/cockgorithm"
            toggleDrawer={toggleDrawer}
          />
        </BottomSection>
      </DrawerContainer>
    </>
  );
};

const Dimmed = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;

const DrawerContainer = styled.div`
  width: 300px;
  height: 100vh;
  border: 1px solid gray;
  position: absolute;
  background-color: white;
  left: -1px;
  top: 0;
  z-index: 11;
`;

const TopSection = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid gray;
  display: flex;
`;

const TopLeftSection = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  border: 1px solid gray;
`;

const TopRightSection = styled.div`
  width: 50px;
  height: 100%;
  border: 1px solid gray;
`;

const BottomSection = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  border: 1px solid gray;
`;

const UserPageButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
`;

const CloseButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
