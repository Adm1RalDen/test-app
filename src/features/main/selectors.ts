import { makeTypedFetchSelectors } from 'app/redux-fetch/selectors'
import { RootState } from 'app/store'
import { DEFINITIONS_REDUCER_NAME, FILTERS_REDUCER_NAME } from './const'
import { Definition, Filter } from './types'

export const filtersSelector =
  makeTypedFetchSelectors<Filter[]>(FILTERS_REDUCER_NAME)

export const definitionsSelector = makeTypedFetchSelectors<Definition[]>(
  DEFINITIONS_REDUCER_NAME
)

export const selectDefinationById = (state: RootState, id: string) => {
  return state.definitions.data?.find((defination) => defination.id === id)
}
