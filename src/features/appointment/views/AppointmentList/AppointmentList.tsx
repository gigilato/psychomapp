import { Box, Center, HStack, Pressable, Text } from '$atoms'
import { FlatList } from '$organisms'
import { tagColors } from '$theme'

const obj1 = { id: '1', color: tagColors.purple.strong, name: 'Objectif 1' }
const obj2 = { id: '2', color: tagColors.blue.strong, name: 'Objectif 2' }
const obj3 = { id: '3', color: tagColors.lightBrown.strong, name: 'Objectif 3' }
const data = [
  {
    id: '1',
    color: tagColors.yellow.strong,
    name: 'Patient 1',
    start: '10h30',
    end: '11h30',
    obj: [obj1],
  },
  {
    id: '2',
    color: tagColors.yellowGreen.strong,
    name: 'Patient 2',
    start: '14h30',
    end: '15h30',
    obj: [obj2, obj3],
  },
  {
    id: '3',
    color: tagColors.salmon.strong,
    name: 'Patient 3',
    start: '15h00',
    end: '16h00',
    obj: [obj3, obj1],
  },
]

export const AppointmentList = () => {
  return (
    <FlatList
      data={data}
      renderHeader={() => (
        <>
          <Box className="h-s" />
          <Box className="h-calendar" />
        </>
      )}
      renderItem={({ item }) => (
        <Pressable ID="" animation="scale" className="flex-row mx-l p-s rounded-m" shadow>
          <Box className="rounded-full w-[4] mr-xs bg-primary-classic" />
          <Box className="flex-1">
            <Text variant="boldBody" className="flex-1">
              {item.name}
            </Text>
            <HStack className="mt-xs">
              {item.obj.map((obj) => (
                <Box
                  key={obj.id}
                  className="rounded-full mr-xs p-xxs"
                  style={{ backgroundColor: obj.color }}
                >
                  <Text variant="smallBody" className="text-white-classic">
                    {obj.name}
                  </Text>
                </Box>
              ))}
            </HStack>
          </Box>
          <Center>
            <Text variant="smallBody" className="text-black-strong">
              {item.start}
            </Text>
            <Text variant="smallBody" className="mt-xs text-black-light">
              {item.end}
            </Text>
          </Center>
        </Pressable>
      )}
    />
  )
}
