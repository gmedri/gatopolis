export default defineNuxtPlugin(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PFW4D2MM');`
  document.head.appendChild(script)

  const noscript = document.createElement('noscript')
  const iframe = document.createElement('iframe')
  iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-PFW4D2MM'
  iframe.height = '0'
  iframe.width = '0'
  iframe.style.cssText = 'display:none;visibility:hidden'
  noscript.appendChild(iframe)
  document.body.insertBefore(noscript, document.body.firstChild)
})
