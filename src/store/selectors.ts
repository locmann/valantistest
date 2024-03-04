import { RootState } from '@/store/store.ts'

export const selectIds = (state: RootState) => state.ids.ids
export const selectItems = (state: RootState) => state.items.items
export const selectPages = (state: RootState) => state.pages
