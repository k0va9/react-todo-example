import { useContext, useState } from 'react'
import { Input } from '../../atoms/Input'
import { Label } from '../../atoms/Label'
import { TaskContext } from '../../../App'

export type TaskType = {
  id: string
  name: string
  completed: boolean
  deadLine?: Date
}

export const Task = ({ ...props }: TaskType) => {
  const { setTask } = useContext(TaskContext);

  const handleChange = (id: string) => {
    setTask((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) return { ...task, completed: !task.completed }
        return task
      })
    })
  }

  const [toId, setToId] = useState<string>('')

  return (
    <div
      className="w-full flex gap-4 text-xl border-b pb-4"
      draggable="true"
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', props.id)
      }}
      onDragOver={(e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
        setToId(e.currentTarget.id)
      }}
      id={props.id}
    >
      <Input
        id={props.id}
        type="checkbox"
        onChange={() => {
          handleChange(props.id)
        }}
      />
      <Label className={props.completed ? 'line-through' : ''}>
        {props.name}
      </Label>
    </div>
  )
}
