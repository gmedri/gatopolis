<script setup lang="ts">
import { NAV_ITEMS } from '~/utils/constants';

const { scrollToSection } = useSmoothScroll();
const { activeSection } = useScrollProgress();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleNavClick = (sectionId: string) => {
  scrollToSection(sectionId);
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleScroll = () => {
  if (typeof window === 'undefined') return;
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  if (typeof window === 'undefined') return;
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  if (typeof window === 'undefined') return;
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      !isScrolled
        ? 'bg-transparent py-6'
        : 'bg-white/95 backdrop-blur-sm shadow-lg py-4',
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <a
          :href="'#hero'"
          class="flex items-center"
          aria-label="Voltar ao topo"
          @click.prevent="handleNavClick('hero')"
        >
          <img
            src="/images/logo.png"
            alt="Gatópolis"
            class="w-24 md:w-28 lg:w-32"
            style="filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))"
          />
        </a>

        <button
          class="lg:hidden p-2"
          aria-label="Abrir menu"
          @click="toggleMobileMenu"
        >
          <Icon
            :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
            class="w-6 h-6"
          />
        </button>

        <nav
          class="hidden lg:flex items-center space-x-8"
          aria-label="Navegação principal"
        >
          <a
            v-for="item in NAV_ITEMS"
            :key="item.id"
            :href="item.href"
            :class="[
              'text-sm font-medium transition-colors duration-200',
              {
                'text-white font-bold': activeSection === item.id && !isScrolled,
                'text-primary-coral font-bold': activeSection === item.id && isScrolled,
                'text-gray-700': activeSection !== item.id,
                'hover:text-white': !isScrolled,
                'hover:text-primary-coral': isScrolled,
              }
            ]"
            @click.prevent="handleNavClick(item.id)"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <nav
          v-if="isMobileMenuOpen"
          class="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-xl"
          aria-label="Navegação mobile"
        >
          <a
            v-for="item in NAV_ITEMS"
            :key="item.id"
            :href="item.href"
            :class="[
              'block w-full text-left px-6 py-3 text-sm font-medium transition-colors duration-200',
              activeSection === item.id
                ? 'text-primary-coral font-bold bg-primary-pink bg-opacity-10'
                : 'text-gray-700 hover:text-primary-coral hover:bg-gray-50',
            ]"
            @click.prevent="handleNavClick(item.id)"
          >
            {{ item.label }}
          </a>
        </nav>
      </Transition>
    </div>
  </nav>
</template>
