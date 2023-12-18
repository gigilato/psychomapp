import { Stack, useLocalSearchParams } from 'expo-router'
import { Skeleton } from 'moti/skeleton'

import { KeyboardAvoidingView, Text } from '$atoms'
import { usePatient } from '$features/patient/infra/controllers/usePatient'
import { i18n } from '$infra/i18n'
import { dateFormat, format, getAge } from '$libs/dates'
import { InformationBox } from '$organisms'

export default function PatientRoute() {
  const { patientId } = useLocalSearchParams()
  const { data, isLoading } = usePatient(patientId as string)

  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <Skeleton.Group show={isLoading}>
        <KeyboardAvoidingView className="px-l" fill="screen">
          <Text
            className="self-center mt-l"
            variant="subtitle"
          >{`${data?.firstname} ${data?.lastname}`}</Text>
          <InformationBox
            className="mt-m"
            label={i18n.t('forms.birthdate.label')}
            value={
              data?.birthdate && data.birthdate !== ''
                ? `${format(data.birthdate, dateFormat)} - ${i18n.t('patient.age', {
                    count: getAge(data.birthdate),
                  })}`
                : ''
            }
          />
        </KeyboardAvoidingView>
      </Skeleton.Group>
    </>
  )
}
