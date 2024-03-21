import { useState } from 'react';
import '../../styles/task.css'
import { ImDatabase } from "react-icons/im";
import { CiCirclePlus } from "react-icons/ci";
import { CiSquareRemove } from "react-icons/ci";

const Task = () => {
  const [modal, setModal] = useState('d-modal')

  return (
    <div className='task'>
      <div className="all-task-card">
        <div className="add-task-card">
          <CiCirclePlus className='add-task-icon' />
        </div>
      </div>

      {/* <div className={modal}>
        <div className="d-modal-card">
          <ImDatabase className='modal-logo' />
          <CiSquareRemove className='remove-modal' />
        </div>
      </div> */}
    </div>
  )
}

export default Task
