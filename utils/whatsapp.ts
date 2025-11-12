import { getContactInfo } from './constants'

const MAX_MESSAGE_LENGTH = 500

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[\n\r\t]/g, ' ')
    .replace(/\s+/g, ' ')
    .slice(0, MAX_MESSAGE_LENGTH)
    .replace(/[<>]/g, '')
}

export const generateWhatsAppUrl = (message?: string): string => {
  const defaultMessage = 'Olá! Vim pelo site da Gatópolis e gostaria de mais informações.'
  const sanitizedMessage = sanitizeInput(message || defaultMessage)
  const encodedMessage = encodeURIComponent(sanitizedMessage)
  const contactInfo = getContactInfo()
  return `https://wa.me/${contactInfo.whatsapp}?text=${encodedMessage}`
}

export const openWhatsApp = (message?: string): void => {
  if (typeof window === 'undefined') return

  const url = generateWhatsAppUrl(message)
  const opened = window.open(url, '_blank', 'noopener,noreferrer')

  if (!opened) {
    throw new Error('Failed to open WhatsApp window. Please check your popup blocker settings.')
  }
}
