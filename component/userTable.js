import { BsSearch, BsPlusLg } from 'react-icons/bs'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { show } from "../redux/deleteModalSlice"
import { showCreate } from "../redux/createModalSlice"
import { showEdit } from "../redux/editModalSlice"
import DeleteModal from "./deleteModal";
import CreateUser from './createUserModal'
import EditUser from './editModal'

import UserService from '../services/UserService'
import { useEffect, useState } from 'react'

export default function UserTable() {
  const dispatch = useDispatch()
  const deleteUser = useSelector((state) => state.deleteUser.value)
  const createUser = useSelector((state) => state.createUser.value)
  const editUser = useSelector((state) => state.editUser.value)
  const [dataUser, setDataUser] = useState([])
  const [userId, setUserId] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    function getUserData(){
      try {
        const data_page = {
          page: 1,
          page_size: 10
        }
        UserService.getAllUser(data_page).then((res) => {
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

    getUserData()
  })

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


  function showDeleteModal(id) {
    dispatch(show())
    setUserId(id)
  }

  function showEditModal(id) {
    dispatch(showEdit())
    setUserId(id)
  }

  const data = [
    {
      "id": "d4ac1ad5-31cc-4563-abfe-f44e9e69effd",
      "employee": "admin",
      "email": "michelle@gmail.com",
      "is_active": true,
      "departement": "Marketing"
    },
    {
      "id": "1",
      "employee": "Jona Michelle 1",
      "email": "michelle@gmail.com",
      "is_active": false,
      "departement": "Marketing"
    },
    {
      "id": "2",
      "employee": "Jona Michelle 2",
      "email": "michelle@gmail.com",
      "is_active": true,
      "departement": "Marketing"
    },
    {
      "id": "3",
      "employee": "Jona Michelle 3",
      "email": "michelle@gmail.com",
      "is_active": true,
      "departement": "Marketing"
    },
    {
      "id": "4",
      "employee": "Jona Michelle 4",
      "email": "michelle@gmail.com",
      "is_active": true,
      "departement": "Marketing"
    }
  ]

  return (
    <div className="user-table">
      <div className="user-header">
        <div className="user-title">
          <h2>User Management</h2>
          <p>User</p>
        </div>
        <div className="user-control">
          <div className="input-group">
            <input className="form-control border-end-0 border" type="search" id="example-search-input" onChange={(e) => setSearch(e.target.value)}/>
            <span className="input-group-append">
              <button className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5" type="button">
                <BsSearch />
              </button>
            </span>
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
          {dataUser.map((item, index) => (
            <tr key={index}>
              <td>{item.employee}</td>
              <td className="d-none d-md-table-cell">{item.email}</td>
              <td className="d-none d-md-table-cell">{item.departement}</td>
              <td className="d-none d-md-table-cell">
                {item.is_active ? 
                  <span className="status-active">ACTIVE</span>
                :
                  <span className="status-nonactive">NON ACTIVE</span>
                }
              </td>
              <td className="action-button">
                <button className="btn btn-dark" type="button" onClick={() => showEditModal(item.id)}>
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
        <div className="hint-text">Ditampilkan 1 ke 5 dari 47</div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

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
        <EditUser userId={userId}/>
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
        .status-nonactive {
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
        ul {
          margin: 0px;
        }

        @media only screen and (max-width: 600px) {
          .user-header {
            display: flex;
            flex-direction: column;
            gap: 22px;
  
            position: relative;
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </div>
  )
}
