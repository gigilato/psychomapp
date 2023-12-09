import i18next from 'i18next'

import { fr } from './languages/fr'

i18next.init({
  lng: 'fr',
  debug: false,
  resources: { fr },
})

export const i18n = i18next
