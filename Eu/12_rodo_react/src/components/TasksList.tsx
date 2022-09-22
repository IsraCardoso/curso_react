import React from 'react'
import { ITask } from '../interfaces/Task'
import './TaskList.css'
import {difficulty} from '../constants/difficulty'

type Props = {
  taskList: ITask[],
  deleteTask (id: number) : void,
  handleEdit() : void
}


const TasksList = ({taskList ,deleteTask, handleEdit}: Props) => {
  return (
    <>
    {taskList.length>0? (
      taskList.map((task)=>{
        return(
          <div key={task.id} className='task'>
            <div className='details'>
            <p>{task.title}</p>
            <p>{task.difficulty}</p>
          {/* <p>{difficulty[task.difficulty]}</p> */}
        
          </div>
          <div className='actions'>
            <svg onClick={() => deleteTask(task.id)} className='i' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="216" y1="56" x2="40" y2="56" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="104" y1="104" x2="104" y2="168" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="152" y1="104" x2="152" y2="168" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
            <svg onClick={() => handleEdit()}  className='i' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="164" y1="92" x2="68" y2="188" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="95.5" y1="215.5" x2="40.5" y2="160.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
          </div>
          </div>
        )})
    ):(
      <p>
        Você não tem tarefas cadastradas.
      </p>
    )}
    </>
  )
}

export default TasksList