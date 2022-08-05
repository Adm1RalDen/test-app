import { useAppSelector } from 'app/hooks'
import { definitionsSelector } from 'features/main/selectors'
import {
  ConditionValueType,
  DefinationType,
  Filter,
  OperatorEnum,
} from 'features/main/types'
import { isArray } from 'lodash'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import { FitlerListItemContainer } from './styles'

interface FilterListItemProps {
  filter: Filter
}

const operators = {
  [OperatorEnum.equal]: 'is equal to',
  [OperatorEnum.greater]: 'more than',
  [OperatorEnum.least]: 'at least',
  [OperatorEnum.between]: 'is between',
}

export const makeConditionValue = (
  conditionValue: ConditionValueType,
  valueType: string
) => {
  if (isArray(conditionValue)) {
    return conditionValue
      .map((value) => {
        if (valueType === DefinationType.date) {
          return dayjs(new Date(value)).format('MMM DD')
        }
        return `${value}`
      })
      .join(' and ')
  }
  return conditionValue
}

function FilterListItem({ filter }: FilterListItemProps) {
  const conditionDefinitions = useAppSelector(definitionsSelector.data)

  const filterCondition = useMemo(
    () =>
      filter.conditions
        .map((condition) => {
          const conditionDefinition = conditionDefinitions?.find(
            (conditionDefinition) =>
              conditionDefinition.id === condition.definition_id
          )
          return `${filter.name}: ${conditionDefinition?.label || '-'} ${
            operators[condition.operator]
          } ${makeConditionValue(
            condition.value,
            conditionDefinition?.type || ''
          )}`
        })
        .join(' and '),
    [conditionDefinitions, filter.conditions, filter.name]
  )

  return <FitlerListItemContainer>{filterCondition}</FitlerListItemContainer>
}

export default FilterListItem
