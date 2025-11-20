import { getContactInfo } from './constants'
import { trackWhatsAppClick } from './gtm'

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

interface WhatsAppTrackingOptions {
  buttonId: string
  buttonText: string
  clickLocation: string
}

export const openWhatsApp = (message?: string, tracking?: WhatsAppTrackingOptions): void => {
  if (typeof window === 'undefined') return

  if (tracking) {
    trackWhatsAppClick(tracking.buttonId, tracking.buttonText, tracking.clickLocation)
  }

  const url = generateWhatsAppUrl(message)
  const opened = window.open(url, '_blank', 'noopener,noreferrer')

  if (!opened) {
    throw new Error('Failed to open WhatsApp window. Please check your popup blocker settings.')
  }
}
