import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row,Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [designation, setDesignation] = useState('');
  const [imageURL, setImageURL] = useState('');
  const params =useParams()
  let location = useNavigate()



  console.log(params.id);


  // api call to get deatils of a particular employee from server
  const fetchEmployee = async() =>{

    const result = axios.get('http://localhost:8000/get-an-employee/'+params.id)
    setFirstName((await result).data.employee.name);
    setAge((await result).data.employee.age);
    setSalary((await result).data.employee.salary);
    setDesignation((await result).data.employee.designation);
    setImageURL((await result).data.employee.img);
    setId((await result).data.employee.id);

  }
  const handleUdate = async(e)=>{
e.preventDefault()
// create a body to share with backend

const body = {
  id,
  firstName,
  age,
  salary,
  designation,
  imageURL
}
  // api call
  const result = await axios.post('http://localhost:8000/update-employee',body)
  alert(result.data.message);
 //  redirect admin
 location('/employee')
  }
    // close
    const handleClose =(event) =>{
      event.preventDefault();
      location('/employee')
  
    }
  

  useEffect(()=>{
    fetchEmployee()
  },[])

  return (
    <Row>
    <h1 className="text-center">Edit Employee Deatils</h1>

    <Row className="d-flex justify-content-center">

      <Col md={6} className=" p-3">
        <form>
          <div className="p-2 mt-5">
            <label>
              Name
              <input
                type="text"
                name="firstName"
                className="form-control form"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}


              />
            </label>
          </div>
          <label>
            Age
            <input
              type="number"
              className="form-control form"
              value={age}
              onChange={(e) => setAge(e.target.value)}


            />
          </label>
          <br />
          <label>
            salary
            <input
              type="number"
              className="form-control form"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}


            />
          </label>
          <br />
          <label>
            Image url
            <input
              type="text"
              className="form-control form"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}


            />
          </label>
          <br />
          <label>
            Designation
            <input
              type="text"
              className="form-control form"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}


            />
          </label>

          <br />
          <Button onClick={(e)=> handleUdate(e)} style={{ backgroundColor: '#ffd831', border: 'none', color: 'black' }}  className="mt-3" type="submit">
            update
          </Button>
          <Button style={{ backgroundColor: '#ffd831', border: 'none', color: 'black' }}  onClick={(event) => handleClose(event)} className="mt-3 ms-3" type="">
            Close
          </Button>
        </form>
      </Col>

      <Col md={6} className="d-flex justify-content-center">
      </Col>

    </Row>
  </Row>  )
}

export default Edit