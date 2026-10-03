import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { brand } from '@/lib/brand'

export default function MobileActions() {
  return (
    <nav className="mobile-actions" aria-label="Quick contact and store links">
      <a href={brand.phoneUrl}>
        <Phone size={17} aria-hidden="true" /> Call
      </a>
      <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} aria-hidden="true" /> WhatsApp
      </a>
      <a href={brand.storeUrl} target="_blank" rel="noopener noreferrer">
        Store <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </nav>
  )
}
