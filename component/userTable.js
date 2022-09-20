import { BsSearch, BsPlusLg } from 'react-icons/bs'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { show } from "../redux/deleteModalSlice"
import { showCreate } from "../redux/createModalSlice"
import { showEdit } from "../redux/editModalSlice"
import DeleteModal from "./deleteModal";
import CreateUser from './createUserModal'
import EditUser from './editModal'

export default function UserTable() {
  const dispatch = useDispatch()
  const deleteUser = useSelector((state) => state.deleteUser.value)
  const createUser = useSelector((state) => state.createUser.value)
  const editUser = useSelector((state) => state.editUser.value)

  return (
    <div className="user-table">
      <div className="user-header">
        <div className="user-title">
          <h2>User Management</h2>
          <p>User</p>
        </div>
        <div className="user-control">
          <div className="input-group">
            <input className="form-control border-end-0 border" type="search" id="example-search-input" />
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
          <tr>
            <td>Jona Michelle</td>
            <td className="d-none d-md-table-cell">michelle@gmail.com</td>
            <td className="d-none d-md-table-cell">Marketing</td>
            <td className="d-none d-md-table-cell"><span className="status">ACTIVE</span></td>
            <td className="action-button">
              <button className="btn btn-dark" type="button" onClick={() => dispatch(showEdit())}>
                <AiOutlineEdit size={25}/>
              </button>
              <button className="btn btn-danger" type="button" onClick={() => dispatch(show())}>
                <AiOutlineDelete size={25}/>
              </button>
            </td>
          </tr>
          <tr>
            <td>Jona Michelle</td>
            <td className="d-none d-md-table-cell">michelle@gmail.com</td>
            <td className="d-none d-md-table-cell">Information Technology</td>
            <td className="d-none d-lg-table-cell"><span className="status">ACTIVE</span></td>
            <td className="action-button">
              <button className="btn btn-dark" type="button" onClick={() => dispatch(showEdit())}>
                <AiOutlineEdit size={25}/>
              </button>
              <button className="btn btn-danger" type="button" onClick={() => dispatch(show())}>
                <AiOutlineDelete size={25}/>
              </button>
            </td>
          </tr>
          <tr>
            <td>Jona Michelle</td>
            <td className="d-none d-md-table-cell">michelle@gmail.com</td>
            <td className="d-none d-md-table-cell">Marketing</td>
            <td className="d-none d-md-table-cell"><span className="status">ACTIVE</span></td>
            <td className="action-button">
              <button className="btn btn-dark" type="button" onClick={() => dispatch(showEdit())}>
                <AiOutlineEdit size={25}/>
              </button>
              <button className="btn btn-danger" type="button" onClick={() => dispatch(show())}>
                <AiOutlineDelete size={25}/>
              </button>
            </td>
          </tr>
          <tr>
            <td>Jona Michelle</td>
            <td className="d-none d-md-table-cell">michelle@gmail.com</td>
            <td className="d-none d-md-table-cell">Marketing</td>
            <td className="d-none d-md-table-cell"><span className="status">ACTIVE</span></td>
            <td className="action-button">
              <button className="btn btn-dark" type="button" onClick={() => dispatch(showEdit())}>
                <AiOutlineEdit size={25}/>
              </button>
              <button className="btn btn-danger" type="button" onClick={() => dispatch(show())}>
                <AiOutlineDelete size={25}/>
              </button>
            </td>
          </tr>
          <tr>
            <td>Jona Michelle</td>
            <td className="d-none d-md-table-cell">michelle@gmail.com</td>
            <td className="d-none d-md-table-cell">Information Technology</td>
            <td className="d-none d-md-table-cell"><span className="status">ACTIVE</span></td>
            <td className="action-button">
              <button className="btn btn-dark" type="button" onClick={() => dispatch(showEdit())}>
                <AiOutlineEdit size={25}/>
              </button>
              <button className="btn btn-danger" type="button" onClick={() => dispatch(show())}>
                <AiOutlineDelete size={25}/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="clearfix">
        <div className="hint-text">Ditampilkan 1 ke 5 dari 47</div>
      </div>

      {deleteUser ? 
        <DeleteModal />
      :
        null
      }

      {createUser ? 
        <CreateUser />
        :
        null
      }

      {editUser ? 
        <EditUser />
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
        .status {
          background: rgba(153, 239, 203, 0.26);
          border-radius: 5px;
          color: rgba(153, 239, 203);
          padding: 5px;
        }
        .action-button {
          display: flex;
          flex-direction: row;
          gap: 10px;
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
