"use client"
import React from 'react'
import { photosActions } from '@/actions/photosActions';
import { postAction } from '@/actions/postActions';
import { userAction } from '@/actions/userAction'
import { useDispatch } from 'react-redux';


export default function multiReducer() {
    const dispatch = useDispatch()
    const fnGetUsers = ()=>{
        userAction();
    }
  return (
    <div className='container-fluid m-4'>
        <button className='btn btn-primary me-2' onClick={fnGetUsers}>Get Users</button>
        <button className='btn btn-primary me-2' onClick={()=>postAction(dispatch)}>Get Posts</button>
        <button className='btn btn-primary me-2' onClick={() =>photosActions()}>Get Photos</button>
    </div>
  )
}
