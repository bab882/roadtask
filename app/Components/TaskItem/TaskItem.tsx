"use client";
import React from 'react'

interface Props {
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
    id: string;
}

function TaskItem({title, description, date, isCompleted, id}) {
    
  return (
    <div>
     <h1>{title}</h1>
     <p>{description}</p>
     <p className='date'>{date}</p>
     <div className="task-footer">
        {isCompleted ? <button className='completed'>Completed</button> : <button className='incompleted'> Incomplete</button>}
     </div>
    </div>
  )
}

export default TaskItem;
