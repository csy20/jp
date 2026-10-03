import Image from 'next/image'
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import { brand } from '@/lib/brand'

export default function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-cross" aria-hidden="true">
                ✳
              </span>{' '}
              The person behind the brand
            </p>
            <h1 id="hero-title" aria-label={brand.owner}>
              Jageshwar
              <br />
              <em>Sahu.</em>
            </h1>
            <p className="hero-role">
              Founder of{' '}
              <span>
                SITASONI<sup>™</sup> <i>trend</i>
              </span>
            </p>
            <p className="hero-description">
              Rooted in Nawagarh. Inspired by individuality.
              <br className="desktop-break" /> Bringing thoughtful fashion a
              little closer to you.
            </p>
            <div className="hero-actions">
              <a
                className="button button-blue"
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" /> Say hello{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href={brand.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore SITASONI <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" aria-hidden="true" />
              <span>Good clothes. Honest service. A personal touch.</span>
            </div>
          </div>
          <figure className="portrait">
            <div className="portrait-topline">
              <span>A PERSONAL INTRODUCTION</span>
              <span>01 — JS</span>
            </div>
            <div className="portrait-image">
              <Image
                src="/jaggu_profile.jpeg"
                alt="Jageshwar Sahu, founder of SITASONI trend"
                fill
                sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 959px) 560px, (max-width: 1280px) 40vw, 470px"
                priority
              />
              <span className="portrait-corner" aria-hidden="true" />
            </div>
            <figcaption className="portrait-caption">
              <span>
                JAGESHWAR SAHU <span className="caption-dot">/</span> FOUNDER
              </span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </figcaption>
            <span className="portrait-side" aria-hidden="true">
              NAWAGARH, CHHATTISGARH · INDIA
            </span>
          </figure>
        </div>
        <div className="hero-baseline">
          <span>
            <span className="location-dot" aria-hidden="true" /> From Nawagarh,
            with purpose.
          </span>
          <span className="baseline-values">
            QUALITY <span>·</span> HONESTY <span>·</span> STYLE
          </span>
          <a href="#story">
            A little about me <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
