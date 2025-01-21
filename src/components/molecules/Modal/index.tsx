import clsx from 'clsx'
import { useContext, useState } from 'react'
import { TaskType } from '../Task'
import { TaskContext } from '../../../App'
import { Label } from '../../atoms/Label'
import { Input } from '../../atoms/Input'

export const EditTaskModal = (props: Pick<TaskType, 'id' | 'name'>) => {
  const [modalStat, setIsModalOpen] = useState<boolean>(false)
  const { setTask } = useContext(TaskContext)

  const handleUpdate = (id: string, value: string) => {
    setTask((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) return { ...task, name: value }
        return task
      })
    })
  }

  const ModalContent = () => {
    const [newTaskName, setNewTaskName] = useState<string>(props.name)
    return (
      <div
        className="bg-white p-10 flex flex-col z-2 gap-y-4 rounded-[8px]"
        onClick={(e) => e.stopPropagation()}
      >
        <Label htmlFor="taskName">タスク名</Label>
        <Input
          id={props.id}
          value={newTaskName}
          type="text"
          className="w-full border"
          onChange={(e) => setNewTaskName(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key !== 'Enter') return
            handleUpdate(e.currentTarget.id, e.currentTarget.value)
            closeModal()
          }}
        />
      </div>
    )
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <div
        className={clsx(
          modalStat ? 'block' : 'hidden',
          'fixed inset-0 bg-gray-500/60 w-full h-full flex align-center justify-center items-center'
        )}
        onClick={closeModal}
      >
        <ModalContent />
      </div>
    </div>
  )
}
