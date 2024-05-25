import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";


export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      // custom font
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    nextui()
  ],
} satisfies Config