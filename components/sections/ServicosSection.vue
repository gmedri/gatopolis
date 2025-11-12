<script setup lang="ts">
import { SERVICES } from '~/utils/constants'

const sectionRef = ref<HTMLElement | null>(null)

useInViewAnimation(sectionRef, 'animate-slide-up', { threshold: 0.2 })
</script>

<template>
  <section
    id="servicos"
    ref="sectionRef"
    class="flex items-center justify-center bg-white"
  >
    <div class="container mx-auto px-4 py-20">
      <UiSectionTitle
        title="Nossos Serviços"
        subtitle="Cuidado completo para todas as necessidades do seu gato"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <UiCard
          v-for="service in SERVICES"
          :key="service.title"
          class="text-center"
        >
          <div
            class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-pink to-primary-coral rounded-full flex items-center justify-center"
          >
            <Icon :name="service.icon" class="w-8 h-8 text-white" />
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-2">
            {{ service.title }}
          </h3>

          <p class="text-gray-600">
            {{ service.description }}
          </p>
        </UiCard>
      </div>
    </div>
  </section>
</template>
