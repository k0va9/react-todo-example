import { createContext, useState } from 'react'
import { Task } from './components/molecules/Task'
import type { TaskType } from './components/molecules/Task'

export const TaskContext = createContext({} as {
  tasklist: TaskType[]
  setTask: React.Dispatch<React.SetStateAction<TaskType[]>>
})

function App() {
  const [tasklist, setTask] = useState<Array<TaskType>>([])

  const createTask = (val: string) => {
    const data: TaskType = {
      id: Math.random().toString(36).slice(-8),
      name: val,
      completed: false
    }
    setTask([...tasklist, data])
  }

  const handleChangeCompleted = (id: string) => {
    setTask((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) return { ...task, completed: !task.completed }
        return task
      })
    })
  }

  return (
    <section className="max-w-[70vw] mx-auto mt-16 h-[100vh] container">
      {!tasklist.length ? (
        <p className="text-center tracking-widest">タスクがありません</p>
      ) : (
        tasklist.map((item) => {
          return (
            <TaskContext.Provider value={{ tasklist, setTask}}>
              <Task {...item} />
            </TaskContext.Provider>
          )
        })
      )}
      <div className="max-w-[40vw] mx-auto my-8">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="タスクを作成"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              createTask(e.currentTarget.value)
              e.currentTarget.value = ''
            }
          }}
        />
      </div>
    </section>
  )
}

export default App
