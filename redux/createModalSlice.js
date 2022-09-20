import { createSlice } from '@reduxjs/toolkit'

export const createModalSlice = createSlice({
    name: 'createModal',
    initialState: {
        value: false,
    },
    reducers: {
        showCreate: (state) => {
            state.value = true
        },
        hideCreate: (state) => {
            state.value = false
        }
    },
})

export const { showCreate, hideCreate } = createModalSlice.actions

export default createModalSlice.reducer