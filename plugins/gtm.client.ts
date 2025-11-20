export default defineNuxtPlugin(() => {
  const noscript = document.createElement('noscript')
  const iframe = document.createElement('iframe')
  iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-PFW4D2MM'
  iframe.height = '0'
  iframe.width = '0'
  iframe.style.cssText = 'display:none;visibility:hidden'
  noscript.appendChild(iframe)
  document.body.insertBefore(noscript, document.body.firstChild)
})
