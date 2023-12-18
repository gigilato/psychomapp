import { Skeleton } from 'moti/skeleton'

import { Box, Pressable, Text } from '$atoms'
import { useCreateEquipment } from '$features/equipement/infra/controllers/useCreateEquipment'
import { useEquipments } from '$features/equipement/infra/controllers/useEquipments'
import { AddButton } from '$molecules'
import { FlatList } from '$organisms'

export const EquipmentScreen = () => {
  const { mutate } = useCreateEquipment()
  const onPress = () => {
    mutate({ name: 'test' })
  }
  const { data } = useEquipments()
  return (
    <>
      <Skeleton.Group show={false}>
        <FlatList
          data={data}
          renderItem={({ item, isLoading }) => (
            <Pressable
              ID=""
              animation={isLoading ? 'none' : 'scale'}
              shadow
              className="pl-s py-s mx-l rounded-s flex-row items-center"
            >
              <Box className="bg-success w-[20] h-[20] rounded-full mr-s" />
              <Skeleton width={`${Math.random() * (100 - 50) + 50}%`} colorMode="light">
                <Text>{item.name}</Text>
              </Skeleton>
            </Pressable>
          )}
        />
      </Skeleton.Group>
      <AddButton ID="addEquipment" onPress={onPress} />
    </>
  )
}
