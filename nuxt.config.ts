// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  modules: [
    "@pinia/nuxt",
    "nuxt-primevue",
    "@nuxtjs/eslint-module",
    "@vee-validate/nuxt",
    "@vueuse/nuxt"
  ],
  components: {
    dirs: []
  },
  vueuse: {
    autoImports: true
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      // Form: "VeeForm",
      // Field: "VeeField",
      // FieldArray: "VeeFieldArray",
      // ErrorMessage: "VeeErrorMessage"
    }
  },
  pinia: {
    storesDirs: ["./stores/**"]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: [
    "~/assets/css/main.css",
    "primeicons/primeicons.css",
    "primevue/resources/themes/lara-light-teal/theme.css"
  ],
  primevue: {
    usePrimeVue: true,
    options: {},
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      prefix: "",
      // name: undefined,
      include: "*"
      // exclude: undefined
    },
    directives: {
      prefix: "",
      include: "*"
      // name: undefined,
      // exclude: undefined
    },
    composables: {
      prefix: "",
      include: "*"
      // name: undefined,
      // exclude: undefined
    }
  }
});
