<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  title: 'Gatópolis - Medicina Veterinária Felina Domiciliar em Florianópolis',
  meta: [
    {
      name: 'description',
      content: 'Medicina veterinária felina domiciliar em Florianópolis. Atendimento exclusivo para gatos na sua casa, com técnicas cat friendly e manejo livre de estresse. Agende sua consulta.'
    },
    {
      name: 'keywords',
      content: 'veterinário gatos florianópolis, medicina felina domiciliar, atendimento gatos casa, veterinário domiciliar felinos, consulta veterinária gatos, cat friendly, Palhoça, São José'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'Gatópolis - Medicina Veterinária Felina Domiciliar em Florianópolis'
    },
    {
      property: 'og:description',
      content: 'Medicina veterinária felina domiciliar em Florianópolis. Atendimento exclusivo para gatos na sua casa, com técnicas cat friendly e manejo livre de estresse.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://gatopolis.com.br'
    },
    {
      property: 'og:image',
      content: 'https://gatopolis.com.br/images/logo.png'
    },
    {
      property: 'og:locale',
      content: 'pt_BR'
    },
    {
      property: 'og:site_name',
      content: 'Gatópolis'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Gatópolis - Medicina Veterinária Felina Domiciliar em Florianópolis'
    },
    {
      name: 'twitter:description',
      content: 'Medicina veterinária felina domiciliar em Florianópolis. Atendimento exclusivo para gatos na sua casa, com técnicas cat friendly e manejo livre de estresse.'
    },
    {
      name: 'twitter:image',
      content: 'https://gatopolis.com.br/images/logo.png'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://gatopolis.com.br'
    }
  ]
})
</script>

<template>
  <div class="relative">
    <SeoStructuredData />
    <LayoutStickyNav />

    <main>
      <SectionsHeroSection />
      <SectionsSobreSection />
      <SectionsServicosSection />
      <SectionsDiferenciaisSection />
      <SectionsDoutorasSection />
      <SectionsDepoimentosSection />
      <SectionsContatoSection />
    </main>

    <LayoutWhatsAppButton />
  </div>
</template>
