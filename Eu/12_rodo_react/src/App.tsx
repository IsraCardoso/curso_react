import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import { ITask } from './interfaces/Task';
import TasksList from './components/TasksList';
import EditModal from './components/EditModal';


function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate]= useState<ITask| null>(null);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById('modal');
    if(display){
      modal?.classList.remove("hide");
    } else{
      modal?.classList.add("hide");
    }
  }

  const editTask = ():void => {
    hideOrShowModal(true);
  }

  return (
    <div className="App">
      <EditModal children={<TaskForm btnText='Editar tarefa' taskList={taskList}/>}/>
      <Header />
      <main className="main">
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa' setTaskList={setTaskList} taskList={taskList}/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TasksList taskList={taskList} deleteTask={deleteTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;
