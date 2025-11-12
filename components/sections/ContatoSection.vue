<script setup lang="ts">
import { getContactInfo } from '~/utils/constants'
import { openWhatsApp } from '~/utils/whatsapp'

const sectionRef = ref<HTMLElement | null>(null)
const contactInfo = getContactInfo()
const currentYear = new Date().getFullYear()

useInViewAnimation(sectionRef, 'animate-slide-up', { threshold: 0.3 })

interface ContactForm {
  name: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  message?: string
  submit?: string
}

const form = ref<ContactForm>({
  name: '',
  phone: '',
  message: ''
})

const formErrors = ref<FormErrors>({})
const isSubmitting = ref(false)
const showSuccess = ref(false)

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\(\)\-\+]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

const validateForm = (): boolean => {
  formErrors.value = {}
  let isValid = true

  if (!form.value.name.trim()) {
    formErrors.value.name = 'Nome é obrigatório'
    isValid = false
  }

  if (!form.value.phone.trim()) {
    formErrors.value.phone = 'Telefone é obrigatório'
    isValid = false
  } else if (!validatePhone(form.value.phone)) {
    formErrors.value.phone = 'Telefone inválido'
    isValid = false
  }

  if (!form.value.message.trim()) {
    formErrors.value.message = 'Mensagem é obrigatória'
    isValid = false
  }

  return isValid
}

const handleSubmit = async (event: Event) => {
  event.preventDefault()

  if (isSubmitting.value) return

  showSuccess.value = false
  formErrors.value = {}

  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    const { name, phone, message } = form.value

    const whatsappMessage = `Olá! Vim pelo site da Gatópolis e gostaria de mais informações.

Nome: ${name}
Telefone: ${phone}
Mensagem: ${message}`

    openWhatsApp(whatsappMessage)

    form.value = {
      name: '',
      phone: '',
      message: ''
    }

    showSuccess.value = true

    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error) {
    formErrors.value.submit = error instanceof Error ? error.message : 'Erro ao abrir WhatsApp. Por favor, tente novamente.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section
    id="contato"
    ref="sectionRef"
    class="flex items-center justify-center bg-background-offwhite"
  >
    <div class="container mx-auto px-4 py-20">
      <UiSectionTitle
        title="Entre em Contato"
        subtitle="Agende uma consulta ou tire suas dúvidas"
      />

      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <UiCard padding="lg">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">
              Envie uma Mensagem
            </h3>

            <form @submit="handleSubmit" class="space-y-4" novalidate>
              <div v-if="showSuccess" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg" role="alert">
                <p class="font-semibold">Sucesso!</p>
                <p class="text-sm">Sua mensagem foi enviada para o WhatsApp.</p>
              </div>

              <div v-if="formErrors.submit" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg" role="alert">
                <p class="text-sm">{{ formErrors.submit }}</p>
              </div>

              <div>
                <label
                  for="name"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  aria-required="true"
                  :aria-invalid="!!formErrors.name"
                  :aria-describedby="formErrors.name ? 'name-error' : undefined"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-opacity-50 outline-none transition-all',
                    formErrors.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-primary-coral focus:ring-primary-coral'
                  ]"
                  placeholder="Seu nome"
                />
                <p v-if="formErrors.name" id="name-error" class="mt-1 text-sm text-red-600" role="alert">
                  {{ formErrors.name }}
                </p>
              </div>

              <div>
                <label
                  for="phone"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefone / WhatsApp
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  aria-required="true"
                  :aria-invalid="!!formErrors.phone"
                  :aria-describedby="formErrors.phone ? 'phone-error' : undefined"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-opacity-50 outline-none transition-all',
                    formErrors.phone
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-primary-coral focus:ring-primary-coral'
                  ]"
                  placeholder="(48) 99999-9999"
                />
                <p v-if="formErrors.phone" id="phone-error" class="mt-1 text-sm text-red-600" role="alert">
                  {{ formErrors.phone }}
                </p>
              </div>

              <div>
                <label
                  for="message"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  aria-required="true"
                  :aria-invalid="!!formErrors.message"
                  :aria-describedby="formErrors.message ? 'message-error' : undefined"
                  rows="5"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-opacity-50 outline-none transition-all resize-none',
                    formErrors.message
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-primary-coral focus:ring-primary-coral'
                  ]"
                  placeholder="Conte-nos como podemos ajudar..."
                />
                <p v-if="formErrors.message" id="message-error" class="mt-1 text-sm text-red-600" role="alert">
                  {{ formErrors.message }}
                </p>
              </div>

              <UiButton
                type="submit"
                size="lg"
                :disabled="isSubmitting"
                class="w-full"
              >
                <span v-if="isSubmitting">Enviando...</span>
                <span v-else>Enviar via WhatsApp</span>
              </UiButton>
            </form>
          </UiCard>
        </div>

        <div class="space-y-6">
          <UiCard padding="lg">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-primary-pink to-primary-coral rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Icon name="mdi:phone" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">Telefone</h4>
                <a
                  :href="`tel:${contactInfo.phone}`"
                  class="text-primary-coral hover:underline"
                >
                  {{ contactInfo.phone }}
                </a>
              </div>
            </div>
          </UiCard>

          <UiCard padding="lg">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-primary-pink to-primary-coral rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Icon name="mdi:map-marker" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">Localização</h4>
                <p class="text-gray-600">
                  {{ contactInfo.location }}
                </p>
              </div>
            </div>
          </UiCard>

          <UiCard padding="lg">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-primary-pink to-primary-coral rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Icon name="mdi:clock" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">Horário</h4>
                <p class="text-gray-600">
                  Segunda a sábado, somente com hora marcada
                </p>
              </div>
            </div>
          </UiCard>
        </div>
      </div>

      <div class="mt-16 pt-12 border-t border-gray-200">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="text-2xl font-bold mb-4" style="background: linear-gradient(135deg, #FF8C69 0%, #F5C8E8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
              Gatópolis
            </h3>
            <p class="text-gray-600">
              Cuidado especializado para o seu felino
            </p>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4 text-gray-800">Contato</h4>
            <div class="space-y-2 text-gray-600">
              <p class="flex items-center gap-2">
                <Icon name="mdi:phone" class="w-5 h-5" />
                {{ contactInfo.phone }}
              </p>
              <p class="flex items-start gap-2">
                <Icon name="mdi:map-marker" class="w-5 h-5 mt-1" />
                {{ contactInfo.location }}
              </p>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4 text-gray-800">Redes Sociais</h4>
            <div class="flex gap-4">
              <a
                href="https://www.instagram.com/gatopolis.medicinafelina/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-primary-pink rounded-full flex items-center justify-center hover:bg-primary-coral transition-colors"
                aria-label="Instagram @gatopolis.medicinafelina"
                title="@gatopolis.medicinafelina"
              >
                <Icon name="mdi:instagram" class="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div class="pt-6 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {{ currentYear }} Gatópolis. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  </section>
</template>
