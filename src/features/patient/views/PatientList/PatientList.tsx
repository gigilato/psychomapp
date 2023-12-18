import { useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'
import { Skeleton } from 'moti/skeleton'

import { Box, Pressable, Text } from '$atoms'
import { getQueryKey } from '$features/patient/infra/controllers/usePatient'
import { usePatients } from '$features/patient/infra/controllers/usePatients'
import { mockPatientList } from '$features/patient/infra/mocks/mockPatients'
import { setTabBarVisibility } from '$infra/layout'
import { FlatList } from '$organisms'
import { Patient } from '$types/database'

export const PatientList = () => {
  const { data, isLoading, isRefetching } = usePatients()
  const client = useQueryClient()
  return (
    <FlatList
      data={data}
      loadingData={mockPatientList}
      renderItem={({ item, isLoading }) => (
        <Skeleton.Group show={isLoading}>
          <Pressable
            ID=""
            onPress={() => {
              client.setQueryData<Patient>(getQueryKey(item.id), item)
              setTabBarVisibility(false)
              router.push(`/dashboard/patients/${item.id}`)
            }}
            shadow
            className="mx-l p-s rounded-s"
          >
            <Skeleton colorMode="light">
              <Text>{`${item.firstname} ${item.lastname}`}</Text>
            </Skeleton>
          </Pressable>
        </Skeleton.Group>
      )}
      renderHeader={() => <Box className="h-s" />}
      renderSeparator={() => <Box className="h-s" />}
      isLoading={isLoading}
      isRefetching={isRefetching}
    />
  )
}
