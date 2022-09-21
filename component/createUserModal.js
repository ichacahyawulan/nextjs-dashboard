import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { hideCreate } from "../redux/createModalSlice"

import UserService from "../services/UserService"

export default function CreateUser() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [employee, setEmployee] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [departement, setDepartement] = useState("");

  function createUser(e){
    e.preventDefault();

    try {
      const user = {
        email: email,
        employee: employee,
        password: pass,
        confirm_password: passConf,
        is_active: isActive,
        departement: departement
      }

      // console.log(user)

      UserService.createUser(user)
        .then(() => {
            dispatch(hideCreate())       
        })
        .catch(() => {});
    } catch (error) {
        console.log(error.message)
    }
  }

  function setActive(value) {
    if (value) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  return (
    <div className="create-modal centered">
      <div className="form">
        <div className="form-field">
          <label className="form-label" htmlFor="inputEmail">Email</label>
          <input className="form-control" id="inputEmail" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="inputEmployee">Employee</label>
          <input className="form-control" id="inputEmployee" placeholder="Enter employee" required onChange={(e) => setEmployee(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="inputPassword">Password</label>
          <input className="form-control" id="inputPassword" placeholder="Enter password" type="password" required onChange={(e) => setPass(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="inputPasswordConf">Password Configuration</label>
          <input className="form-control" id="inputPasswordConf" placeholder="Enter password configuration" type="password" required onChange={(e) => setPassConf(e.target.value)} />
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="inputPasswordConf" onChange={(e) => setActive(e.target.checked)}/>
          <label className="form-check-label" htmlFor="inputPasswordConf">
            Active
          </label>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="inputDepartement">Department</label>
          <input className="form-control" id="inputDepartement" placeholder="Enter email" required onChange={(e) => setDepartement(e.target.value)} />
        </div>
      </div>

      <div className="foot">
        <button className="btn btn-secondary" onClick={() => dispatch(hideCreate())}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={(e) => createUser(e)}>
          Create
        </button>
      </div>

      <style jsx>{`        
        .create-modal {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
          padding: 30px;
        
          position: relative;
          width: 500px;
          height: auto;
          margin: auto;
        
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

        .form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-field {
          width: 100%;
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
        
        @media (max-device-width: 480px) { 
          .form {
            width: 339px;
          }
        }
      `}</style>
    </div>
  );
}