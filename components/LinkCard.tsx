'use client'

import { useState } from 'react'
import NextLink from 'next/link'

interface LinkCardProps {
  title: string
  url: string
  icon?: string
  index: number
}

export default function LinkCard({ title, url, icon, index }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const isExternal = url.startsWith('http')
  const className = 'group relative block w-full max-w-md mx-auto'

  const content = (
    <>
      <div
        className={`
          relative overflow-hidden rounded-2xl p-6
          transition-all duration-300 ease-out
          border-2
          ${isHovered 
            ? 'border-darkBrown scale-[1.02] shadow-xl' 
            : 'border-beige shadow-lg'
          }
          bg-gradient-to-br from-cream to-beige
          hover:from-beige hover:to-taupe/10
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {icon && (
              <div className="flex-shrink-0 text-2xl">{icon}</div>
            )}
            <span
              className={`
                font-semibold text-lg truncate
                transition-colors duration-200
                ${isHovered ? 'text-darkBrown' : 'text-charcoal'}
              `}
            >
              {title}
            </span>
          </div>
          <svg
            className={`
              flex-shrink-0 w-5 h-5 transition-transform duration-300
              ${isHovered ? 'translate-x-1 translate-y-[-2px]' : ''}
            `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
        
        <div
          className={`
            absolute bottom-0 left-0 h-0.5 bg-darkBrown
            transition-all duration-300 ease-out
            ${isHovered ? 'w-full' : 'w-0'}
          `}
        />
      </div>
    </>
  )

  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={{ animationDelay: `${index * 50}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    )
  }

  return (
    <NextLink
      href={url}
      className={className}
      style={{ animationDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </NextLink>
  )
}
