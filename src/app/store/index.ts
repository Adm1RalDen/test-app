import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducers } from './reducers'

const combinedReducer = combineReducers(reducers)

export const store = configureStore({
  reducer: combinedReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
