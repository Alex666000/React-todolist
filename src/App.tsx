import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
//BLL:
    // useState -  следит за перерисовкой
    const [tasks,setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: true},
        {id: 3, title: 'Redux', isDone: true}
    ])

    const [filterForColander, setFilterForColander] = useState('All')

// Для каждой функции делается свой useState().
// 1)
// Удаление:
    let removeTask =(id: number) => {
        // итерируемый ай ди не равен ай ди что к нам пришел = удаление элемента по клику:
        let filterTasks = tasks.filter(task => task.id !== id)
        // - в конечном итоге мы что-то переустанавливаем (перерисовка):
        setTasks(filterTasks)
    }
// Для каждой функции делается свой useState()


// 2)
// Фильтрация по нажатию кнопки:
    let changeFilter = (filterValue: string) => {
        //запиши в useState ту кнопку что мы нажали то что пришло из button например "Active":
        setFilterForColander(filterValue)

    }
    //выбрали все таски где isDone === true (выбрали только "макароны") и прокидываем в пропсы:
    let colander = tasks

    // (Если из кнопки пришло "Active" то дуршлаг заливай isDone === true)
    if (filterForColander === 'Active') {
        colander = tasks.filter(t => t.isDone)
    }
    // (Если из кнопки пришло "Completed" то дуршлаг заливай isDone === false)
    if (filterForColander === 'Completed') {
        colander = tasks.filter(t => !t.isDone)
    }
//UI:
    return (
        <div className="App">
            <Todolist
                title={'Todo1'}
                // отфильтрованные таски перепрокунули..."подставили дуршлаг"
                tasks={colander}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
