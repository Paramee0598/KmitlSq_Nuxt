import colors from 'vuetify/es5/util/colors'




export default {
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - KmitlNuxtSq',
    title: 'KmitlNuxtSq',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href : "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" ,rel : "stylesheet" ,integrity : "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" ,crossorigin:"anonymous"},
      { rel: "stylesheet", href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"},
      { rel:"stylesheet" ,href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css", integrity : "sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" ,crossorigin:"anonymous" ,referrerpolicy:"no-referrer" },
      { rel:"stylesheet" ,href:"css/shopping-cart-number-bag.css"},
      { href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" ,rel:"stylesheet" },
      { href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" ,rel:"stylesheet" ,integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" ,crossorigin:"anonymous"},
      
    
    
    
    
    
    ],
    script: [
      {
        src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js", integrity:"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p", crossorigin:"anonymous",
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
        src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js",
        src: "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js",
        src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" ,integrity:"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" ,crossorigin:"anonymous",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/css/bootstrap.css',
    '@/css/bootstrap.min.css',
    '@/css/bootstrap-grid.rtl.css',
    '@/css/bootstrap-grid.rtl.min.css',
    '@/css/bootstrap-reboot.css',
    '@/css/bootstrap-reboot.min.css',
    '@/css/bootstrap-reboot.rtl.css',
    '@/css/bootstrap-reboot.rtl.min.css',
    '@/css/bootstrap-utilities.css',
    '@/css/bootstrap-utilities.min.css',
    '@/css/bootstrap-utilities.rtl.css',
    '@/css/bootstrap-utilities.rtl.min.css',
    '@/css/bootstrap.rtl.min.css',
    '@/css/shopping-cart-number-bag.css',
    // '@/bootstrap/dist/css/bootstrap.css',
    // '@/bootstrap-vue/dist/bootstrap-vue.css',
  
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
