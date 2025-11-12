import { ref, onMounted, onUnmounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'

export interface ParallaxOptions {
  speed?: number
  maxOffset?: number
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, maxOffset = 100 } = options
  const offsetY = ref(0)

  const updateParallax = () => {
    if (typeof window === 'undefined') return

    const scrolled = window.scrollY
    const calculatedOffset = scrolled * speed

    offsetY.value = Math.min(calculatedOffset, maxOffset)
  }

  const throttledUpdate = useThrottleFn(updateParallax, 16)

  onMounted(() => {
    if (typeof window === 'undefined') return

    window.addEventListener('scroll', throttledUpdate, { passive: true })
    updateParallax()
  })

  onUnmounted(() => {
    if (typeof window === 'undefined') return

    window.removeEventListener('scroll', throttledUpdate)
  })

  return {
    offsetY
  }
}
