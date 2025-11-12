<script setup lang="ts">
import { DOCTORS } from '~/utils/constants'

const sectionRef = ref<HTMLElement | null>(null)
const card1Ref = ref<HTMLElement | null>(null)
const card2Ref = ref<HTMLElement | null>(null)

useInViewAnimation(sectionRef, 'animate-fade-in', { threshold: 0.2 })
useInViewAnimation(card1Ref, 'animate-slide-right', { threshold: 0.3 })
useInViewAnimation(card2Ref, 'animate-slide-left', { threshold: 0.3 })
</script>

<template>
  <section
    id="doutoras"
    ref="sectionRef"
    class="flex items-center justify-center bg-background-offwhite"
  >
    <div class="container mx-auto px-4 py-20">
      <UiSectionTitle
        title="Nossas Veterinárias"
        subtitle="Especialistas dedicadas ao cuidado felino"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(doctor, index) in DOCTORS"
          :key="doctor.name"
          :ref="index === 0 ? card1Ref : card2Ref"
        >
          <UiCard padding="lg">
            <div class="flex flex-col items-center text-center">
              <NuxtImg
                :src="doctor.image"
                :alt="`Foto de ${doctor.name}`"
                class="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
                loading="lazy"
                format="webp"
              />

              <h3 class="text-2xl font-bold text-gray-800 mb-1">
                {{ doctor.name }}
              </h3>

              <p class="text-primary-coral font-semibold mb-4">
                {{ doctor.title }}
              </p>

              <p class="text-gray-600 mb-6 leading-relaxed">
                {{ doctor.bio }}
              </p>

              <div class="space-y-2 w-full">
                <div
                  v-for="spec in doctor.specializations"
                  :key="spec"
                  class="bg-primary-pink bg-opacity-20 rounded-lg px-4 py-2 text-sm text-gray-700"
                >
                  {{ spec }}
                </div>
              </div>
            </div>
          </UiCard>
        </div>
      </div>
    </div>
  </section>
</template>
