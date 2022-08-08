import { useAppDispatch, useAppSelector } from 'app/hooks'
import { DropdownField } from 'components/fields'
import TextField from 'components/fields/text-field'
import { definitionsSelector } from 'features/main/selectors'
import { fetchDefinitionsThunk } from 'features/main/slice'
import { DefinationType, OperatorEnum } from 'features/main/types'
import { FieldArray, Form, Formik } from 'formik'
import { useCallback, useEffect, useMemo } from 'react'
import {
  parseConditionDefinitionsToOptions,
  parseConditionOperatorToOptions,
} from '../utils'
import { CONDITION_FORM_FIELDS } from './const'
import { FormWrapper } from './styles'
import { InitialFilterForm } from './types'

interface NewFilterFormProps {
  values: null
  onSubmit: (values: any) => void
}

function NewFilterForm(props: NewFilterFormProps) {
  const isFethingDefinitions = useAppSelector(definitionsSelector.isFetching)
  const conditionDefinitions = useAppSelector(definitionsSelector.data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isFethingDefinitions && !conditionDefinitions) {
      dispatch(fetchDefinitionsThunk())
    }
  }, [conditionDefinitions, dispatch, isFethingDefinitions])

  const conditionOptions = useMemo(
    () => parseConditionDefinitionsToOptions(conditionDefinitions || []),
    [conditionDefinitions]
  )

  const operatorOptions = useCallback(
    (definationId: string | null) => {
      if (definationId && conditionDefinitions) {
        const foundCondition = conditionDefinitions.find(
          (condition) => condition.id === definationId
        )
        return foundCondition
          ? parseConditionOperatorToOptions(foundCondition.operators)
          : []
      }

      return []
    },
    [conditionDefinitions]
  )

  interface RenderInputFieldProps {
    type: DefinationType
    index: number
    operator: OperatorEnum
    name: string
  }

  const renderInputField = ({
    type,
    index,
    operator,
    name,
  }: RenderInputFieldProps) => {
    switch (type) {
      case DefinationType.text: {
        if (operator === OperatorEnum.between) {
          return (
            <FieldArray
              name={name}
              render={(arrayHelpers) => (
                <div>
                  <TextField name={`${name}.${index}`} />
                </div>
              )}
            />
          )
        }

        return <TextField name={name} />
      }
      case DefinationType.number: {
        if (operator === OperatorEnum.between) {
          return (
            <FieldArray
              name={name}
              render={(arrayHelpers) => {
                console.log(arrayHelpers.form.values.conditions[index]) // TODO реалізувати вивдення двух полів
                return (
                  <div>
                    <TextField type="number" name={`${name}.${index}`} />
                  </div>
                )
              }}
            />
          )
        }

        return <TextField type="number" name={name} />
      }

      default:
        return null
    }
  }

  return (
    <FormWrapper>
      <Formik
        initialValues={
          {
            conditions: [
              {
                [CONDITION_FORM_FIELDS.definationId]: null,
                [CONDITION_FORM_FIELDS.operator]: null,
                [CONDITION_FORM_FIELDS.conditionValue]: null,
              },
            ],
          } as InitialFilterForm
        }
        onSubmit={function (values: any): void | Promise<any> {
          console.log('onSubmit')
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FieldArray
              name="conditions"
              render={(arrayHelpers) => (
                <div>
                  {values.conditions.map((_: any, index: number) => {
                    const currentRowCondition = values.conditions[index]
                    const foundCondition = conditionDefinitions?.find(
                      (condition) =>
                        condition.id ===
                        currentRowCondition[CONDITION_FORM_FIELDS.definationId]
                          ?.value
                    )
                    return (
                      <div key={index}>
                        <DropdownField
                          name={`conditions.${index}.${CONDITION_FORM_FIELDS.definationId}`}
                          options={conditionOptions}
                          handleChange={() => {
                            setFieldValue(`conditions.${index}.operator`, null)
                          }}
                        />
                        {currentRowCondition[
                          CONDITION_FORM_FIELDS.definationId
                        ] && (
                          <DropdownField
                            name={`conditions.${index}.${CONDITION_FORM_FIELDS.operator}`}
                            options={operatorOptions(
                              currentRowCondition[
                                CONDITION_FORM_FIELDS.definationId
                              ].value
                            )}
                            onChange={(value: any) => {
                              if (value?.value === OperatorEnum.between) {
                                setFieldValue(
                                  `conditions.${index}.${CONDITION_FORM_FIELDS.conditionValue}`,
                                  ['', '']
                                )
                              }
                            }}
                          />
                        )}
                        {currentRowCondition[CONDITION_FORM_FIELDS.operator] &&
                          foundCondition &&
                          renderInputField({
                            type: foundCondition.type,
                            index,
                            operator:
                              currentRowCondition[
                                CONDITION_FORM_FIELDS.operator
                              ],
                            name: `conditions.${index}.${CONDITION_FORM_FIELDS.conditionValue}`,
                          })}
                      </div>
                    )
                  })}
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </FormWrapper>
  )
}

export default NewFilterForm
