import { useContext, useRef, useState } from 'react'
import { TaskType } from '../Task'
import { TaskContext } from '../../../App'
import { Label } from '../../atoms/Label'
import { Input } from '../../atoms/Input'

type ContentType = {
  id: string,
  taskName: string,
}

export const EditTaskModal = (props: Pick<TaskType, 'id' | 'name'>) => {
  const { setTask } = useContext(TaskContext)
  const dialogElement = useRef<HTMLDialogElement>(null)

  const handleUpdate = (id: string, value: string) => {
    setTask((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) return { ...task, name: value }
        return task
      })
    })
  }
  const [content, setContent] = useState<ContentType>({
    id: props.id,
    taskName: props.name
  })

  const handleChange = (key: string) => (e) => {
    setContent({ ...content, [key]: e.currentTarget.value })
  }

  const handleOpen = () => {
    dialogElement.current?.showModal()
  }

  const handleClose = () => {
    if (dialogElement.current?.returnValue === 'update') {
      handleUpdate(props.id, content.taskName)
    }
  }

  return (
    <div>
      <dialog
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-7"
        ref={dialogElement}
        onClose={handleClose}
      >
        <form method="dialog" className="flex flex-col gap-3">
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="taskName">タスク名</Label>
            <Input
              id={props.id}
              value={content.taskName}
              type="text"
              className="w-full border px-2"
              onChange={handleChange('taskName')}
            />
          </div>
          <div className="flex gap-x-6 mx-auto">
            <button
              className="bg-sky-500 text-white px-4 py-1 font-black"
              value="update"
            >
              更新
            </button>
            <button value="cancel">キャンセル</button>
          </div>
        </form>
      </dialog>

      <button onClick={handleOpen}>編集</button>
    </div>
  )
}
