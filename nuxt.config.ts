// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Güzel | متجر عطور فاخر',
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl',
      },
      meta: [
        { name: 'description', content: 'متجر Güzel للعطور الفاخرة. اكتشف أفضل العطور الرجالية والنسائية الأكثر مبيعًا.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Güzel | متجر عطور فاخر' },
        { property: 'og:description', content: 'متجر Güzel للعطور الفاخرة. اكتشف أفضل العطور الرجالية والنسائية الأكثر مبيعًا.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ar_AR' },
        { property: 'og:image', content: '/favicon.ico' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
        { rel: 'stylesheet', href: '/style.css' },
      ],
    },
  },
})
