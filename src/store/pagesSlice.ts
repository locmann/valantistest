import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  total: 1,
  current: 1,
}

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    updatePages: (state, action: PayloadAction<number>) => {
      if (action.payload > state.total) {
        state.total += 1
        state.current = action.payload
      } else {
        state.current = action.payload
      }
    },
  },
})

export const { updatePages } = pagesSlice.actions
