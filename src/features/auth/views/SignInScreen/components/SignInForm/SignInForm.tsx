import { Box } from '$atoms'
import { FormTextInput } from '$forms'
import { i18n } from '$infra/i18n'
import { Button, PressableText } from '$molecules'

import { ISignInFormProps } from './SignForm.props'
import { SignInFormType, useSignInForm } from './SignInForm.lib'

export const SignInForm = (props: ISignInFormProps) => {
  const { passwordRef, form, onPressSubmit, isPending, onPressForgotPassword } = useSignInForm()
  return (
    <Box {...props}>
      <FormTextInput<SignInFormType>
        name="email"
        control={form.control}
        type="email"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <FormTextInput<SignInFormType>
        className="mt-s"
        name="password"
        control={form.control}
        type="password"
        ref={passwordRef}
      />
      <PressableText
        variant="link"
        ID="forgotPassword/button"
        event="clic_forgot_password"
        className="mt-s self-end"
        onPress={onPressForgotPassword}
      >
        {i18n.t('signIn.forgotPassword')}
      </PressableText>
      <Button
        ID="signIn/button"
        event="clic_sign_in"
        title={i18n.t('common.connexion')}
        onPress={onPressSubmit}
        className="mt-xl"
        isLoading={isPending}
      />
    </Box>
  )
}
