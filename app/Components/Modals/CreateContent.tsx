"use client";
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Button from '../Button/Button';

function CreateContent() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState("");
    const [important, setImportant] = useState("");

    const handleChange = (name: string) => (e: any) => {
        switch (name) {
            case "title":
                setTitle(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
            case "date":
                setDate(e.target.value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "important":
                setImportant(e.target.checked);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const task = {
            title,
            description,
            date,
            completed,
            important
        };

        try {
            const res = await axios.post("/api/tasks", task);

            if(res.data.error) {
                toast.error(res.data.error);
            }

            toast.success("Task created successfully.");

        } catch (error) {
            toast.error("Something went wrong.");
            console.log(error);
        }
    };

    return <div>
        <form onSubmit={handleSubmit}>
            <h1>Create a Task</h1>
            <div className="input-control">
                <label htmlFor="title">Title</label>
                <input style={{color: 'green'}}
                    type="text" 
                    id='title'
                    value={title}
                    name='title'
                    onChange={handleChange("title")}
                    placeholder='e.g'
                />
            </div>
            <div className="input-control">
                <label htmlFor="description">Description</label>
                <textarea style={{color: 'green'}}
                    id='description'
                    value={description}
                    name='description'
                    onChange={handleChange("description")}
                    placeholder='e.g'
                    rows={4}
                >
                </textarea>
            </div>
            <div className="input-control">
                <label htmlFor="date">Date</label>
                <input style={{color: 'green'}}
                    type="date" 
                    id='date'
                    value={date}
                    name='date'
                    onChange={handleChange("date")}
                    placeholder='e.g'
                />
            </div>
            <div className="input-control">
                <label htmlFor="completed">Completed</label>
                <input style={{color: 'green'}}
                    type="checkbox" 
                    id='completed'
                    value={completed.toString()}
                    name='completed'
                />
            </div>
            <div className="input-control">
                <label htmlFor="important">Important</label>
                <input style={{color: 'green'}}
                    type="checkbox" 
                    id='important'
                    value={important.toString()}
                    name='important'
                />
            </div>
            <div className="submit-btn">
                <Button 
                    type='submit' 
                    name='Create Task'
                />
            </div>
        </form>
    </div>;
}

export default CreateContent;