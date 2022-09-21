import { createSlice } from '@reduxjs/toolkit'

export const updateTable = createSlice({
    name: 'updateTable',
    initialState: {
        value: false,
    },
    reducers: {
        update: (state) => {
            state.value = true
        },
        notUpdate: (state) => {
            state.value = false
        }
    },
})

export const { update, notUpdate } = updateTable.actions

export default updateTable.reducer