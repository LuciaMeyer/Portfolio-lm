/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'conic-gradient(at center top, rgb(120, 113, 108), rgb(245, 245, 244), rgb(113, 113, 122))',
      },
      colors: {
        LM: '#f9b621',
        LM50:'#fbda8f',
        LM40:'#fde2a6',
        LM30:'#feeabd',
        LM20:'#fef0d3',
        LM10:'#fff8e9',  
        BGD: '#202020',
        BGDc:'#262626',
        BDI:'#2d2d2d',
        TX:'#262626',
        LMc:'#F9EBD2',
      },
      screens: { sm: '480px', md: '860px', lg: '976px', xl: '1440pd' },
      // md: '768px',
      animation: {
        fadeIn: 'fadeIn 1.5s',
        bounce:
          'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
        slideUp: 'slideUp 0.5s',
        slideUpEaseInOut: 'slideUp 0.5s ease-in-out',
        slideUpCubiBezier: 'slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      animationDelay: {
        0: '0s',
        2: '0.2s',
        4: '0.4s',
        6: '0.6s',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
