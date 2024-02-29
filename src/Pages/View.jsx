import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER, View_user } from '../action/Action';
import { Link } from 'react-router-dom';

function View() {

    const dispatch = useDispatch()
    const record = useSelector(state => state.crud.user)
    console.log(record);

    useEffect(()=>{
       dispatch(View_user())
    })
    const deletedata=(id)=>{
        dispatch(DELETE_USER(id))
      }

  return (
   <>
   <Link to={'/add'}>Add</Link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
     <th scope="col">email</th>
     <th scope="col">password</th>
     <th scope="col">City</th>
     <th scope="col">Deg</th>
     <th scope="col">salary</th>
     <th scope="col">Contect</th>
     <th scope="col">Delete</th>
     <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
  {
    record && record.map ((val,i)=>{i= i+1
        return(
            <tr>
            <th scope="row">{val.id}</th>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.password}</td>
            <td>{val.city}</td>
            <td>{val.degi}</td>
            <td>{val.salary}</td>
            <td>{val.contact}</td>
            <td>
                <Link>
                <button onClick={() => deletedata(val.id)}  className='btn btn-primary'>Delete</button>
                </Link>
            </td>
          </tr>
        )
    })
  }
  </tbody>
</table>
   </>
  )
}

export default View
