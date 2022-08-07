export enum OperatorEnum {
  equal = 'eq',
  greater = 'gt',
  least = 'ls',
  between = 'between',
}

export enum DefinationType {
  text = 'Text',
  number = 'Numeric',
  date = 'Date',
}

export type ConditionValueType = string | string[] | number | number[]

export interface Condition {
  definition_id: string
  operator: OperatorEnum
  value: ConditionValueType
}

export interface Filter {
  id: string
  name: string
  conditions: Condition[]
}

export interface Definition {
  id: string
  label: string
  type: DefinationType
  operators: OperatorEnum[]
  default_value: any
}
