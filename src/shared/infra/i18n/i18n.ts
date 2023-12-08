import i18next from 'i18next'

import { getConfig } from '$config'

import { fr } from './languages/fr'

i18next.init({
  lng: 'fr',
  debug: getConfig('env') === 'dev',
  resources: { fr },
})

export const i18n = i18next
