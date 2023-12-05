import { Box } from '$atoms'
import { FormTextInput } from '$forms'
import { Button, PressableText } from '$molecules'

import { ISignInFormProps } from './SignForm.props'
import { SignInFormType, useSignInForm } from './SignInForm.lib'

export const SignInForm = (props: ISignInFormProps) => {
  const { passwordRef, form, onPressSubmit, isPending } = useSignInForm()
  return (
    <Box {...props}>
      <FormTextInput<SignInFormType>
        name="email"
        control={form.control}
        type="email"
        label="Email"
        placeholder="Votre email"
        textContentType="emailAddress"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <FormTextInput<SignInFormType>
        className="mt-s"
        name="password"
        control={form.control}
        type="password"
        label="Mot de passe"
        placeholder="Votre mot de passe"
        ref={passwordRef}
      />
      <PressableText variant="link" ID="forgotPassword/button" className="mt-s self-end">
        Mot de passe oublié ?
      </PressableText>
      <Button
        ID="signIn/button"
        title="Se connecter"
        onPress={onPressSubmit}
        className="mt-xl"
        isLoading={isPending}
      />
    </Box>
  )
}
