import { useContext } from 'react'
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


  return (
    <div className="w-full flex gap-4 text-xl border-b pb-4">
      <Input
        id={props.id}
        type="checkbox"
        onChange={() => {
          props.handleChanged(props.id)
        }}
      />
      <Label className={props.completed ? 'line-through' : ''}>
        {props.name}
      </Label>
    </div>
  )
}
