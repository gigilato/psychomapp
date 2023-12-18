import { IFormInputWrapperProps } from '$forms/FormInputWrapper'
import { FormInputType } from '$forms/FormTextInput/FormTextInput.props'
import { i18n } from '$infra/i18n'
import { ITextInputProps } from '$molecules'

export const formTypeMapper: Record<
  FormInputType,
  { input: Partial<ITextInputProps>; wrapper: Partial<IFormInputWrapperProps> }
> = {
  default: {
    input: {},
    wrapper: {},
  },
  firstname: {
    input: {
      textContentType: 'givenName',
      autoCapitalize: 'words',
      placeholder: i18n.t('forms.firstname.placeholder'),
    },
    wrapper: {
      label: i18n.t('forms.firstname.label'),
    },
  },
  lastname: {
    input: {
      textContentType: 'givenName',
      autoCapitalize: 'words',
      placeholder: i18n.t('forms.lastname.placeholder'),
    },
    wrapper: {
      label: i18n.t('forms.lastname.label'),
    },
  },
  email: {
    input: {
      keyboardType: 'email-address',
      textContentType: 'emailAddress',
      iconLeft: 'mail',
      placeholder: i18n.t('forms.email.placeholder'),
      autoComplete: 'email',
    },
    wrapper: {
      label: i18n.t('forms.email.label'),
    },
  },
  password: {
    input: {
      textContentType: 'password',
      autoComplete: 'password',
      placeholder: i18n.t('forms.password.placeholder'),
    },
    wrapper: {
      label: i18n.t('forms.password.label'),
    },
  },
}
