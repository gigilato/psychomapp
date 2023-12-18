import { Box } from '$atoms'
import { usePatients } from '$features/patient/infra/controllers/usePatients'
import { FlatList } from '$organisms'

export const PatientList = () => {
  const { data, isLoading, isRefetching } = usePatients()
  return (
    <FlatList
      data={data}
      renderItem={() => <Box />}
      isLoading={isLoading}
      isRefetching={isRefetching}
    />
  )
}
