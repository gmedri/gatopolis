<script setup lang="ts">
import { openWhatsApp } from '~/utils/whatsapp'

const { offsetY } = useParallax({ speed: 0.5, maxOffset: 100 })

const handleCTAClick = () => {
  openWhatsApp('Olá! Gostaria de agendar uma consulta para o meu gato.', {
    buttonId: 'hero_cta',
    buttonText: 'Agendar Consulta',
    clickLocation: 'hero_section'
  })
}
</script>

<template>
  <section
    id="hero"
    class="h-screen relative flex items-center justify-center overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-pink via-primary-coral to-primary-pink"
      :style="{ transform: `translateY(${offsetY}px)` }"
    />

    <div class="relative z-10 container mx-auto px-4 text-center text-white">
      <h1
        class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"
      >
        Cuidado Especializado<br>para o Seu Felino
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animation-delay-200 animate-fade-in"
      >
        Mais do que uma consulta, uma experiência pensada para o bem-estar do seu felino, com atendimento exclusivo para a espécie, na sua casa com manejo e técnicas cat friendly
      </p>

      <div class="animation-delay-400 animate-fade-in">
        <UiButton
          size="lg"
          variant="secondary"
          aria-label="Agendar consulta no WhatsApp"
          @click="handleCTAClick"
        >
          Agendar Consulta
        </UiButton>
      </div>

      <div class="mt-12 animate-bounce">
        <Icon name="mdi:chevron-down" class="w-12 h-12 mx-auto" />
      </div>
    </div>
  </section>
</template>
