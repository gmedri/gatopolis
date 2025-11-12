<script setup lang="ts">
/**
 * StructuredData Component
 *
 * Generates Schema.org structured data (JSON-LD) for the Gatópolis website.
 * This component adds VeterinaryCare schema markup to improve SEO and enable
 * rich snippets in search results.
 *
 * @component
 * @example
 * <SeoStructuredData />
 */
const config = useRuntimeConfig()

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  name: 'Gatópolis',
  description: 'Medicina veterinária felina domiciliar em Florianópolis. Atendimento exclusivo para gatos na sua casa, com técnicas cat friendly e manejo livre de estresse.',
  image: '/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Florianópolis',
    addressRegion: 'SC',
    addressCountry: 'BR'
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Florianópolis',
      '@id': 'https://www.wikidata.org/wiki/Q83225'
    },
    {
      '@type': 'City',
      name: 'Palhoça',
      '@id': 'https://www.wikidata.org/wiki/Q990424'
    },
    {
      '@type': 'City',
      name: 'São José',
      '@id': 'https://www.wikidata.org/wiki/Q815987'
    }
  ],
  telephone: config.public.contactPhone,
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '3'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços Veterinários',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultas Veterinárias Domiciliares',
          description: 'Atendimento veterinário na sua casa, sem estresse para o gato'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vacinação',
          description: 'Vacinação felina no conforto do lar'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Exames Clínicos',
          description: 'Exames e avaliação clínica especializada em felinos'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Orientação Comportamental',
          description: 'Consultoria sobre comportamento e bem-estar felino'
        }
      }
    ]
  },
  additionalType: 'http://www.productontology.org/id/Veterinary_medicine',
  url: 'https://gatopolis.com.br',
  sameAs: [
    'https://www.instagram.com/gatopolis.vet/'
  ]
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData)
    }
  ]
})
</script>

<template>
  <div />
</template>
