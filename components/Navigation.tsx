import Link from 'next/link'
import React from 'react'

export function Navigation() {
  const items = [
    {
      href: '/',
      label: 'Blog'
    },
    {
      href: '/about',
      label: 'About'
    }
  ]

  return (
    <nav>
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <a className="text-gray-900 dark:text-white pr-6 py-4">
            {item.label}
          </a>
        </Link>
      ))}
    </nav>
  )
}
