/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './userInterface/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        12.5: '3.125rem',
        18: '4.375rem',
        19: '4.6875rem',
        25: '6.25rem',
        26: '6.5rem',
        35: '8.75rem',
        37.5: '9.375rem',
        50: '12.5rem',
        62.5: '15.625rem',
        70: '17.5rem',
        75: '18.75rem',
      },
      height: {
        8.75: '2.1875rem',
        15: '3.75rem',
        25: '6.25rem',
        37.5: '9.375rem',
      },
      translate: {
        3.75: '.9375rem',
        10: '2.5rem',
        13.5: '3.375rem',
        27: '6.8125rem',
        32: '7.9375rem',
        17: '4.25rem',
      },
    },
  },
};
