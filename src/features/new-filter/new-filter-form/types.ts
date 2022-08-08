import { CONDITION_FORM_FIELDS } from './const'

export interface InitialFilterForm {
  conditions: Array<{
    [CONDITION_FORM_FIELDS.definationId]: string | null
    [CONDITION_FORM_FIELDS.operator]: string | null
    [CONDITION_FORM_FIELDS.conditionValue]:
      | string
      | string[]
      | number
      | number[]
      | null
  }>
}
