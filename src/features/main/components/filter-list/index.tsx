import { Filter } from 'features/main/types'
import FilterListItem from '../filter-list-item'
import { FilterListContainer } from './styles'

interface FilterListProps {
  filters: Filter[]
}

function FilterList({ filters }: FilterListProps) {
  return (
    <FilterListContainer>
      {filters.map((filter) => {
        return <FilterListItem key={filter.id} filter={filter} />
      })}
    </FilterListContainer>
  )
}

export default FilterList
