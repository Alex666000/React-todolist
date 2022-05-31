import React from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
//BLL:
    const task1 = [
        {id: 1, title: 'задача 1', isDone: true},
        {id: 2, title: 'задача 2', isDone: false},
        {id: 3, title: 'задача 3', isDone: true}
    ]

    const task2 = [
        {id: 1, title: 'задача 3', isDone: true},
        {id: 2, title: 'задача 4', isDone: false},
        {id: 3, title: 'задача 5', isDone: false}
    ]
//UI:
    return (
        <div className="App">
            <Todolist title={'Todo1'} tasks={task1}/>
            <Todolist title={'Todo2'} tasks={task2}/>
        </div>
    );
}

export default App;
