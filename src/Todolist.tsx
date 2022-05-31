import React from 'react';

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
}

const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                <input type="checkbox" checked={props.tasks[0].isDone} />
                <li><span>{props.tasks[0].title}</span></li>
                <input type="checkbox" checked={props.tasks[1].isDone} />
                <li><span>{props.tasks[1].title}</span></li>
                <input type="checkbox" checked={props.tasks[2].isDone} />
                <li><span>{props.tasks[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;