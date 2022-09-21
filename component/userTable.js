import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { show } from "../redux/deleteModalSlice"
import { showCreate } from "../redux/createModalSlice"
import { showEdit } from "../redux/editModalSlice"
import { notUpdate } from '../redux/updateTable'
import DeleteModal from "./deleteModal";
import CreateUser from './createUserModal'
import EditUser from './editModal'
import Pagination from './pagination';

import UserService from '../services/UserService'
import { useEffect, useState, useMemo } from 'react'

let PageSize = 5;

export default function UserTableList() {
  const dispatch = useDispatch()
  const deleteUser = useSelector((state) => state.deleteUser.value)
  const createUser = useSelector((state) => state.createUser.value)
  const editUser = useSelector((state) => state.editUser.value)
  const updateTable = useSelector((state) => state.updateTable.value)
  const [dataUser, setDataUser] = useState([])
  const [newDataUser, setNewDataUser] = useState([])
  const [userId, setUserId] = useState("")
  const [selectedUser, setSelectedUser] = useState()
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1);

  // create new data user with departement data
  useEffect(() => {
    const array = dataUser
    let users = [];
    let promises = [];
    if (array.length !== 0) {
      for (let i = 0; i < array.length; i++) {
        promises.push(
          UserService.getUser(array[i].id).then((res) => {
            let data = {
              id: array[i].id,
              email: array[i].email,
              employee: array[i].employee,
              is_active: array[i].is_active,
              departement: res.data.departement
            }
            users.push(data);
          })
        )
      }
    }
    
    Promise.all(promises).then(() => {
      setNewDataUser(users)
    });
  }, [dataUser])

  // get data by table page
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    // return newDataUser with departement data
    if (newDataUser.length !== 0) {
      return newDataUser.slice(firstPageIndex, lastPageIndex);
    } else {
      return dataUser.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, dataUser, newDataUser]);

  // get data length
  const dataLength = useMemo(() => {
    return dataUser.length;
  }, [dataUser]);

  // get first and last data index in current page
  const dataIndex = useMemo(() => {
    const firstDataIndex = (currentPage * PageSize) - (PageSize - 1)
    let lastDataIndex = (currentPage * PageSize)
    if (lastDataIndex > dataUser.length) {
      lastDataIndex = dataUser.length
    }
    const dataIdx = {
      first: firstDataIndex,
      last: lastDataIndex
    }
    return dataIdx;
  }, [currentPage, dataUser]);

  function getAllUserData() {
    try {
      UserService.getAllUser().then((res) => {
        switch (res.status) {
          case 200:
            setDataUser(res.data.results)
            break;
          default:
            break
        } 
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllUserData()
  }, [])


  // get data by search
  useEffect(() => {
    try {
      UserService.getUserSearch(search).then((res) => {
        switch (res.status) {
          case 200:
            setDataUser(res.data.results)
            break;
          default:
            break
        } 
      })
    } catch (error) {
      console.log(error.message)
    }
  }, [search])

  // re-render table data if data updated
  useEffect(() => {
    if (updateTable) {
      getAllUserData()
      dispatch(notUpdate())
    }
  }, [updateTable])


  function showDeleteModal(id) {
    dispatch(show())
    setUserId(id)
  }

  function showEditModal(item) {
    dispatch(showEdit())
    setSelectedUser(item)
  }

  return (
    <div className="user-table">
      <div className="user-header">
        <div className="user-title">
          <h2>User Management</h2>
          <p>User</p>
        </div>
        <div className="user-control">
          <div className="input-group">
            <input className="form-control border-end-0 border" type="search" id="search-input" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
          </div>
          <button className="create-button" type="button" onClick={() => dispatch(showCreate())}>
            <BsPlusLg />
            Create User
          </button>
        </div>
      </div>
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">Employee name</th>
            <th scope="col" className="d-none d-md-table-cell">Email</th>
            <th scope="col" className="d-none d-md-table-cell">Department</th>
            <th scope="col" className="d-none d-md-table-cell">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item, index) => (
            <tr key={index}>
              <td>{item.employee}</td>
              <td className="d-none d-md-table-cell">{item.email}</td>
              <td className="d-none d-md-table-cell">{item.departement}</td>
              <td className="d-none d-md-table-cell">
                {item.is_active ? 
                  <span className="status-active">ACTIVE</span>
                :
                  <span className="status-inactive">INACTIVE</span>
                }
              </td>
              <td className="action-button">
                <button className="btn btn-dark" type="button" onClick={() => showEditModal(item)}>
                  <AiOutlineEdit size={25}/>
                </button>
                <button className="btn btn-danger" type="button" onClick={() => showDeleteModal(item.id)}>
                  <AiOutlineDelete size={25}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="page-show">
        <div className="hint-text">Ditampilkan {dataIndex.first} ke {dataIndex.last} dari {dataLength}</div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={dataLength}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
      
      {/* modal for delete, create, and edit user */}
      {deleteUser ? 
        <DeleteModal userId={userId}/>
      :
        null
      }

      {createUser ? 
        <CreateUser />
        :
        null
      }

      {editUser ? 
        <EditUser user={selectedUser}/>
        :
        null
      }

      <style jsx>{`
        .user-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 22px;

          position: relative;
          width: 100%;
          height: 100px;
        }
        .user-control {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 22px;
        }
        .create-button {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 11px 13px;
          gap: 11px;
        
          width: 230px;
          height: 44px;
        
          background: #198564;
          border-radius: 3px;
          border: 0px;
        
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        
          color: #FFFFFF;
        }
        .user-table {
          width: 100%;
        }
        .table {
          width: 100%;
          background: #FFFFFF;
          font-size: 18px;
          font-weight: 500;
        }
        tr {
          height: 60px;
        }
        th, td {
          vertical-align: middle;
        }
        .status-active {
          background: rgba(153, 239, 203, 0.26);
          border-radius: 5px;
          color: rgb(25, 133, 100);
          padding: 5px;
        }
        .status-inactive {
          background: rgb(255, 0, 0, 0.26);
          border-radius: 5px;
          color: rgb(255, 0, 0);
          padding: 5px;
        }
        .action-button {
          display: flex;
          flex-direction: row;
          gap: 10px;
        }
        .page-show {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .hint-text {
          width: 100%;
        }
        .pagination-bar {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }  

        @media only screen and (max-width: 768px) {
          .user-header {
            display: flex;
            flex-direction: column;
            gap: 22px;
  
            position: relative;
            width: 100%;
            height: auto;
          }
          .page-show {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hint-text, .pagination-bar {
            width: 100%;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}
