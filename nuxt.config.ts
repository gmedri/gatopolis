export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  ssr: true,

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https: blob:",
        "font-src 'self' data:",
        "connect-src 'self' https://wa.me https://www.google-analytics.com https://www.googletagmanager.com",
        "frame-src 'self' https://www.googletagmanager.com",
        "object-src 'none'",
        "base-uri 'self'"
      ].join('; ')
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/icon'
  ],

  runtimeConfig: {
    public: {
      contactPhone: process.env.NUXT_PUBLIC_CONTACT_PHONE || '+55 48 99999-9999',
      contactWhatsapp: process.env.NUXT_PUBLIC_CONTACT_WHATSAPP || '5548999999999'
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Gatópolis - Cuidado Especializado em Felinos',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Medicina veterinária felina domiciliar em Florianópolis. Atendimento exclusivo para gatos na sua casa, com técnicas cat friendly e manejo livre de estresse. Agende sua consulta.' },
        { name: 'theme-color', content: '#F5C8E8' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PFW4D2MM');`
        }
      ]
    }
  },

  image: {
    provider: 'ipxStatic',
    format: ['webp', 'png', 'jpg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts'
  }
})
