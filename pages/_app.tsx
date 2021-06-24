import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import React from 'react'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
