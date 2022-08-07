import { useAppDispatch, useAppSelector } from 'app/hooks'
import ROUTES from 'app/routes'
import NavigationButton from 'components/button/navigation-button'
import CommonLayout from 'components/layout'
import Spinner from 'components/spinner'
import { H1 } from 'components/typography'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FilterList from './components/filter-list'
import { definitionsSelector, filtersSelector } from './selectors'

import { fetchDefinitionsThunk, fetchFiltersThunk } from './slice'
import { MainContainer } from './styles'

function Main() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const filters = useAppSelector(filtersSelector.data) || []
  const isFetchingFilters = useAppSelector(filtersSelector.isFetching)
  const isFetchingDefinitions = useAppSelector(definitionsSelector.isFetching)

  useEffect(() => {
    dispatch(fetchFiltersThunk())
    dispatch(fetchDefinitionsThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickToCreateFilter = useCallback(() => {
    navigate(ROUTES.newFilter)
  }, [navigate])

  return (
    <CommonLayout>
      <MainContainer>
        <H1>Available Filters</H1>
        {isFetchingFilters || isFetchingDefinitions ? (
          <Spinner />
        ) : (
          <FilterList filters={filters} />
        )}
        <NavigationButton onClick={handleClickToCreateFilter}>
          Create Filter
        </NavigationButton>
      </MainContainer>
    </CommonLayout>
  )
}

export default Main
