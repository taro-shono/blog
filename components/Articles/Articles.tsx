import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Link from 'next/link';
import { rgba } from 'polished';
import { Post } from '../../types/post';
import { dark, light } from '../../themes';

interface Props {
  posts: Post[];
}

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
`;
const Section = styled.section`
  border-top: 1px solid ${rgba(light.colors.fg, 0.08)};
  @media (prefers-color-scheme: dark) {
    border-top: 1px solid ${rgba(dark.colors.fg, 0.08)};
  }
`;
const A = styled.a`
  display: flex;
  padding: 16px 0 40px;
  align-items: flex-start;
`;
const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;
const Content = styled.div``;
const Date = styled.div`
  line-height: 32px;
  flex-basis: 80px;
  color: ${rgba(light.colors.fg, 0.64)};
  @media (prefers-color-scheme: dark) {
    color: ${rgba(dark.colors.fg, 0.64)};
  }
`;
const Description = styled.p`
  margin: 4px 0 0;
  color: ${rgba(light.colors.fg, 0.64)};
  @media (prefers-color-scheme: dark) {
    color: ${rgba(dark.colors.fg, 0.64)};
  }
`;

export const Articles: React.FC<Props> = ({ posts, ...other }) => {
  return (
    <Container {...other}>
      {posts.map((item) => (
        <Section key={item.title}>
          <Link as={`/${item.slug}`} href="/[slug]">
            <A>
              <Date>{dayjs(item.date).format('MM/DD')}</Date>
              <Content>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </Content>
            </A>
          </Link>
        </Section>
      ))}
    </Container>
  );
};
