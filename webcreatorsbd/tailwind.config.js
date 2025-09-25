module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a365d", // blue-900
          50: "#ebf8ff", // blue-50
          100: "#bee3f8", // blue-100
          500: "#3182ce", // blue-500
          600: "#2c5282", // blue-600
          700: "#2a4365", // blue-700
          800: "#1a365d", // blue-800
          900: "#1a202c", // blue-900
        },
        secondary: {
          DEFAULT: "#319795", // teal-600
          50: "#e6fffa", // teal-50
          100: "#b2f5ea", // teal-100
          500: "#38b2ac", // teal-500
          600: "#319795", // teal-600
          700: "#2c7a7b", // teal-700
        },
        accent: {
          DEFAULT: "#38b2ac", // teal-500
          50: "#e6fffa", // teal-50
          100: "#b2f5ea", // teal-100
          500: "#38b2ac", // teal-500
          600: "#319795", // teal-600
        },
        background: "#ffffff", // white
        surface: {
          DEFAULT: "#f7fafc", // gray-50
          100: "#edf2f7", // gray-100
          200: "#e2e8f0", // gray-200
        },
        text: {
          primary: "#2d3748", // gray-700
          secondary: "#718096", // gray-500
          muted: "#a0aec0", // gray-400
        },
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#48bb78", // green-500
        },
        warning: {
          DEFAULT: "#d69e2e", // yellow-600
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          500: "#ecc94b", // yellow-500
        },
        error: {
          DEFAULT: "#e53e3e", // red-600
          50: "#fed7d7", // red-50
          100: "#fed7d7", // red-100
          500: "#f56565", // red-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      lineHeight: {
        'relaxed': '1.6',
        'loose': '1.8',
      },
      letterSpacing: {
        'wide': '0.025em',
        'wider': '0.05em',
      },
    },
  },
  plugins: [],
}