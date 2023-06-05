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
    fontSize: {
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      74: '74px',
    },

    lineHeight: {
      100: '100%',
      110: '110%',
      120: '120%',
      127: '127%',
      140: '140%',
      143: '143%',
      145: '145%',
      150: '150%',
      160: '160%',
    },
    letterSpacing: {
      tightest: '0.05em',
      tight: '-0.03em',
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
        primary: '#7A7A7A',
        secondary: '#0A0C10',
        btnBorder: 'rgba(82, 197, 213, 0.53)',
      },
      backgroundImage: {
        buttonBg: 'linear-gradient(180deg, #55FFE0 0%, #21AF85 100%)',
        buttonIcon: 'url("/icons/icon-right.svg")',
        map: 'url("/icons/map.svg")',
        mail: 'url("/icons/mail.svg")',
        call: 'url("/icons/call.svg")',
        infoBg: 'url("/decor/info-bg.png")',
      },
      boxShadow: {
        button: '4px 27px 51px rgba(82, 213, 134, 0.3)',
      },
      dropShadow: {
        button: '4px 27px 51px',
      },
    },
  },
};
