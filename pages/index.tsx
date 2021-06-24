import { format, parseISO } from 'date-fns'
import { GetStaticProps } from 'next'
import React from 'react'
import Link from 'next/link'

import { Layout } from '../components/Layout'
import { getAllPosts } from '../lib/api'
import { PostType } from '../types/post'

type IndexProps = {
  posts: PostType[]
}

export default function Index({ posts }: IndexProps) {
  return (
    <Layout>
      <p>Junkyard of my random thougths (usually programming related)</p>

      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title'])

  return {
    props: { posts }
  }
}
