import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'
import './TaskForm.css'
import _uniqueId from 'lodash/uniqueId'
import {ITask} from '../interfaces/Task'

type Props = {
  btnText: string,
  taskList: ITask[],
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(1)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTask: ITask = {
      id: _uniqueId(),
      title,
      difficulty
    }
    setTaskList!([...taskList, newTask])
    setTitle("")
    setDifficulty(1)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value)
    } else{
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form onSubmit={addTaskHandler} action="" className='form'>
      <div className='input-container'>
        <label htmlFor="title" >Título:</label>
          <input type="text" value={title} name="title" id="title" placeholder='Título da tarefa' onChange={handleChange} required />
      </div>
      <div className='input-container'>
        <label htmlFor="title">Dificuldade:</label>
        <select name="difficulty" value={difficulty} id="difficulty" onChange={handleChange}>
          <option value="1">Fácil</option>
          <option value="2">Médio</option>
          <option value="3">Difícil</option>
        </select>
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm