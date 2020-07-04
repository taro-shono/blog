import React from 'react';
import styled from 'styled-components';

interface Props {}

const Container = styled.div``;
const Header = styled.header`
  display: flex;
  max-width: 720px;
  margin: 0 auto;
  align-items: center;
  padding: 0 24px;
  height: 128px;
`;
const Logo = styled.h1`
  margin: 0;
`;

export const Layout: React.FC<Props> = ({ children, ...other }) => {
  return (
    <Container {...other}>
      <Header>
        <Logo>logo</Logo>
      </Header>
      {children}
    </Container>
  );
};
