import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone
} from 'lucide-react'
import { brand } from '@/lib/brand'

export default function VisitSection() {
  return (
    <section
      id="visit"
      className="visit-section stitched-section"
      aria-labelledby="visit-title"
    >
      <div className="container">
        <div className="section-heading visit-heading">
          <div>
            <p className="eyebrow">03 / VISIT & CONNECT</p>
            <h2 id="visit-title">
              Come by.
              <br />
              <em>Let’s find your style.</em>
            </h2>
          </div>
          <p>
            There’s always room for a good conversation.
            <br />
            Visit us in Nawagarh, or just say hello.
          </p>
        </div>
        <div className="visit-grid">
          <div className="visit-details">
            <div className="detail-row">
              <MapPin size={20} aria-hidden="true" />
              <div>
                <h3>Find us in Nawagarh</h3>
                <address>{brand.address}</address>
                <a
                  className="text-link"
                  href={brand.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="detail-row">
              <Clock size={20} aria-hidden="true" />
              <div>
                <h3>Every day, at your service</h3>
                <p>
                  Monday – Sunday <span className="detail-separator">/</span>{' '}
                  {brand.hours}
                </p>
              </div>
            </div>
            <div className="detail-row">
              <Phone size={20} aria-hidden="true" />
              <div>
                <h3>A call away</h3>
                <a className="contact-value" href={brand.phoneUrl}>
                  {brand.phone}
                </a>
              </div>
            </div>
            <div className="detail-row">
              <Mail size={20} aria-hidden="true" />
              <div>
                <h3>Drop a note</h3>
                <a className="contact-value" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </div>
            </div>
            <a
              className="button button-blue visit-whatsapp"
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp{' '}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="visit-map">
            <div className="map-topline">
              <span>THE PLACE WE CALL HOME</span>
              <span>NAWAGARH / CG</span>
            </div>
            <iframe
              title="SITASONI trend store location in Nawagarh"
              src={brand.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="map-caption"
              href={brand.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                SITASONI<sup>™</sup> <i>trend</i>
                <small>Shankar Nagar · Nawagarh · Chhattisgarh</small>
              </span>
              <ArrowUpRight size={24} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
