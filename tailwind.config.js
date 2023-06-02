module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: 'max(5%, 16px)',
    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '1000px',
      xl: '1300px',
    },

    fontFamily: {
      primary: 'Inter, sans-serif',
    },

    extend: {
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
        xxl: '48px',
      },
      colors: {
        primary: {
          dark: '#2e312f',
          light: '#666',
        },
      },
    },
  },
};
