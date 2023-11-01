import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row,Button } from 'react-bootstrap';
import uuid from 'react-uuid';
import axios from 'axios';
// navigate
import { useNavigate } from 'react-router-dom';


function Add() {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [designation, setDesignation] = useState('');
  const [imageURL, setImageURL] = useState('');
// navigate the other page
  let location = useNavigate()

useEffect(()=>{
  // create uniqe id
  setId(uuid().slice(0,3));

},[])

  const handleSubmit = async (event) => {
    // prevent the refersh the page
    event.preventDefault();

// create uniqe id
  //  setId(uuid().slice(0,3));
  
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
    const result = await axios.post('http://localhost:8000/add-employee',body)
   alert(result.data.message);
  //  redirect admin
  location('/')





  }
  // close
  const handleClose =(event) =>{
    event.preventDefault();
    location('/employee')

  }

  return (

    <Row>
      <h1 className="text-center">Add New Employee</h1>

      <Row className="d-flex justify-content-center">

        <Col md={6} className=" p-3">
          <form>
            <div className="p-2 mt-5">
              <label>
                Name
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control form"
                />
              </label>
            </div>
            <label>
              Age
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control form"
              />
            </label>
            <br />
            <label>
              salary
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="form-control form"
              />
            </label>
            <br />
            <label>
              Image url
              <input
                type="text"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                className="form-control form"
              />
            </label>
            <br />
            <label>
              Designation
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="form-control form"
              />
            </label>

            <br />
            <Button style={{ backgroundColor: '#ffd831', border: 'none', color: 'black' }}  onClick={(event) => handleSubmit(event)} className="mt-3" type="submit">
              Create
            </Button>
            <Button style={{ backgroundColor: '#ffd831', border: 'none', color: 'black' }}  onClick={(event) => handleClose(event)}  className="mt-3 ms-3" type="">
              Close
            </Button>
          </form>
        </Col>

        <Col md={6} className="d-flex justify-content-center">
          {imageURL && <img src={imageURL} alt="Preview" />}
        </Col>

      </Row>
    </Row>
  );


}

export default Add;
