<script setup lang="ts">
import { getContactInfo } from '~/utils/constants'

const currentYear = new Date().getFullYear()
const contactInfo = getContactInfo()
</script>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-2xl font-bold text-gradient mb-4">Gatópolis</h3>
          <p class="text-gray-400">
            Cuidado especializado para o seu felino
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Contato</h4>
          <div class="space-y-2 text-gray-400">
            <p class="flex items-center gap-2">
              <Icon name="mdi:phone" class="w-5 h-5" />
              {{ contactInfo.phone }}
            </p>
            <p class="flex items-start gap-2">
              <Icon name="mdi:map-marker" class="w-5 h-5 mt-1" />
              {{ contactInfo.location }}
            </p>
            <p class="flex items-center gap-2">
              <Icon name="mdi:clock-outline" class="w-5 h-5" />
              Segunda a sábado, somente com hora marcada
            </p>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Redes Sociais</h4>
          <div class="flex gap-4">
            <a
              href="https://www.instagram.com/gatopolis.medicinafelina/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-primary-pink rounded-full flex items-center justify-center hover:bg-primary-coral transition-colors"
              aria-label="Instagram @gatopolis.medicinafelina"
              title="@gatopolis.medicinafelina"
            >
              <Icon name="mdi:instagram" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; {{ currentYear }} Gatópolis. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>
