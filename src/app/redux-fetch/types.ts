import { CreateSliceOptions } from '@reduxjs/toolkit'

export interface FetchState<T> {
  data: T
  error: any
  isFetching: boolean
  isFinished: boolean
}

export type ExtraReducers = CreateSliceOptions['extraReducers']
