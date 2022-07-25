import {
  defineConfig,
  presetWebFonts,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#1F364A',
      accent: '#FC0326',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Lato', 'Lato:400,700'],
        display: ['Benguiat'],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
