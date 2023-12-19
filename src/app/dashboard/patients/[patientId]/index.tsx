import { Stack, router, useLocalSearchParams } from 'expo-router'
import { Skeleton } from 'moti/skeleton'

import { KeyboardAvoidingView, Text } from '$atoms'
import { useDeletePatient } from '$features/patient/infra/controllers/useDeletePatient'
import { usePatient } from '$features/patient/infra/controllers/usePatient'
import { i18n } from '$infra/i18n'
import { setTabBarVisibility } from '$infra/layout'
import { dateFormat, format, getAge } from '$libs/dates'
import { ActionButton, PressableText } from '$molecules'
import { InformationBox } from '$organisms'

export default function PatientRoute() {
  const { patientId } = useLocalSearchParams()
  const { data, isLoading } = usePatient(patientId as string)
  const { mutate: deletePatient } = useDeletePatient()

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
          {data ? (
            <PressableText
              ID="deletePatient"
              className="mt-l"
              textClassName="text-danger self-center"
              onPress={() => {
                deletePatient(data)
                router.back()
                setTabBarVisibility(true)
              }}
            >
              {i18n.t('patient.delete')}
            </PressableText>
          ) : null}
        </KeyboardAvoidingView>
      </Skeleton.Group>
      <ActionButton
        ID="editPatient"
        action="edit"
        onPress={() => router.push(`/dashboard/patients/${patientId}/update`)}
      />
    </>
  )
}
