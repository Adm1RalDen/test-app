import { MenuPlacement, Options } from 'react-select'
import { StyledLabel, StyledSelect, StyledSelectLabelWrapper } from './styles'

export interface SelectProps {
  name: string
  value?: DropdownOption
  onChange?: (newValue: any) => void
  options?: Options<DropdownOption>
  placeholder?: string
  className?: string
  isSearchable?: boolean
  disabled?: boolean
  showLabel?: boolean
  menuPlacement?: MenuPlacement
  defaultValue?: DropdownOption
}

export interface DropdownOption {
  label: string
  value: string | number | boolean | object
}

function Select({
  name,
  value,
  onChange,
  options,
  placeholder,
  className,
  isSearchable = false,
  disabled = false,
  showLabel = false,
  menuPlacement = 'bottom',
  defaultValue,
}: SelectProps) {
  return (
    <>
      {showLabel && value?.value && (
        <StyledSelectLabelWrapper>
          <StyledLabel htmlFor={name}>{placeholder}</StyledLabel>
        </StyledSelectLabelWrapper>
      )}
      <StyledSelect
        inputId={name}
        placeholder={placeholder}
        classNamePrefix="select"
        className={className}
        isSearchable={isSearchable}
        name={name}
        onChange={onChange}
        isDisabled={disabled}
        options={options}
        defaultValue={defaultValue}
        menuPlacement={menuPlacement}
      />
    </>
  )
}

export default Select
