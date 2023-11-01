import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';





function TaskUpdate() {
  const [allTask, setAllTask] = useState([])
  const [status, setStatus] = useState([])
  const [id,setId]=useState('')
  const [cname, setCname] = useState('')
  const [task, setTask] = useState('')

let  location = useNavigate()
  

  const params = useParams()
  console.log(params.id);


  // get particular task
  const fetchTask = async () => {
    const result = axios.get('http://localhost:8000/get-task/' + params.id)
    setAllTask((await result).data.task);
    setId((await result).data.task.id);
    setCname((await result).data.task.cname);
    setTask((await result).data.task.task);
    setStatus('completed');
  }
  console.log(allTask);

  const handleUdate = async(e)=>{
    e.preventDefault()
    // create a body to share with backend
    
    const body = {
      id,
      cname,
      task,
      status
    }
      // api call
      const result = await axios.post('http://localhost:8000/update-task',body)
      alert(result.data.message);
     //  redirect admin
     location('/task')
      }
        // close
    const handleClose =(event) =>{
      event.preventDefault();
      location('/task')
  
    }
  
  useEffect(() => {
    fetchTask()
  }, [])
  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col md={6} className="p-3">
          <form>
            <div className="form-group mt-3">
              <label htmlFor="optionalField">Confirm Client Name</label>
              <select className="form-control" id="optionalField">
                <option value="">-- Select an option --</option>
                <option value="option1">{cname}</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="optionalField">Confirm Task</label>
              <select className="form-control" id="optionalField">
                <option value="">-- Select an option --</option>
                <option value="option1">{task}</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="optionalField">Confirm Task Status</label>
              <select className="form-control" id="optionalField">
                <option value="">-- Select an option --</option>
                <option value="option1">{status}</option>
              </select>
            </div>

            <Button  onClick={(e)=> handleUdate(e)}  className="mt-5" type="submit">
              Update
            </Button>
            <Button  onClick={(event) => handleClose(event)} className="mt-5 ms-5" type="submit">
              Close
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default TaskUpdate