export const brand = {
  name: 'SITASONI',
  owner: 'Jageshwar Sahu',
  tagline: 'Premium men’s & women’s wear',
  storeUrl: 'https://sitasoni.com',
  phone: '+91 7024367848',
  phoneUrl: 'tel:+917024367848',
  whatsappUrl: 'https://wa.me/917024367848',
  email: 'contact@sitasoni.com',
  address: 'Shankar Nagar, Nawagarh, Bemetara Road, Chhattisgarh 491337, India',
  hours: '9:00 AM – 7:00 PM',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=SITASONI+trend%2C+Shankar+Nagar%2C+Nawagarh%2C+Chhattisgarh',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=SITASONI+trend%2C+Shankar+Nagar%2C+Nawagarh%2C+Chhattisgarh&hl=en&z=16&output=embed'
} as const

export const navigation = [
  { label: 'My story', href: '#story' },
  { label: 'The fashion edit', href: '#fashion' },
  { label: 'Visit & connect', href: '#visit' }
] as const

export type FashionItem = {
  number: string
  name: string
  productTitle: string
  description: string
  image: string
  smallImage: string
  width: number
  height: number
  alt: string
  href: string
  className: string
}

export const fashionItems: readonly FashionItem[] = [
  {
    number: '01',
    name: 'The linen shirt',
    productTitle: 'Men’s Premium Light Pink Linen Shirt',
    description: 'Light pink linen. A little everyday luxury.',
    image: '/collections/linen-shirt.webp',
    smallImage: '/collections/linen-shirt-480.webp',
    width: 900,
    height: 1350,
    alt: 'Back and side view of the light pink linen shirt sold by SITASONI',
    href: 'https://sitasoni.com/products/mens-premium-light-pink-100-linen-shirt-125-lea-linen-luxury-summer-shirt?variant=44280269701223',
    className: 'fashion-piece--linen'
  },
  {
    number: '02',
    name: 'Bootcut trousers',
    productTitle: 'Men’s Black Formal Bootcut Pants',
    description: 'A clean silhouette. From office to evening.',
    image: '/collections/trousers.webp',
    smallImage: '/collections/trousers-480.webp',
    width: 900,
    height: 1350,
    alt: 'Model wearing the black formal bootcut trousers sold by SITASONI',
    href: 'https://sitasoni.com/products/men-s-formal-bootcut-pants-premium-stretch-office-party-wear-trousers?variant=44261676974183',
    className: 'fashion-piece--trousers'
  },
  {
    number: '03',
    name: 'The graphic tee',
    productTitle: 'Men’s Maroon Graphic Printed Down Shoulder T-Shirt',
    description: 'Maroon cotton. An easy statement.',
    image: '/collections/graphic-tee.webp',
    smallImage: '/collections/graphic-tee-480.webp',
    width: 864,
    height: 1184,
    alt: 'Model wearing the maroon graphic printed T-shirt sold by SITASONI',
    href: 'https://sitasoni.com/products/men-s-maroon-graphic-printed-down-shoulder-t-shirt-premium-cotton-220-gsm-5?variant=44261675958375',
    className: 'fashion-piece--tee'
  }
]

export const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/sitasoni.in/' },
  { name: 'YouTube', href: 'https://youtube.com/@sitasonitrend' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1ARaNmyZRu/' }
] as const
