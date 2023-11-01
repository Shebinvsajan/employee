import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';



function TaskForm() {
    const [cname, setCname] = useState('');
    const [task, setTask] = useState('');
    const [id, setId] = useState('');

    let location = useNavigate()


    useEffect(()=>{
      // create uniqe id
      setId(uuid().slice(0,3));
    
    },[])
    console.log(id);

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('Client Name:', cname);
      console.log('Task:', task);
      // Add code to submit form data to server or update state here
      
    const body = {
      id,
      cname,
      task
 
    }
     // api call
     const result = await axios.post('http://localhost:8000/add-task',body)
     alert(result.data.message);
    //  redirect admin
    location('/')
  
    

    }
  return (
<div>
<h1 className="text-center">Add New Task</h1>

  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Form className='square border border-3 p-3' style={{ width: '50%' }} onSubmit={handleSubmit}>
        <Form.Group controlId="cname">
          <Form.Label>Client Name</Form.Label>
          <Form.Control type="text" placeholder="Enter client name" value={cname} onChange={(event) => setCname(event.target.value)} />
        </Form.Group>
  
        <Form.Group controlId="task">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter task" value={task} onChange={(event) => setTask(event.target.value)} />
        </Form.Group>
  
        <Button className='mt-5' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  </div>
</div>
  )
}

export default TaskForm