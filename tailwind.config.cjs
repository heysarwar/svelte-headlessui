const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts,svx}",
    "./node_modules/svhighlight/**/*.svelte"
  ],

  theme: {
    extend: {
      maxWidth:{
        '8xl': '90rem'
      }
    },
  },

  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
  ],
};

module.exports = config;
