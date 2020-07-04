import React from 'react';
import { getAllPosts } from '../../lib/api';
import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { Post } from '../../types/post';
import { Articles } from '../../components/Articles';

interface Props {
  allPosts: Post[];
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'description']);

  return {
    props: { allPosts },
  };
};

const Blog = ({ allPosts }: Props) => {
  const posts = allPosts;

  return (
    <>
      <Layout>
        <Head>
          <title>blog</title>
        </Head>
        {!!posts.length && <Articles posts={posts} />}
      </Layout>
    </>
  );
};

export default Blog;
