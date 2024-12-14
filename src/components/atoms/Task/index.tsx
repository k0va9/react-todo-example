export type TaskType = {
  id: string
  name: string
  completed: boolean
  deadLine?: Date
}

export const Task = ({ ...props }: TaskType) => {
  return (
    <div className="w-full flex gap-4 text-xl border-b pb-4">
      <input id={props.id} type="checkbox" />
      <label>{props.name}</label>
    </div>
  )
}
