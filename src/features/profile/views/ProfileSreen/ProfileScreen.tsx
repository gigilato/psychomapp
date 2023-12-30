import { Alert } from 'react-native'

import { Box, KeyboardAvoidingView, Separator, Text } from '$atoms'
import { config } from '$config'
import { signOutAsync, useAuthStore } from '$infra/auth'
import { i18n } from '$infra/i18n'
import { Header } from '$views/navigation'

import { ProfileSetting } from './components'

export const ProfileScreen = () => {
  const { firstname, lastname, job, gender, email } = useAuthStore((state) => state.profile!)
  return (
    <KeyboardAvoidingView>
      <Header className="items-center justify-center">
        <Text variant="title" className="text-white-light">
          {`${firstname} ${lastname}`}
        </Text>
        <Text variant="subtitle" className="text-white-light" textTransform="upper-first">
          {i18n.t(`profile.jobs.${job}` as any, { context: gender })}
        </Text>
      </Header>
      <Box className="px-l">
        <ProfileSetting ID="profile/email" content={email} icon="mail" />
        <ProfileSetting
          ID="profile/password"
          content={i18n.t('settings.updatePassword')}
          icon="lock"
          type="link"
        />
      </Box>
      <Separator className="my-l" />
      <Box className="px-l">
        <ProfileSetting ID="profile/test" content={i18n.t('settings.tests')} type="navigation" />
        <ProfileSetting
          ID="profile/objectives"
          content={i18n.t('settings.objectives')}
          type="navigation"
        />
        <ProfileSetting
          ID="profile/billing"
          content={i18n.t('settings.billing')}
          type="navigation"
        />
      </Box>
      {email === 'dev@psychomapp.com' ? (
        <>
          <Separator className="my-l" />
          <ProfileSetting
            ID="profile/dev"
            content="Dev config"
            type="navigation"
            className="px-l"
            onPress={() => Alert.alert('Config', JSON.stringify(config, undefined, 2))}
          />
        </>
      ) : null}
      <Separator className="my-l" />
      <ProfileSetting
        ID="profile/signOut"
        content={i18n.t('settings.cgu')}
        type="link"
        className="px-l"
      />
      <Separator className="my-l" />
      <ProfileSetting
        ID="profile/signOut"
        content={i18n.t('common.signOut')}
        icon="log-out"
        color="darkRed"
        onPress={signOutAsync}
        className="px-l"
      />
    </KeyboardAvoidingView>
  )
}
