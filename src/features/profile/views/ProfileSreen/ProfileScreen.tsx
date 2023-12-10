import { Screen, Text } from '$atoms'
import { signOutAsync } from '$infra/auth'
import { i18n } from '$infra/i18n'
import { Button } from '$molecules'

export const ProfileScreen = () => {
  return (
    <Screen className="px-l justify-center">
      <Text>profile</Text>
      <Button
        ID="SignOutButton"
        title={i18n.t('common.signOut')}
        className="border-danger"
        textClassName="text-danger"
        outlined
        onPress={signOutAsync}
      />
    </Screen>
  )
}
