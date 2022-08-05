import path from 'lodash/fp/path'

import { RootState } from '../store'

export const makeFetchSelectors = (...reducersPath: string[]) => {
  return {
    data: (state: RootState) => path([...reducersPath, 'data'])(state),
    isFetching: (state: RootState) =>
      path([...reducersPath, 'isFetching'])(state),
    isFinished: (state: RootState) =>
      path([...reducersPath, 'isFinished'])(state),
    error: (state: RootState) => path([...reducersPath, 'error'])(state),
  }
}

export function makeTypedFetchSelectors<T>(...reducersPath: string[]) {
  return {
    data: (state: RootState) =>
      path([...reducersPath, 'data'])(state) as null | T,
    isFetching: (state: RootState) =>
      path([...reducersPath, 'isFetching'])(state),
    isFinished: (state: RootState) =>
      path([...reducersPath, 'isFinished'])(state),
    error: (state: RootState) => path([...reducersPath, 'error'])(state),
  }
}
