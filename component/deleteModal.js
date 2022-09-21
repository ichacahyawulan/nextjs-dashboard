import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { hide } from "../redux/deleteModalSlice"

import UserService from "../services/UserService"


// get props from userTable
export default function DeleteModal(props) {
  const dispatch = useDispatch()

  function deleteUser(e){
    e.preventDefault();

    try {
      UserService.deleteUser(props.userId)
        .then(() => {
          dispatch(hide())           
        })
        .catch(() => {});
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="delete-modal centered">
      <div className="description">
        Apakah Anda yakin akan menghapus data user ini?
      </div>
      <div className="foot">
        <button className="btn btn-secondary" onClick={() => dispatch(hide())}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={(e) => deleteUser(e)}>
          Delete
        </button>
      </div>

      <style jsx>{`
        .delete-modal {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          gap: 30px;
      
          position: relative;
          width: 420px;
          height: 188px;
      
          background: #FFFFFF;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
      
          z-index: 10;
        }
        
        .centered {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .description {
          width: auto;
          height: 48px;
      
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          
          color: #404040;
      
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 0;
        }
        
        .foot {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
      
          width: auto;
          height: auto;
      
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 0;
        }
      `}</style>
    </div>
  );
}