module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLE_API_ID: process.env.GOOGLE_API_ID,
    FACEBOOK_API_ID: process.env.FACEBOOK_API_ID,
    MAPBOX_API_TOKKEN: process.env.MAPBOX_API_TOKKEN,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  devIndicators: {
    autoPrerender: false,
    buildActivity: false,
  },
};
