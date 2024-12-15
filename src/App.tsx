import { useState } from 'react'
import { Task } from './components/atoms/Task'
import type { TaskType } from './components/atoms/Task'

function App() {
  const [tasklist, setTask] = useState<Array<TaskType>>([])

  return (
    <section className="max-w-[70vw] mx-auto mt-16 h-[100vh] container">
      {!tasklist.length ? (
        <p className="text-center tracking-widest">タスクがありません</p>
      ) : (
        tasklist.map((item) => {
          return <Task {...item} />
        })
      )}
    </section>
  )
}

export default App
