import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        // console.log(...todos);
    }

    const updateTodo =(todoId, newValue) =>{
        if(!newValue.text){
            return;
        }
        
        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)));
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
        
    };

    const removeTodo = (id)=>{
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    return (
        <div className=''>
            <h1>What is Plan today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
