import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Todo, TodoStatus} from "../types.ts";
import axios from "axios";

const TodoDetails = () => {

    const {id } = useParams()

    // TODO: Getting TODO date from passed state. Change that to get todo details from backend.
    const { state } = useLocation();

    const [todo, setTodo] = useState<Todo | null>(  {
        id: "4",
        description:"Eat Dinner",
        status: TodoStatus.DONE,
    },);

    useEffect(() => {
        axios.get(`/api/todo/${id}`)
            .then(response => setTodo(response.data))
            .catch(error => console.error('Error fetching todo details:', error));
    }, [id]);

    if (!todo) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1 className="mb-10">
                TODO DETAILS
            </h1>
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Todo ID</dt>
                        <dd className="text-gray-700 sm:col-span-2">{id}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Todo Status</dt>
                        <dd className="text-gray-700 sm:col-span-2">{state.status}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Todo Description</dt>
                        <dd className="text-gray-700 sm:col-span-2">{state.description}</dd>
                    </div>
                </dl>
            </div>
        </>

    );
};

export default TodoDetails;