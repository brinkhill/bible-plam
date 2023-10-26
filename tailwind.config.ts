import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        background: "var(--background)",
        foreground: "(var(--foreground))",
        primary: {
          DEFAULT: "(var(--primary))",
        },
        secondary: {
          DEFAULT: "(var(--secondary))",
        },
        muted: {
          DEFAULT: "(var(--muted))",
          foreground: "(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "(var(--accent))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

    },

  },
  plugins: [],
}
export default config
