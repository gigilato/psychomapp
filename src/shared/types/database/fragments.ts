export const objectiveFragment = `
  id,
  name,
  color,
  createdAt,
  updatedAt,
  practitionnerId,
  slug
`
export const patientFragment = `
  id,
  birthdate,
  firstname,
  lastname,
  practitionnerId,
  createdAt,
  updatedAt
`

export const patientWithObjectiveFragment = `${patientFragment},
  objectives (${objectiveFragment})
`
