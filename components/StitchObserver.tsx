'use client'

import { useEffect } from 'react'

export default function StitchObserver() {
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    )
      return

    const sections = document.querySelectorAll<HTMLElement>('.stitched-section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stitch-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    sections.forEach((section) => {
      section.classList.add('stitch-ready')
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
      sections.forEach((section) =>
        section.classList.remove('stitch-ready', 'stitch-visible')
      )
    }
  }, [])

  return null
}
