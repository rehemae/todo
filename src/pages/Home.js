import React, { useEffect, useState } from 'react'; 
import Navbar from '../components/Navbar';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import TaskTile from '../components/TaskTile';

const Home=() =>{

  const[tasks, setTasks] = useState([]);
  const[tasky, setTasky] = useState([]);

  useEffect(() => {

    const list = [
      {
        id: '1',
        title: 'This is the first task',
      }, 
      {
        id: '2',
        title: 'This is the second task',
      }, 
      {
        id: '3',
        title: 'This is the third task',
      }, 
      {
        id: '4',
        title: 'This is the fourth task',
      }, 
      {
        id: '5',
        title: 'This is the fifth task',
      }, 
      {
        id: '6',
        title: 'This is the sixth task',
      }, 
      {
        id: '7',
        title: 'This is the seventh task',
      }, 
    ]

    setTasks(list)

  }, []);

  const handleAdd = () => {
    console.log(tasky)
    setTasks([...tasks, {id: '8', title: 'This is the eighth'}])
    console.log(tasky)
  }

  // const removeTask = () => {
  //   const objy = tasks.findIndex((obj) => obj.id === id);
  //   tasks.splice(objy, 1);
  //   return tasks;
  // }


  return (
    <div className='h-screen w-full bg-sky-300'>
      <Navbar />
      <div className='px-48 pb-4s'>
        <div className=' w-full h-10 flex items-center mt-4'>
          <button
          onClick={handleAdd}
           className='text-sm font-bold flex flex-row items-center'><AiOutlinePlusCircle className='text-3xl'/>Add Task</button>
        </div> 
        <div className="px-20">
          <h1 className='text-3xl font-bold mt-8 mb-3'>Tasks</h1>
          {
            tasks && tasks.map((task) => {
              return <TaskTile task={task} key={task.id} />
            })
          }
          {/* <TaskTile /> */}
        </div>

      </div>
    </div>
  )
}

export default Home