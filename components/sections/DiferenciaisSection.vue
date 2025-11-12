<script setup lang="ts">
import { DIFFERENTIATORS } from '~/utils/constants'

const sectionRef = ref<HTMLElement | null>(null)

useInViewAnimation(sectionRef, 'animate-scale-in', { threshold: 0.3 })
</script>

<template>
  <section
    id="diferenciais"
    ref="sectionRef"
    class="flex items-center justify-center bg-gradient-to-br from-primary-pink to-primary-coral"
  >
    <div class="container mx-auto px-4 py-20">
      <div class="mb-12 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Por Que Escolher a Gatópolis?
        </h2>
        <p class="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto">
          Experiência especializada e cuidado excepcional
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div
          v-for="diff in DIFFERENTIATORS"
          :key="diff.title"
          class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="w-16 h-16 mb-4 bg-gradient-to-br from-primary-coral to-primary-pink rounded-full flex items-center justify-center"
          >
            <Icon :name="diff.icon" class="w-8 h-8 text-white" />
          </div>

          <h3 class="text-2xl font-bold text-gray-800 mb-3">
            {{ diff.title }}
          </h3>

          <p class="text-gray-600 leading-relaxed">
            {{ diff.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
