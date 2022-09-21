import { configureStore } from '@reduxjs/toolkit'
import selectedMenu from '../redux/selectedMenu'
import deleteUser from '../redux/deleteModalSlice'
import createUser from '../redux/createModalSlice'
import editUser from '../redux/editModalSlice'
import updateTable from '../redux/updateTable'


export default configureStore({
    reducer: {
        selectedMenu: selectedMenu,
        deleteUser:  deleteUser,
        createUser: createUser,
        editUser: editUser,
        updateTable: updateTable
    },
})