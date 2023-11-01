import React from 'react'
import './Nav.css'
import Main from './Main'
import View from './employee/View'
import Add from './employee/Add'
import Edit from './employee/Edit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faBars, faUser, faSignal } from '@fortawesome/free-solid-svg-icons'
import { Link, Route, Routes } from 'react-router-dom';
import Pnf from './Pnf'
import TaskForm from './employee/TaskForm'
import TaskUpdate from './employee/TaskUpdate'
import Task from './employee/Task'
function Nav() {
  return (

    <div className="d-flex head">
      <div className="p-2  subnav  ">
        <h1><FontAwesomeIcon className='head-icon' icon={faSignal} /> Employee</h1>

        <div className='nav'>

          <Link className='link' to={'/'}>
            <p>    <FontAwesomeIcon className='icon' icon={faBars} /> DASHBORD</p>

          </Link>
          <Link className='link' to={'/employee'}>
            <p>   <FontAwesomeIcon className='icon' icon={faUser} /> EMPLOYEE</p>

          </Link>
          <Link className='link' to={'/task'}>
            <p>   <FontAwesomeIcon className='icon' icon={faBriefcase} />TASK</p>

          </Link>
        </div>

      </div>
      <div className="shadow p-3  bg-white rounded subhome " >

        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/employee' element={<View />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/task' element={<Task/>} />
          <Route path='/task-form' element={<TaskForm />} />
          <Route path='/task-update/:id' element={<TaskUpdate />} />
          <Route path={'*'} element={<Pnf />} />

        </Routes>
      </div>

    </div>

  )
}

export default Nav