import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type IniStateType = {
  items: ItemType[]
}

const initialState: IniStateType = {
  items: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    uploadItems: (state, action: PayloadAction<ItemType[]>) => {
      state.items = action.payload
    },
  },
})

export const { uploadItems } = itemsSlice.actions
