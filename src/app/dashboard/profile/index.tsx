import { Center, Text } from '$atoms'
import { signOutAsync } from '$infra/auth'
import { Button } from '$molecules'

export default function Profile() {
  return (
    <Center className="flex-1">
      <Text>profile</Text>
      <Button ID="" title="deco" onPress={() => signOutAsync()} />
    </Center>
  )
}
