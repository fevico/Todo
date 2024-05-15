import React, {useState, useEffect} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

const oldTask = localStorage.getItem('task')
console.log(oldTask)

const App = () => {
 const  [task, setTask] = useState(JSON.parse(oldTask) || [])  

 useEffect(()=>{
  localStorage.setItem('task', JSON.stringify(task))
 }, [task])

 const handleDelete = (taskIndex) => {
  const newTask = task.filter((task, index) =>index !== taskIndex)
  setTask(newTask)
 }
  return (
    <div className='app'>
    <TaskForm setTask={setTask} />
    <main className='app_main'>
      <TaskColumn title='To do' icon={todoIcon} task={task} status="todo" handleDelete={handleDelete} />
      <TaskColumn title='Doing' icon={doingIcon} task={task} status="doing" handleDelete={handleDelete}/>
      <TaskColumn title='Done' icon={doneIcon} task={task} status="done" handleDelete={handleDelete}/>
    </main>
    </div>
  )
}

export default App