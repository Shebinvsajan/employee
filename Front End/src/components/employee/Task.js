import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Task() {

    const [completeTasks, setCompleteTasks] = useState([])
    const [incompleteTasks, setIncompleteTasks] = useState([])

      // function for api for task call


      const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/get-all-task')
        console.log(result.data);
        const cmtask = result.data.task.filter(tasks => tasks.status === 'completed');
        const intask = result.data.task.filter(tasks => tasks.status === 'incomplete');
        setCompleteTasks(cmtask);
        setIncompleteTasks(intask);
    }

    console.log(completeTasks);

    useEffect(() => {
        fetchData()

    }, [])

  return (
    <div >
    <Link to={'/task-form'}>
        <Button>Add New Task</Button>

    </Link>            <Container className='d-flex ' style={{ marginTop: '5rem' }}>

        <div style={{ width: '50%', paddingRight: '3rem' }}>
            <p>  <FontAwesomeIcon className='text-success' icon={faCheckSquare} /> <b>Active Task </b></p>
            <div style={{ height: '500px', overflowY: 'auto' }}>

                <Table striped bordered hover variant="dark">
                    <thead>

                        <tr>
                            <th>#</th>
                            <th>Client Name</th>
                            <th>Task</th>
                            <th>Complete</th>
                        </tr>

                    </thead>
                    <tbody>
                        {incompleteTasks.map((task, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{task.cname}</td>
                                <td>{task.task}</td>
                                <td><Link to={'/task-update/'+task.id}><Button  >Conform</Button></Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        </div>
        <div style={{ width: '50%', paddingRight: '3rem' }}>
            <p>  <FontAwesomeIcon className='text-danger' icon={faCheckCircle} /> <b> Completed Task </b></p>

            <div style={{ height: '500px', overflowY: 'auto' }}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Client Name</th>
                            <th>Task</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completeTasks.map((task, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{task.cname}</td>
                                <td>{task.task}</td>
                                <td>{task.status}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        </div>


    </Container>
</div>
  )
}

export default Task