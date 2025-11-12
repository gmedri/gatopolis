import { ref, onMounted, onUnmounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'

interface SectionPosition {
  id: string
  top: number
  height: number
}

export const useScrollProgress = () => {
  const scrollProgress = ref(0)
  const activeSection = ref('')
  const sectionPositions = ref<SectionPosition[]>([])

  const cacheSectionPositions = () => {
    if (typeof document === 'undefined') return

    const sections = document.querySelectorAll('section[id]')
    sectionPositions.value = Array.from(sections).map((section) => ({
      id: section.getAttribute('id') || '',
      top: (section as HTMLElement).offsetTop,
      height: (section as HTMLElement).offsetHeight
    }))
  }

  const updateScrollProgress = () => {
    if (typeof window === 'undefined') return

    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY

    const totalScrollable = documentHeight - windowHeight
    scrollProgress.value = totalScrollable > 0
      ? (scrollTop / totalScrollable) * 100
      : 0
  }

  const updateActiveSection = () => {
    if (typeof window === 'undefined') return

    const scrollPosition = window.scrollY + window.innerHeight / 2

    for (const section of sectionPositions.value) {
      if (
        scrollPosition >= section.top &&
        scrollPosition < section.top + section.height
      ) {
        activeSection.value = section.id
        break
      }
    }
  }

  const throttledUpdate = useThrottleFn(() => {
    updateScrollProgress()
    updateActiveSection()
  }, 100)

  const handleResize = useThrottleFn(() => {
    cacheSectionPositions()
  }, 250)

  onMounted(() => {
    if (typeof window === 'undefined') return

    cacheSectionPositions()
    window.addEventListener('scroll', throttledUpdate, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    throttledUpdate()
  })

  onUnmounted(() => {
    if (typeof window === 'undefined') return

    window.removeEventListener('scroll', throttledUpdate)
    window.removeEventListener('resize', handleResize)
  })

  return {
    scrollProgress,
    activeSection
  }
}
