import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface InViewAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useInViewAnimation = (
  elementRef: Ref<HTMLElement | null>,
  animationClass: string,
  options: InViewAnimationOptions = {}
) => {
  const isVisible = ref(false)
  const hasBeenVisible = ref(false)
  let observer: IntersectionObserver | null = null

  const {
    threshold = 0.2,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  onMounted(() => {
    if (typeof window === 'undefined') return
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            hasBeenVisible.value = true

            if (elementRef.value) {
              elementRef.value.classList.add(animationClass)
            }

            if (triggerOnce && observer && elementRef.value) {
              observer.unobserve(elementRef.value)
            }
          } else if (!triggerOnce) {
            isVisible.value = false
            if (elementRef.value) {
              elementRef.value.classList.remove(animationClass)
            }
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    isVisible,
    hasBeenVisible
  }
}
