import clsx from 'clsx'

import { Box, HStack, Text } from '$atoms'
import { IFormInputWrapperProps } from '$forms/FormInputWrapper/FormInputWrapper.props'

export const FormInputWrapper = ({
  className,
  label,
  error,
  textClassName,
  children,
}: IFormInputWrapperProps) => {
  const textColor = clsx(error ? 'text-danger' : 'text-grey-strong', textClassName)
  return (
    <Box className={className}>
      {label || error ? (
        <HStack className="mb-xs items-center justify-between">
          {label ? (
            <Text variant="boldBody" className={textColor}>
              {label}
            </Text>
          ) : null}
          {error ? (
            <Text
              variant="inputError"
              className={clsx(label ? 'ml-xs' : '', textColor)}
            >{`*${error}`}</Text>
          ) : null}
        </HStack>
      ) : null}
      {children}
    </Box>
  )
}
