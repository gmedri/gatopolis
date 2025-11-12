<script setup lang="ts">
interface CardProps {
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<CardProps>(), {
  hover: true,
  padding: 'md'
})

const paddingClasses = computed(() => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  return paddings[props.padding]
})
</script>

<template>
  <div
    :class="[
      'bg-white rounded-2xl shadow-md transition-all duration-300',
      paddingClasses,
      { 'hover:shadow-xl hover:-translate-y-1': hover }
    ]"
  >
    <slot />
  </div>
</template>
