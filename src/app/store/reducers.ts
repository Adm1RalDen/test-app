import {
  DEFINITIONS_REDUCER_NAME,
  FILTERS_REDUCER_NAME,
} from 'features/main/const'

import { definitionsReducer, filtersReducer } from 'features/main/slice'

export const reducers = {
  [FILTERS_REDUCER_NAME]: filtersReducer,
  [DEFINITIONS_REDUCER_NAME]: definitionsReducer,
}
