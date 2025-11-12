<script setup lang="ts">
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaLabel?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-pink to-primary-coral text-white hover:shadow-lg transform hover:scale-105',
    secondary: 'bg-white text-primary-coral border-2 border-primary-coral hover:bg-primary-coral hover:text-white',
    outline: 'bg-transparent text-primary-pink border-2 border-primary-pink hover:bg-primary-pink hover:text-white'
  }
  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  return sizes[props.size]
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :class="[
      'rounded-full font-semibold transition-all duration-300 ease-in-out',
      variantClasses,
      sizeClasses,
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
