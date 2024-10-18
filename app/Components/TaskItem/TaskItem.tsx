"use client";
import React from 'react';
import { useGlobalState } from "@/app/context/globalProvider";
import { edit, trash } from "@/app/utils/Icons";


interface Props {
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
    id: string;
}

function TaskItem({title, description, date, isCompleted, id} : Props) {
    const  {theme} = useGlobalState();
  return (
    <div theme={theme}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className='date'>{date}</p>
        <div className="task-footer">
            {isCompleted ? (
                <button className='completed'>Completed</button>
                ) : (
                <button className='incompleted'> Incomplete</button>
            )}
            <button className="edit">{edit}</button>
            <button className="delete">{trash}</button>
            
        </div>
    </div>
  )
}

export default TaskItem;
