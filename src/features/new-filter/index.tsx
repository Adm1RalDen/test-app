import { useAppDispatch, useAppSelector } from 'app/hooks'
import ROUTES from 'app/routes'
import NavigationButton from 'components/button/navigation-button'
import CommonLayout from 'components/layout'
import Select, { DropdownOption } from 'components/select'
import { H1 } from 'components/typography'
import { definitionsSelector } from 'features/main/selectors'
import { fetchDefinitionsThunk } from 'features/main/slice'
import { OperatorEnum } from 'features/main/types'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OnChangeValue } from 'react-select'
import { Body, NewFilterContainer } from './styles'
import {
  parseConditionDefinitionsToOptions,
  parseConditionOperatorToOptions,
} from './utils'

function NewFilter() {
  const navigation = useNavigate()
  const dispatch = useAppDispatch()

  const [selectedCondition, setSelectedCondition] =
    useState<DropdownOption | null>(null)
  const [, setSelectedOperator] = useState<OperatorEnum | null>(null)

  const isFethingDefinitions = useAppSelector(definitionsSelector.isFetching)
  const conditionDefinitions = useAppSelector(definitionsSelector.data)

  const handleClickToNavigationBtn = useCallback(() => {
    navigation(ROUTES.main)
  }, [navigation])

  useEffect(() => {
    if (!isFethingDefinitions && !conditionDefinitions) {
      dispatch(fetchDefinitionsThunk())
    }
  }, [conditionDefinitions, dispatch, isFethingDefinitions])

  const conditionOptions = useMemo(
    () => parseConditionDefinitionsToOptions(conditionDefinitions || []),
    [conditionDefinitions]
  )

  const operatorOptions = useMemo(() => {
    if (selectedCondition && conditionDefinitions) {
      const foundCondition = conditionDefinitions.find(
        (condition) => condition.id === selectedCondition.value
      )
      return foundCondition
        ? parseConditionOperatorToOptions(foundCondition.operators)
        : []
    }

    return []
  }, [conditionDefinitions, selectedCondition])

  const handleChangeConditionOption = useCallback(
    (option: OnChangeValue<DropdownOption, false>) => {
      setSelectedCondition(option)
      setSelectedOperator(null)
    },
    []
  )

  const handleChangeOperatorOption = useCallback(
    () => (option: OnChangeValue<DropdownOption, false>) => {
      option && setSelectedOperator(option.value as OperatorEnum)
    },
    []
  )
  // TODO реализовать форму
  return (
    <CommonLayout>
      <NewFilterContainer>
        <H1>New Filter</H1>
        <Body>
          <Select
            options={conditionOptions}
            name="condition-name"
            placeholder="Select condition name"
            onChange={handleChangeConditionOption}
          />
          {selectedCondition && operatorOptions.length > 0 && (
            <>
              <Select
                options={operatorOptions}
                name="operator"
                onChange={handleChangeOperatorOption}
                placeholder="Select operator"
              />
            </>
          )}
        </Body>
        <NavigationButton onClick={handleClickToNavigationBtn}>
          Go to main
        </NavigationButton>
      </NewFilterContainer>
    </CommonLayout>
  )
}

export default NewFilter
