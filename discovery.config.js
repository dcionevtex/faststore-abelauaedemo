
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore",
  
},

  // Theming
  theme: 'custom-theme',
  direction: 'rtl'

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "abelauaedemo",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: false,
    incrementAddress: false,
    direction: 'rtl'
  },

  // Default session
  session: {
    currency: {
      code: "AED",
      symbol: "AED",
    },
    locale: "en-GB",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "ARE",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
    direction: 'rtl'
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://abelauaedemo.vtex.app",
  secureSubdomain: "https://abelauaedemo.myvtex.com/",
  checkoutUrl: "https://abelauaedemo.myvtex.com/checkout",
  loginUrl: "https://abelauaedemo.myvtex.com/api/io/login",
  accountUrl: "https://abelauaedemo.myvtex.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/bakery",
    search: "/s?q=Spar",
    pdp: "/spar-fudge-cake-karamel-9192965/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/spar-fudge-cake-karamel-9192965/p",
      collection: "/bakery",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/spar-fudge-cake-karamel-9192965/p",
      collection: "/bakery",
      collection_filtered: "/bakery/?category-1=bakery&brand=Spar&facets=category-1%2Cbrand%27",
      search: "/s?q=Spar",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://abelauaedemo.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
