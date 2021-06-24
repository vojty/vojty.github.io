import NextHead from 'next/head'
import React from 'react'
import { MetaProps } from '../types/layout'

const TITLE = 'Personal blog by Tomáš Vojtášek'

export function Head({ customMeta }: { customMeta?: MetaProps }) {
  const meta: MetaProps = {
    title: TITLE,
    description: 'Random thoughts',
    type: 'website',
    ...customMeta
  }

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TomasVojtasek" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </NextHead>
  )
}
