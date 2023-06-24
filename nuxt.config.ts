// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_API_KEY || undefined,
      uri: process.env.NUXT_URI || undefined,
    },
  },
});
