import { useState } from 'react'
import Tasks from './Tasks'

const Blog = () => {
    
const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Hello!',
        day: "15th jan at 9:00pm",
        reminder: true,
    },
       {
        id: 2,
        text: 'How far?!',
        day: "14th jan at 8:00pm",
        reminder: true,
    },
       {
        id: 3,
        text: 'Hiiiii!',
        day: "15th feb at 9:00pm",
        reminder: false,
    },
       {
        id: 4,
        text: 'Sup!',
        day: "25th feb at 9:00pm",
        reminder: true,
    },
])
  return (
    <div>
   <Tasks  tasks={tasks}/>
    </div>
  )
}

export default Blog