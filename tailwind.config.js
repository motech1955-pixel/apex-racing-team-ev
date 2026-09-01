/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        racing: {
          dark: '#0a0a0a',
          red: '#E50914', // Racing Red
          blue: '#00D2FF', // Electric Blue
          yellow: '#E6FB04', // Neon Yellow
          carbon: '#121212',
          gray: '#1F1F1F',
        }
      },
      backgroundImage: {
        'carbon-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h10v10H0V0zm10 10h10v10H10V10z\" fill=\"%231a1a1a\" fill-opacity=\"0.4\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
        'checkered': "repeating-conic-gradient(#333 0% 25%, #000 25% 50%)",
      },
      animation: {
        'speed-line': 'speedLine 1s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'engine-start': 'engineStart 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'sweep': 'sweep 1.5s ease-in-out infinite',
      },
      keyframes: {
        speedLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        engineStart: {
          '0%': { transform: 'scale(0.9)', opacity: '0', filter: 'blur(10px)' },
          '100%': { transform: 'scale(1)', opacity: '1', filter: 'blur(0)' }
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        sweep: {
          '0%': { transform: 'translateX(-100%) skewX(12deg)' },
          '100%': { transform: 'translateX(200%) skewX(12deg)' },
        }
      }
    },
  },
  plugins: [],
}
