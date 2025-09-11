import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext)

    // Function to update task status
    const updateTaskStatus = (taskIndex, newStatus) => {
        const updatedUsers = [...userData]

        updatedUsers.forEach((user) => {
            if (user.id === data.id) {
                const task = user.tasks[taskIndex]

                // Reset all status flags
                task.newTask = false
                task.active = false
                task.completed = false
                task.failed = false

                // Set new status
                if (newStatus === "active") {
                    task.active = true
                    user.taskCounts.active += 1
                    user.taskCounts.newTask -= 1
                }
                if (newStatus === "completed") {
                    task.completed = true
                    user.taskCounts.completed += 1
                    user.taskCounts.active -= 1
                }
                if (newStatus === "failed") {
                    task.failed = true
                    user.taskCounts.failed += 1
                    user.taskCounts.active -= 1
                }
            }
        })

        setUserData(updatedUsers)
    }

    return (
        <div
            id='tasklist'
            className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'
        >
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return (
                        <AcceptTask
                            key={idx}
                            data={elem}
                            onComplete={() => updateTaskStatus(idx, "completed")}
                            onFail={() => updateTaskStatus(idx, "failed")}
                        />
                    )
                }
                if (elem.newTask) {
                    return (
                        <NewTask
                            key={idx}
                            data={elem}
                            onAccept={() => updateTaskStatus(idx, "active")}
                        />
                    )
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
                return null
            })}
        </div>
    )
}

export default TaskList
