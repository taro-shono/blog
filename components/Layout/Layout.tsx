import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
  font-size: 32px;
`;
const A = styled.a`
  color: #000;
  path {
    @media (prefers-color-scheme: dark) {
      fill: ${(props) => props.theme.colors.text};
    }
  }
`;

export const Layout: React.FC<Props> = ({ children, ...other }) => {
  return (
    <Container {...other}>
      <Header>
        <Logo>
          <Link as={`/`} href="/">
            <A>
              <svg
                width="24"
                height="32"
                viewBox="0 0 131 175"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>hanagejet-icon</title>
                <path
                  d="M54.583 0h21.833v10.938h10.917v10.938h10.917v21.875h10.917v43.75h10.917v10.938h10.917v32.813h-10.917v10.938h-10.917v32.813h-10.917v-32.813h-10.917v10.938h-43.667v-10.938h-10.917v32.813h-10.917v-32.813h-10.917v-10.938h-10.917v-32.813h10.917v-10.938h10.917v-43.75h10.917v-21.875h10.917v-10.938h10.917v-10.938zm10.917 10.938h-10.917v10.938h-10.917v32.813h-10.917v43.75h-21.833v32.813h32.75v10.938h43.667v-10.938h32.75v-32.813h-21.833v-43.75h-10.917v-32.813h-10.917v-10.938h-10.917z"
                  fill="#000"
                ></path>
              </svg>
            </A>
          </Link>
        </Logo>
      </Header>
      {children}
    </Container>
  );
};
