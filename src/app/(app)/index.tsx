import { Screen } from '$atoms'
import { signOutAsync } from '$infra/auth'
import { Button } from '$molecules'

export default function App() {
  return (
    <Screen className="px-l justify-center">
      <Button ID="" title="Déconnexion" onPress={() => signOutAsync()} />
    </Screen>
  )
}
