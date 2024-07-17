module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        neutral: 'var(--neutral)',
        accent: 'var(--accent)',
        success: '#2ecc71',
        warning: '#f39c12',
        info: '#3498db',
        error: '#e74c3c',
      },
    },
  },
  plugins: [],
}
