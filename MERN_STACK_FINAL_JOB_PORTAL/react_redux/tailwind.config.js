// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Note: fix the glob pattern
  ],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};
