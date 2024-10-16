"use client";
import { useGlobalState } from '@/app/context/globalProvider';
import React from 'react';
import styled from 'styled-components';
import CreateContent from '../Modals/CreateContent';
import TaskItem from '../TaskItem/TaskItem';
import { plus } from '@/app/utils/Icons';

interface Props {
    title: string;
    tasks: any[];
}

function Tasks({ title, tasks } : Props) {

    const {theme} = useGlobalState();

    return (
        <TaskStyled theme={theme}>
            <h1>{title}</h1>
            <div className="tasks grid">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        date={task.date}
                        isCompleted={task.isCompleted}
                        id={task.id}
                    />
                ))}
                <button className="create-task">
                    {plus}
                    Add New Task    
                </button>
            </div>
        </TaskStyled>
    );
}

const TaskStyled = styled.main`
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;

    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    > h1 {
        font-size: clamp(1.5rem, 2vw, 2rem);
        font-weight: 800;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            width: 3rem;
            height: 0.2rem;
            background-color: ${(props) => props.theme.colorPrimaryGreen};
            border-radius: 0.5rem;
        }
    }

    .create-task {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        height: 16rem;
        color: ${(props) => props.theme.colorGrey2};
        font-weight: 600;
        cursor: pointer;
        border: 1px dashed ${(props) => props.theme.colorGrey5};
        border-radius: 1rem;
        transition: all 0.3s ease-in;

        &:hover {
            background-color: ${(props) => props.theme.colorGrey5};
            color: ${(props) => props.theme.colorGrey0};
        }
    }
    
    .tasks {
        margin: 3rem 0;
    }
`;
export default Tasks;
