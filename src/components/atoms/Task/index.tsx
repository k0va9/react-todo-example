import { Input } from '../Input'

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
  return (
    <div className="w-full flex gap-4 text-xl border-b pb-4">
      <Input
        id={props.id}
        type="checkbox"
        onChange={(e) => {
          props.handleChanged(e.target.id)
        }}
      />
      <label className={props.completed ? 'line-through': ''}>{props.name}</label>
    </div>
  )
}
