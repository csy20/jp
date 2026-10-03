import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { brand } from '@/lib/brand'

export default function StorySection() {
  return (
    <section
      id="story"
      className="story-section stitched-section"
      aria-labelledby="story-title"
    >
      <div className="container story-grid">
        <div className="story-sidebar">
          <p className="eyebrow">01 / MY STORY</p>
          <div className="stitch-track" aria-hidden="true">
            <span />
          </div>
          <p className="story-origin">
            A local beginning.
            <br />A bigger belief.
          </p>
        </div>
        <div className="story-content">
          <h2 id="story-title">
            Good style begins
            <br />
            with <em>honest intent.</em>
          </h2>
          <div className="story-detail">
            <div className="story-prose">
              <p>
                I’m Jageshwar. I started SITASONI trend with a simple belief:
                quality fashion should feel within reach, and shopping should
                feel personal.
              </p>
              <p>
                What began as a small dream for our local community in Nawagarh
                continues to grow through your trust. Great clothes matter. So
                do the people wearing them.
              </p>
              <p className="story-signoff">
                That’s the spirit behind SITASONI.
              </p>
              <a
                href={brand.storeUrl}
                className="text-link text-link-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get to know the brand{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="story-brand">
              <Image
                src="/sitasoni-logo.jpg"
                alt="SITASONI trend — original blue and gold brand logo"
                width={220}
                height={220}
                sizes="(max-width: 600px) 150px, 220px"
              />
              <p>{brand.tagline}</p>
            </div>
          </div>
          <div className="story-principles">
            <span>Quality in every choice.</span>
            <span>Honesty in every conversation.</span>
            <span>Style that feels like you.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
