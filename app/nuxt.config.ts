// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],

  colorMode: {
    preference: 'light',
  },

  imports: {
    dirs: ['api'],
  },

  nitro: {
    //TODO: Add production storage
    storage: {},

    // Development
    devStorage: {
      db: {
        driver: 'fs',
        base: './public/db',
      },
    },
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage',
  },
})
