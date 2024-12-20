import { useState } from 'react'
import { Input } from '../../atoms/Input'
import { Label } from '../../atoms/Label'

export type TaskType = {
  id: string
  name: string
  completed: boolean
  deadLine?: Date
}

type handlerType = {
  handleChanged: (id: string) => void
}

type Props = TaskType & handlerType

export const Task = ({ ...props }: Props) => {
  const [task,setTask] = useState("");
  return (
    <div className="w-full flex gap-4 text-xl border-b pb-4">
      <Input
        id={props.id}
        type="checkbox"
        value={task}
        onChange={(e)=>{setTask(e.target.value)}}
      />
      <Label className={props.completed ? 'line-through' : ''}>
        {props.name}
      </Label>
    </div>
  )
}
