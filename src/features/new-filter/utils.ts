import { Definition, OperatorEnum } from 'features/main/types'

export const parseConditionDefinitionsToOptions = (
  definitions: Definition[]
) => {
  return definitions.map((definition) => {
    return {
      label: definition.label,
      value: definition.id,
    }
  })
}

export const parseConditionOperatorToOptions = (operators: OperatorEnum[]) => {
  return operators.map((operator) => {
    return {
      label: operator,
      value: operator,
    }
  })
}
