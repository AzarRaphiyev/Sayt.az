/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{htm,js}"],
  theme: {
    extend: {
      screens:{
        komandamax:"770px",
        komandamin:"650px"
      }
    },
   
  },
  plugins: [],
};
