"use client";
import React, { useState } from 'react'

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

    return <div>
        <h1>Create a Task</h1>
        <div className="input-control">
            <label htmlFor="title">Title</label>
            <input 
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
            <input 
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
            <input 
                type="checkbox" 
                id='completed'
                value={completed.toString()}
                name='completed'
            />
        </div>
        <div className="input-control">
            <label htmlFor="important">Important</label>
            <input 
                type="checkbox" 
                id='important'
                value={important.toString()}
                name='important'
            />
        </div>
        <div className="submit-btn">
            <button type='submit'></button>
        </div>

    </div>;
}

export default CreateContent;