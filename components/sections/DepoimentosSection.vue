<script setup lang="ts">
import { TESTIMONIALS } from '~/utils/constants'

const sectionRef = ref<HTMLElement | null>(null)

useInViewAnimation(sectionRef, 'animate-fade-in', { threshold: 0.3 })
</script>

<template>
  <section
    id="depoimentos"
    ref="sectionRef"
    class="flex items-center justify-center bg-white"
  >
    <div class="container mx-auto px-4 py-20">
      <UiSectionTitle
        title="Depoimentos"
        subtitle="O que nossos clientes dizem sobre a Gatópolis"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <UiCard
          v-for="testimonial in TESTIMONIALS"
          :key="testimonial.clientName"
          padding="lg"
        >
          <div class="flex flex-col h-full">
            <Icon
              name="mdi:format-quote-open"
              class="w-12 h-12 text-primary-coral mb-4"
            />

            <p class="text-gray-700 mb-6 flex-grow italic leading-relaxed">
              "{{ testimonial.quote }}"
            </p>

            <div class="border-t border-gray-200 pt-4">
              <p class="font-bold text-gray-800">
                {{ testimonial.clientName }}
              </p>
              <p v-if="testimonial.catName" class="text-sm text-primary-coral">
                Tutor(a) de {{ testimonial.catName }}
              </p>
            </div>
          </div>
        </UiCard>
      </div>

      <div class="mt-12 text-center">
        <div class="flex justify-center gap-2">
          <Icon
            v-for="i in 5"
            :key="i"
            name="mdi:star"
            class="w-8 h-8 text-yellow-400"
          />
        </div>
        <p class="mt-2 text-gray-600">
          Avaliação média: 5.0 estrelas
        </p>
      </div>
    </div>
  </section>
</template>
