interface GTMEvent {
  event: string
  [key: string]: string | number | boolean | undefined
}

declare global {
  interface Window {
    dataLayer?: GTMEvent[]
  }
}

export const pushGTMEvent = (eventData: GTMEvent): void => {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(eventData)
}

export const trackFormSubmission = (formId: string, formName: string): void => {
  pushGTMEvent({
    event: 'form_submission',
    form_id: formId,
    form_name: formName
  })
}

export const trackWhatsAppClick = (
  buttonId: string,
  buttonText: string,
  clickLocation: string
): void => {
  pushGTMEvent({
    event: 'whatsapp_click',
    button_id: buttonId,
    button_text: buttonText,
    click_location: clickLocation
  })
}
