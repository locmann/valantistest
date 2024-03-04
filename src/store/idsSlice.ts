import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type IniStateType = {
  ids: string[]
}

const initialState: IniStateType = {
  ids: [],
}
export const idsSlice = createSlice({
  name: 'ids',
  initialState,
  reducers: {
    uploadIds: (state, action: PayloadAction<string[]>) => {
      state.ids = action.payload
    },
  },
})

export const { uploadIds } = idsSlice.actions
