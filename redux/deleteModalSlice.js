import { createSlice } from '@reduxjs/toolkit'

export const deleteModalSlice = createSlice({
    name: 'deleteModal',
    initialState: {
        value: false,
    },
    reducers: {
        show: (state) => {
            state.value = true
        },
        hide: (state) => {
            state.value = false
        }
    },
})

export const { show, hide } = deleteModalSlice.actions

export default deleteModalSlice.reducer