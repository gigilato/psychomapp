import { PatientList } from '$features/patient/views/PatientList'
import { AddButton } from '$molecules'

export const PatientScreen = () => {
  return (
    <>
      <PatientList />
      <AddButton ID="addPatients" handleTabBar />
    </>
  )
}
