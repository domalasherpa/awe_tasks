// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  tailwindcss: {
    config:{
      theme: {
        extend: {
          gridTemplateColumns: {
            'custom': '1fr 2fr 1fr',
          },
          gridTemplateRows: {
            'custom': 'auto 1fr 1fr',
          },
        },
      },
    }
  }
})