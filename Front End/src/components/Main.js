import React,{  useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Chart from './Chart.js';
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCode, faComments, faUserNinja ,faTasks, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Main() {

  const [allEmployee ,setEmployee]=useState([])
  const [developerCount , setDeveloperCount]= useState([])
  const [chatCount , setChatCount]= useState([])
  const [junior , setJuniorCount]= useState([])
  const [task , setAllTask]= useState([])
  const [completedTask , setCompleteTask]= useState([])
  const [incompletedTask , setIncompleteTask]= useState([])



  // function for api call
  
  const fetchData = async ()=>{
  const result = await axios.get('http://localhost:8000/get-all-employee')
  setEmployee(result.data.employee) 
  const employeeNames = result.data.employee.filter(emp => emp.designation === 'Developer') ;
  const chat = result.data.employee.filter(emp => emp.designation === 'Chat Support') ;
  const trannie = result.data.employee.filter(emp => emp.designation === 'Junior Developer'||emp.designation === 'Junior tester'||emp.designation === 'Tester') ;
  setChatCount(chat)
  setDeveloperCount(employeeNames)
  setJuniorCount(trannie)
}
  const fetchTask = async ()=>{
  const result = await axios.get('http://localhost:8000/get-all-task')
  setAllTask(result.data.task) 
  const Complete = result.data.task.filter(task => task.status === 'completed') ;
  const incomplete = result.data.task.filter(task =>task.status === 'incomplete') ;
  setCompleteTask(Complete)
  setIncompleteTask(incomplete)
  
}



  console.log('Developers',developerCount);
  console.log('com',completedTask);
  console.log('in',incompletedTask);
  console.log('task',task);

  
  useEffect(()=>{
    fetchData()
    fetchTask()

  },[])
  
    
  return (
   
 
       <div>
         <h1>Dashboard</h1>
        
        <Card >
      <Card.Body>
          <div className=' d-flex justify-content-evenly'>
              <Card className='main shadow-sm p-3 mb-2 bg-white rounded' style={{width:'10rem'}}>
            
              <div>
                    <FontAwesomeIcon className='icon'icon={faUserFriends}
                     style={{  backgroundColor:  '#DF9404'}}/>
              </div>
      
            
               
                <p className='title'> Total Employe</p>
              <p className='subtitle'>  {allEmployee.length}</p>
               
              </Card>
              <Card className='main shadow-sm p-3 mb-2 bg-white rounded' style={{width:'10rem'}}>
            
              <div>
                    <FontAwesomeIcon className='icon'icon={faCode}
                     style={{  backgroundColor:  '#360228'}}/>
              </div>
      
            
               
                <p className='title'> Developer</p>
              <p className='subtitle'>  {developerCount.length}</p>
               
              </Card>
  
              <Card className='main shadow-sm p-3 mb-2 bg-white rounded' style={{width:'10rem'}}>
            
              <div>
                    <FontAwesomeIcon className='icon'icon={faComments}
                     style={{  backgroundColor:  '#030a52'}}/>
              </div>
      
            
               
                <p className='title'> Chat </p>
              <p className='subtitle'>  {chatCount.length}</p>
               
              </Card>
  
              <Card className='main shadow-sm p-3 mb-2 bg-white rounded' style={{width:'10rem'}}>
            
              <div>
                    <FontAwesomeIcon className='icon'icon={faUserNinja }
                     style={{  backgroundColor:  '#033f52'}}/>
              </div>
      
            
               
                <p className='title'> Junior Developer </p>
              <p className='subtitle'>  {junior.length}</p>
               
              </Card>

           
         
          </div>

      </Card.Body>
  


    
   
      <Card.Body>
          <div className=' d-flex justify-content-evenly'>

              <Card className='main shadow-sm p-3 mb-2 bg-white rounded' style={{width:'10rem',height:'12rem'}}>
            
              <div>
                    <FontAwesomeIcon className='icon'icon={faTasks}
                     style={{  backgroundColor:  '#609ef0'}}/>
              </div>
      
            
               
                <p className='title'> Total Task</p>
              <p className='subtitle'>  {task.length}</p>
               
              </Card>
              <Card className='main shadow-sm p-3 mb-2 bg-white rounded' style={{width:'10rem',height:'12rem'}}>
            
              <div>
                    <FontAwesomeIcon className='icon'icon={faCheckCircle}
                     style={{  backgroundColor:  '#691008'}}/>
              </div>
      
            
               
                <p className='title'> Closed Task</p>
              <p className='subtitle'>  {completedTask.length}</p>
               
              </Card>
  
              <Card className='main shadow-sm p-3 mb-2 bg-white rounded' style={{width:'10rem',height:'12rem'}}>
            
              <div>
                    <FontAwesomeIcon className='icon'icon={faCircle}
                     style={{  backgroundColor:  '#086914'}}/>
              </div>
      
            
               
                <p className='title'>Active Task </p>
              <p className='subtitle'>  {incompletedTask.length}</p>
               
              </Card>
  
     
              <div>
            <Chart/>
            <h3>Total Employe</h3>
        <p>Total Employee: {allEmployee.length}</p>
  
</div>
           
         
          </div>

      </Card.Body>
      </Card>

          
       </div>

  
  )
}

export default Main

       
