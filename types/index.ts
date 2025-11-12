export interface Service {
  icon: string
  title: string
  description: string
}

export interface Differentiator {
  icon: string
  title: string
  description: string
}

export interface Doctor {
  name: string
  title: string
  image: string
  bio: string
  specializations: string[]
}

export interface Testimonial {
  clientName: string
  catName: string
  quote: string
}

export interface ContactInfo {
  phone: string
  whatsapp: string
  location: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}
