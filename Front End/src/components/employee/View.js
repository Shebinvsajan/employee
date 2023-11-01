import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUserTie } from '@fortawesome/free-solid-svg-icons';
import './View.css'
import { Link } from 'react-router-dom';



function View() {
const [allEmployee ,setEmployee]=useState([])

// function for api call

const fetchData = async ()=>{
const result = await axios.get('http://localhost:8000/get-all-employee')
setEmployee(result.data.employee);
}

console.log(allEmployee);

// delete employee
const handeleDelete = async(id)=>{
  const result =  axios.delete('http://localhost:8000/delete-employee/'+id);
  console.log(result);
  alert((await result).data.message)
  fetchData()
}


useEffect(()=>{
  fetchData()
},[])

  return (
    <div className='main'>
      <div className='mb-5'>
       <Link to={'/add'}>
          <button style={{ backgroundColor: '#ffd831' }}>
            <FontAwesomeIcon icon={faUserTie} /> Add New Employee
          </button>
       </Link>
      </div>

      <div className='row'>
  {allEmployee.map((allEmployee, index) => (
    <div key={index} className='col-md-4 mb-3'>
      <Card style={{ width: '18rem', height:'28rem' }}>
        <Card.Img variant='top' src={allEmployee.img} />
        <Card.Body>
          <h2>{allEmployee.name}</h2>
          <p>Age: {allEmployee.age}</p>
          <p>Salary: ${allEmployee.salary}</p>
          <p>Designation: {allEmployee.designation}</p>
          <div className='d-flex justify-content-around'>
            <Link to={'/edit/'+allEmployee.id}>
              <button style={{ backgroundColor: '#ffd831' }}>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
            </Link>
            <button onClick={()=>handeleDelete(allEmployee.id)} style={{ backgroundColor: '#ffd831' }}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>

    </div>
  );
}

export default View;
