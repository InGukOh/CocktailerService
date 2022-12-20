import styled from 'styled-components';
import HamburgerIcon from '@mui/icons-material/Menu';

interface HeaderHamburgerButtonProps {
  toggleDrawer: () => void;
}

export const HeaderHamburgerButton = ({
  toggleDrawer,
}: HeaderHamburgerButtonProps) => {
  const handleHamburgerButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    toggleDrawer();
  };

  return (
    <HamburgerButton onClick={handleHamburgerButtonClick}>
      <CustomHamburgerIcon />
    </HamburgerButton>
  );
};

const HamburgerButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;

const CustomHamburgerIcon = styled(HamburgerIcon)`
  width: 35px;
  height: 35px;
`;
