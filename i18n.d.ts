import { fr } from './src/shared/infra/i18n/languages/fr'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof fr
  }
}
