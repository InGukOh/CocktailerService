import styled from 'styled-components';

interface WidgetProps {
  pageName: string;
}

export const HomeWidget = ({ pageName }: WidgetProps) => {
  return <Widget>{pageName}</Widget>;
};

const Widget = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  font-size: 12px;
  background-color: white;
`;