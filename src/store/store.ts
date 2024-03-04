import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/api/baseApi.ts'
import { idsSlice } from '@/store/idsSlice.ts'
import { useDispatch } from 'react-redux'
import { itemsSlice } from '@/store/itemsSlice.ts'
import { pagesSlice } from '@/store/pagesSlice.ts'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    ids: idsSlice.reducer,
    items: itemsSlice.reducer,
    pages: pagesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
