import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

const config: Config = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-container": "#476700",
        "on-primary": "#233600",
        "secondary-fixed-dim": "#c6c6c7",
        "on-background": "#e2e2e2",
        "secondary": "#c6c6c7",
        "secondary-container": "#454747",
        "on-tertiary": "#39294e",
        "on-error": "#690005",
        "on-surface-variant": "#c2caaf",
        "primary-container": "#adeb33",
        "outline-variant": "#434935",
        "on-secondary": "#2f3131",
        "on-secondary-fixed-variant": "#454747",
        "surface-variant": "#353535",
        "on-error-container": "#ffdad6",
        "surface-gray": "#1A1A1A",
        "pure-black": "#000000",
        "on-tertiary-container": "#67567f",
        "error": "#ffb4ab",
        "on-secondary-fixed": "#1a1c1c",
        "inverse-on-surface": "#303030",
        "surface-bright": "#393939",
        "on-primary-fixed-variant": "#354e00",
        "surface-container-low": "#1b1b1b",
        "primary-fixed-dim": "#9cd91d",
        "surface": "#131313",
        "secondary-fixed": "#e2e2e2",
        "primary": "#e2ffac",
        "on-primary-fixed": "#131f00",
        "surface-container-high": "#2a2a2a",
        "on-secondary-container": "#b4b5b5",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-highest": "#353535",
        "on-surface": "#e2e2e2",
        "neon-lime": "#ADEB33",
        "tertiary": "#fbf1ff",
        "error-container": "#93000a",
        "stark-white": "#FFFFFF",
        "tertiary-container": "#e5cfff",
        "tertiary-fixed-dim": "#d3beed",
        "primary-fixed": "#b7f63e",
        "inverse-primary": "#486800",
        "tertiary-fixed": "#eddcff",
        "surface-container": "#1f1f1f",
        "surface-dim": "#131313",
        "outline": "#8d947c",
        "background": "#131313",
        "on-tertiary-fixed-variant": "#503f66",
        "inverse-surface": "#e2e2e2",
        "on-tertiary-fixed": "#231438",
        "surface-tint": "#9cd91d"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "24px",
        "container-max": "1280px",
        "base": "8px",
        "section-gap": "120px",
        "card-padding": "32px"
      },
      fontFamily: {
        "label-mono": ["JetBrains Mono"],
        "headline-lg-mobile": ["Anton"],
        "body-lg": ["Hanken Grotesk"],
        "headline-lg": ["Anton"],
        "display-2xl": ["Anton"],
        "headline-md": ["Anton"],
        "body-md": ["Hanken Grotesk"]
      },
      fontSize: {
        "label-mono": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "headline-lg-mobile": ["48px", { "lineHeight": "52px", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "headline-lg": ["64px", { "lineHeight": "72px", "fontWeight": "400" }],
        "display-2xl": ["120px", { "lineHeight": "110px", "letterSpacing": "-0.02em", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "40px", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }]
      }
    },
  },
  plugins: [forms, containerQueries],
}

export default config