import { Box, Text } from '$atoms'
import { usePatients } from '$features/patient/infra/controllers/usePatients'
import { FlatList } from '$organisms'

export const PatientList = () => {
  const { data, isLoading, isRefetching } = usePatients()
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Box shadow className="mx-l p-s rounded-s">
          <Text>{`${item.firstname} ${item.lastname}`}</Text>
        </Box>
      )}
      renderHeader={() => <Box className="h-s" />}
      renderSeparator={() => <Box className="h-s" />}
      isLoading={isLoading}
      isRefetching={isRefetching}
    />
  )
}
