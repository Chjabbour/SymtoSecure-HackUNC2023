export default ({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@vueuse/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/dotenv'
    ],
    dotenv: {
        filename: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
    },
    http: {
        baseURL: '/api',  // All http requests will be prefixed with /api
    },
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
});
