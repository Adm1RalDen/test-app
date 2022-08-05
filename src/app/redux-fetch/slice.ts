import { createSlice } from '@reduxjs/toolkit'

import { REQUEST_INITIAL_STATE } from './consts'
import { ExtraReducers } from 'app/redux-fetch/types'

interface RequestState<D> extends Omit<typeof REQUEST_INITIAL_STATE, 'data'> {
  data: D | null
}

export const makeFetchSlice = <D = unknown>(
  name: string,
  extraReducers?: ExtraReducers
) =>
  createSlice({
    initialState: REQUEST_INITIAL_STATE as RequestState<D>,
    name,
    reducers: {
      // isFinished is being set only once on initial load, and then doesn't change
      init: (state) => ({ ...state, isFetching: true }),
      succeed: (_, action) => ({
        ...REQUEST_INITIAL_STATE,
        isFetching: false,
        isFinished: true,
        data: action.payload,
      }),
      failure: (_, action) => ({
        ...REQUEST_INITIAL_STATE,
        isFetching: false,
        isFinished: true,
        error: action.payload,
      }),
      clear: () => REQUEST_INITIAL_STATE,
    },
    extraReducers,
  })
