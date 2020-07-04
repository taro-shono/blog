import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { getPostBySlug, getAllPosts } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import { Post as TPost } from '../types/post';
import { Article } from '../components/Article';
import { Layout } from '../components/Layout';

interface Props {
  post: TPost;
}

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}

const Post = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <Head>
            <title>{post.title} | blog</title>
            <meta property="og:title" content={`${post.title} | 'blog'`} />
          </Head>
          <Article post={post} />
        </>
      )}
    </Layout>
  );
};

export default Post;
