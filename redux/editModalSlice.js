import { createSlice } from '@reduxjs/toolkit'

export const editModalSlice = createSlice({
    name: 'editModal',
    initialState: {
        value: false,
    },
    reducers: {
        showEdit: (state) => {
            state.value = true
        },
        hideEdit: (state) => {
            state.value = false
        }
    },
})

export const { showEdit, hideEdit } = editModalSlice.actions

export default editModalSlice.reducer