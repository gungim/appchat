module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      boxShadow: {
        c1: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
      borderRadius: {
        half: '50%',
      },
    },
  },
  plugins: [],
};
