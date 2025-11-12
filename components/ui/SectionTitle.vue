<script setup lang="ts">
interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
}

const props = withDefaults(defineProps<SectionTitleProps>(), {
  align: 'center'
})

const alignClasses = computed(() => {
  const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  return aligns[props.align]
})
</script>

<template>
  <div :class="['mb-12', alignClasses]">
    <h2 class="text-4xl md:text-5xl font-bold text-gradient mb-4">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
