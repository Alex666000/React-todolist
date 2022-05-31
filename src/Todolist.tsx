import React from 'react';

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    changeFilter: (filterValue: string) => void
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
                {props.tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} />
                            <span>{t.title}</span>
                            <button onClick={ () => {props.removeTask(t.id)}}>x</button>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={ () => {props.changeFilter('All')}}>All</button>
                <button onClick={ () => {props.changeFilter('Active')}}>Active</button>
                <button onClick={ () => {props.changeFilter('Completed')}}>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;