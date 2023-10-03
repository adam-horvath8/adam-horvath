/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-black": "rgba(1, 28, 39, 1)",
        "my-blue": "rgba(94, 124, 226, 1)",
        "my-yellow": "rgba(246, 174, 45, 1)",
        "my-gray": "rgba(230, 230, 232, 1)",
      },
      fontFamily: {
        primary: ["Inter", "sans"], // 'Inter' is the primary font from Google Fonts
        secondary: ["Martian Mono", "monospace"], // 'Martian Mono' is the secondary font from Google Fonts
      },
      boxShadow: {
        "yellow": "0px 0px 15px rgba(246, 174, 45, 1)",
      },
    },
  },
  plugins: [],
};
