import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { brand, navigation } from '@/lib/brand'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#home"
          className="brand-lockup"
          aria-label="SITASONI trend — back to home"
        >
          <Image
            src="/sitasoni-logo.jpg"
            alt=""
            width={56}
            height={56}
            className="brand-logo"
          />
          <span className="brand-wordmark">
            <span>
              SITASONI<sup>™</sup> <i>trend</i>
            </span>
            <span className="brand-tagline">A founder’s portfolio</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="header-contact"
          href={brand.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
