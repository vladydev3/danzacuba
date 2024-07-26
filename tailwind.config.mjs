import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Roboto", ...fontFamily.sans],
        body: ["Roboto", ...fontFamily.mono],
      },
      colors: {
        border: {
          DEFAULT: "#201E43",
          light: "#3A3860",
          dark: "#0F0E2A",
        },
        input: {
          DEFAULT: "#201E43",
          light: "#3A3860",
          dark: "#0F0E2A",
        },
        ring: {
          DEFAULT: "#201E43",
          light: "#3A3860",
          dark: "#0F0E2A",
        },
        background: "#ECECF7",
        foreground: "#000",
        primary: "#506beb",
        secondary: {
          DEFAULT: "#508C9B",
          light: "#6BA6B5",
          dark: "#3A6A75",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#D9534F",
          light: "#E57373",
          dark: "#C62828",
          foreground: "#FFFFFF",
        },
        muted: "#F4F5F9",
        accent: {
          DEFAULT: "#5BC0DE",
          light: "#81D4FA",
          dark: "#0288D1",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#343A40",
          light: "#495057",
          dark: "#212529",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          light: "#F8F9FA",
          dark: "#E9ECEF",
          foreground: "#212529",
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};