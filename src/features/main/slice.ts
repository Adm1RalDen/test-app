import { fetchDataThunk } from 'app/redux-fetch'
import { makeFetchSlice } from 'app/redux-fetch/slice'
import { AppDispatch } from 'app/store'
import { fetchDefinitions, fetchFilters } from './api'
import { DEFINITIONS_REDUCER_NAME, FILTERS_REDUCER_NAME } from './const'
import { Definition, Filter } from './types'

const filtersSlice = makeFetchSlice<Filter[]>(FILTERS_REDUCER_NAME)

export const filtersReducer = filtersSlice.reducer
export const filtersActions = filtersSlice.actions

export const fetchFiltersThunk = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await fetchDataThunk({
        dispatch,
        actions: filtersActions,
        asyncFunc: () => fetchFilters(),
      })
    } catch (err) {
      // TODO Error modal
      console.error(err)
    }
  }
}

const definitionsSlice = makeFetchSlice<Definition[]>(DEFINITIONS_REDUCER_NAME)

export const definitionsReducer = definitionsSlice.reducer
export const definitionsActions = definitionsSlice.actions

export const fetchDefinitionsThunk = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await fetchDataThunk({
        dispatch,
        actions: definitionsActions,
        asyncFunc: () => fetchDefinitions(),
      })
    } catch (err) {
      // TODO Error modal
      console.error(err)
    }
  }
}
