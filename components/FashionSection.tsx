import { ArrowUpRight } from 'lucide-react'
import { brand, fashionItems } from '@/lib/brand'

export default function FashionSection() {
  return (
    <section
      id="fashion"
      className="fashion-section stitched-section"
      aria-labelledby="fashion-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / THE FASHION EDIT</p>
            <h2 id="fashion-title">
              Wear your <em>individuality.</em>
            </h2>
          </div>
          <p>
            A few favourites from the SITASONI store.
            <br />
            Discover the pieces behind the looks.
          </p>
        </div>
        <div className="fashion-grid">
          {fashionItems.map((item) => (
            <a
              className={`fashion-piece ${item.className}`}
              key={item.number}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Shop ${item.productTitle} at SITASONI (opens in a new tab)`}
            >
              <div className="fashion-image">
                {/* Native srcSet keeps image sizes responsive in a static export. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  srcSet={`${item.smallImage} 480w, ${item.image} ${item.width}w`}
                  sizes="(max-width: 599px) calc(100vw - 48px), (max-width: 959px) 46vw, 36vw"
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="collection-index">EDIT / {item.number}</span>
                <span className="collection-arrow" aria-hidden="true">
                  <ArrowUpRight size={23} />
                </span>
              </div>
              <div className="fashion-caption">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="fashion-bottom">
          <p>
            There’s more to discover. Men’s wear, women’s wear, and your next
            favourite.
          </p>
          <a
            href={brand.storeUrl}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the store <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
