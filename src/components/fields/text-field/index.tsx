import { memo } from 'react'
import { ErrorMessage, Field, FieldAttributes, FieldProps } from 'formik'
import { CommonStyledInput, StyledInputError } from 'components/input/styles'
import has from 'lodash/has'

function TextField(props: FieldAttributes<any>) {
  const { name, placeholder } = props
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => (
        <>
          <CommonStyledInput
            type="text"
            id={name}
            placeholder={placeholder}
            invalid={has(errors, name) && has(touched, name)}
            {...field}
            {...props}
          />
          <StyledInputError>
            <ErrorMessage name={name} />
          </StyledInputError>
        </>
      )}
    </Field>
  )
}

export default memo(TextField)
