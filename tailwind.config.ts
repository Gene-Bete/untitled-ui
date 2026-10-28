import type { Config } from 'tailwindcss'

const config: Config = {
  // 1. Onde o Tailwind deve procurar pelas classes usadas no seu projeto
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Se estiver usando Next.js App Router
  ],
  
  // 2. Personalização do tema (cores, fontes, espaçamentos, etc.)
  theme: {
    extend: {
        maxWidth: {
            'container': '77.7rem'
        }
        },
     
  },

  // 3. Plugins adicionais (ex: formulários, tipografia)
  plugins: [],
}

export default config