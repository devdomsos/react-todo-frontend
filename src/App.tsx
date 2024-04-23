import './App.css'
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Todo, TodoStatus} from "./types.ts";
import Navbar from "./components/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import TodoDetails from "./pages/TodoDetails.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import TodosList from "./components/TodosList.tsx";

const initialStateTodo = {
    id: "",
    description:"",
    status: TodoStatus.OPEN,
}

const testData = [
    {
        id: "1",
        description:"Wash clothing",
        status: TodoStatus.OPEN,
    },
    {
        id: "2",
        description:"Program",
        status: TodoStatus.IN_PROGRESS,
    },
    {
        id: "3",
        description:"Put Jason to sleep",
        status: TodoStatus.DONE,
    },
    {
        id: "4",
        description:"Eat Dinner",
        status: TodoStatus.DONE,
    },
]

// LIST ALL TODOS


function App() {
    const [todos, setTodos] = useState<Todo[]>(testData);
    const [newTodo, setNewTodo] = useState<Todo>(initialStateTodo);



    // TODO: Move handlers to child components once we can get data from backend.
    //  App compo should not care about initializing todos and handling state changes.
    // @GetMapping
    // List<Todo> getAll() {
    //     return todoService.getAll();
    // }
    const handleGetAllTodos = (url: string) => {
        axios.get(url)
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error fetching todos:', error));
    }

    useEffect(() => {
        handleGetAllTodos('/api/todo')
    }, []);

    // @PostMapping
    // Todo postTodo(@RequestBody Todo todo) {
    //     return todoService.save(todo);
    // }
    const handleAddTodo = (id: string) => {
        if (newTodo.id === "") return; // Skip if todo is empty
        axios.post(`/api/todo/${id}/update`, { title: newTodo })
            .then(response => {
                setTodos([...todos, response.data]); // Add new todo to the list
                setNewTodo(initialStateTodo); // Clear input field
            })
            .catch(error => console.error('Error adding todo:', error));
    };

    // @DeleteMapping("{id}")
    // void delete(@PathVariable String id) {
    //     todoService.delete(id);
    // }
    const handleDeleteTodo = (id: string) => {
        axios.delete(`/api/todo/${id}`)
            .then(() => setTodos(todos.filter(todo => todo.id !== id)))
            .catch(error => console.error('Error deleting todo:', error));
    };
    // TODO: Load todos based on status from the backend.
    const openTodos = todos.filter(e => e.status === TodoStatus.OPEN)
    const inProgressTodos = todos.filter(e => e.status === TodoStatus.IN_PROGRESS)
    const doneTodos = todos.filter(e => e.status === TodoStatus.DONE)

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<TodosList todos={openTodos} />} />
                <Route path="/:id" element={<TodoDetails />} />
                <Route path="/progress" element={<TodosList todos={inProgressTodos} />} />
                    <Route path="/progress/:id" element={<TodoDetails />} />
                <Route path="/done" element={<TodosList todos={doneTodos} />} />
                    <Route path="/done/:id" element={<TodoDetails />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>

    );
}

export default App
