<script setup lang="ts">
import { openWhatsApp } from '~/utils/whatsapp'

const handleClick = () => {
  openWhatsApp(undefined, {
    buttonId: 'floating_whatsapp',
    buttonText: 'WhatsApp Flutuante',
    clickLocation: 'floating_button'
  })
}
</script>

<template>
  <button
    class="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
    aria-label="Abrir WhatsApp"
    @click="handleClick"
  >
    <Icon name="mdi:whatsapp" class="w-8 h-8" />
  </button>
</template>
