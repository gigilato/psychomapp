import { z } from 'zod'

export const emailSchema = z.string().min(1, 'Champs requis').email('Email incorrect')
export const stringSchema = z.string().min(1, 'Champs requis')
