import {
  Field,
  FieldProps as FormikFieldProps,
  FieldAttributes,
  ErrorMessage,
} from 'formik'
import { OnChangeValue, Options } from 'react-select'

import Dropdown, { DropdownOption } from 'components/input/select'
import { StyledDropdownError } from './styles'

export interface DropdownFieldProps extends FormikFieldProps {
  options: Options<DropdownOption>
  placeholder?: string
  isSearchable?: boolean
  showLabel?: boolean
  disabled?: boolean
  handleChange?: (option: DropdownOption) => void
}

function DropdownDrawer({
  field,
  form,
  options,
  placeholder,
  handleChange,
  isSearchable = false,
  showLabel = false,
  disabled = false,
}: DropdownFieldProps) {
  const onChange = (option: OnChangeValue<DropdownOption, false>) => {
    form.setFieldValue(field.name, option)

    if (handleChange) {
      handleChange(option as DropdownOption)
    }
  }

  return (
    <Dropdown
      name={field.name}
      value={field.value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      showLabel={showLabel}
      isSearchable={isSearchable}
      disabled={disabled}
    />
  )
}

function DropdownField(props: FieldAttributes<any> & DropdownFieldProps) {
  return (
    <>
      <Field component={DropdownDrawer} {...props} />
      <StyledDropdownError>
        <ErrorMessage name={props.name} />
      </StyledDropdownError>
    </>
  )
}

export default DropdownField
