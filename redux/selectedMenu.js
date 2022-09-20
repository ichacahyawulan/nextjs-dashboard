import { createSlice } from '@reduxjs/toolkit'

export const selectedMenu = createSlice({
    name: 'selectedMenu',
    initialState: {
        value: "dashboard",
    },
    reducers: {
        setMenu: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { setMenu } = selectedMenu.actions

export default selectedMenu.reducer