/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Ant Design: xs (extra small) < 576px
        sm: "576px", // Ant Design: sm (small) ≥ 576px
        md: "768px", // Ant Design: md (medium) ≥ 768px
        lg: "992px", // Ant Design: lg (large) ≥ 992px
        xl: "1200px", // Ant Design: xl (extra large) ≥ 1200px
      },
    },
  },
  plugins: [],
};
