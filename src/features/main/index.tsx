import { useAppDispatch, useAppSelector } from 'app/hooks'
import Spinner from 'components/spinner'
import { useEffect } from 'react'
import FilterList from './components/filter-list'
import { definitionsSelector, filtersSelector } from './selectors'

import { fetchDefinitionsThunk, fetchFiltersThunk } from './slice'
import { MainContainer } from './styles'

function Main() {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(filtersSelector.data) || []
  const isFetchingFilters = useAppSelector(filtersSelector.isFetching)
  const isFetchingDefinitions = useAppSelector(definitionsSelector.isFetching)

  useEffect(() => {
    dispatch(fetchFiltersThunk())
    dispatch(fetchDefinitionsThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainContainer>
      <h1>Available Filters</h1>
      {isFetchingFilters || isFetchingDefinitions ? (
        <Spinner />
      ) : (
        <FilterList filters={filters} />
      )}
    </MainContainer>
  )
}

export default Main
