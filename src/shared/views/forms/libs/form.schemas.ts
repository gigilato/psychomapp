import { z } from 'zod'

import { i18n } from '$infra/i18n'

export const emailSchema = z
  .string()
  .min(1, i18n.t('forms.common.required'))
  .email(i18n.t('forms.email.validator'))
export const stringSchema = z.string().min(1, i18n.t('forms.common.required'))
