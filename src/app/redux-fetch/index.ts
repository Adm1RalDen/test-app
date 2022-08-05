import { Action } from '@reduxjs/toolkit'
import { AppDispatch } from 'app/store'
import { prop } from 'lodash/fp'

interface FetchDataParams {
  dispatch: AppDispatch
  actions?: FetchActions
  asyncFunc: () => void
  transformResponse?: (res: any) => any
}

interface FetchActions {
  init: () => Action
  succeed: (res: any) => Action
  failure: (err: any) => Action
}

export async function fetchDataThunk({
  dispatch,
  actions,
  asyncFunc,
}: FetchDataParams) {
  try {
    if (actions?.init) dispatch(actions.init())
    const response = await asyncFunc()
    const { data, status } = prop('data', response)
    if (status === 'ok') {
      if (actions?.succeed) dispatch(actions.succeed(data))

      return data
    }
    throw Error('Something went wrong')
  } catch (err) {
    dispatch(actions!.failure('Something wend wrong'))
    console.error(err)
  }
}
