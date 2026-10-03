import {
  ArrowUp,
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react'
import { brand, socials } from '@/lib/brand'

const socialIcons = { Instagram, YouTube: Youtube, Facebook } as const

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <a href="#home" className="footer-name">
              Jageshwar <em>Sahu.</em>
            </a>
            <p>Founder, SITASONI trend. Rooted in Nawagarh.</p>
          </div>
          <div className="footer-socials" aria-label="Follow SITASONI">
            {socials.map((social) => {
              const Icon = socialIcons[social.name]
              return (
                <a
                  href={social.href}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={17} aria-hidden="true" />
                  <span>{social.name}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {brand.name} trend. All rights
            reserved.
          </p>
          <span>Quality. Honesty. A personal touch.</span>
          <a href="#home">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
