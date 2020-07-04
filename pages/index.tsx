import React from 'react';
import Head from 'next/head';
import { getAllPosts } from '../lib/api';
import { Layout } from '../components/Layout';
import { Post } from '../types/post';
import { Articles } from '../components/Articles';

interface Props {
  allPosts: Post[];
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'description']);

  return {
    props: { allPosts },
  };
};

const Top = ({ allPosts }: Props) => {
  const posts = allPosts;

  return (
    <>
      <Layout>
        <Head>
          <title>blog</title>
          <meta name="description" content="This is hanagejet blog" />
          <meta property="og:title" content="hanagejet blog" />
          <meta property="og:description" content="This is hanagejet blog" />
        </Head>
        {!!posts.length && <Articles posts={posts} />}
      </Layout>
    </>
  );
};

export default Top;
