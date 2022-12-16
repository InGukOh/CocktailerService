import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface DrawerUserButtonProps {
  pageName: string;
  link: string;
}

export const DrawerUserButton = ({ pageName, link }: DrawerUserButtonProps) => {
  return (
    <Link to={link}>
      <UserButton>{pageName}</UserButton>
    </Link>
  );
};

const UserButton = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;
