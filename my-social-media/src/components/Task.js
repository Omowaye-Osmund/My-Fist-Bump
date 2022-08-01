import {FaTimes} from 'react-icons/fa'

const Task = ({task}) => {
  return (
    <div>
        <h3>{task.text} <FaTimes /></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task