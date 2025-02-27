import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'Cilas',
  title: 'My microblog',
  description: 'Random thoughts and notes',
  lang: 'en',
  themes: {
    dark: 'github-dark',
    light: 'github-light',
  },
} satisfies Config
