import React from 'react'
import { MetaProps } from '../types/layout'
import { Head } from './Head'
import { Navigation } from './Navigation'
import { ThemeSwitch } from './ThemeSwitch'
import featherIcon from '../public/feather.svg'

type Props = {
  children: React.ReactNode
  customMeta?: MetaProps
}

const ICON_SIZE = 20

export function Layout({ children, customMeta }: Props) {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center py-6">
            <img
              className="mr-4"
              src={featherIcon.src}
              height={ICON_SIZE}
              width={ICON_SIZE}
            />
            <Navigation />
            <div className="ml-auto">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
    </>
  )
}
