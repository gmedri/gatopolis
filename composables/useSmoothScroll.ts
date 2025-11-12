export const useSmoothScroll = () => {
  const scrollToSection = (sectionId: string) => {
    if (typeof document === 'undefined') return

    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToTop = () => {
    if (typeof window === 'undefined') return

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return {
    scrollToSection,
    scrollToTop
  }
}
