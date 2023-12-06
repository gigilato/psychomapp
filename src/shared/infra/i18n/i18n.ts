import i18next from 'i18next'

import { config } from '$config'

import { fr } from './languages/fr'

i18next.init({
  lng: 'fr',
  debug: config.env === 'dev',
  resources: { fr },
})

export const i18n = i18next
