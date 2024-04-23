import {Todo} from "../types.ts";
import {FC} from "react";
import {Card} from "./index.ts";

interface TodosListProps {
    todos: Todo[]
}
const TodosList: FC<TodosListProps> = ({ todos }: TodosListProps) => {
    // const navigate = useNavigate();
    // const location = useLocation();

    // const handleShowDetails = (id: string) => {
    //     navigate(`/progress/2`);
    //
    // }

    return (
        <div>
            <h1>Todo App</h1>
            <ul>
                <div className="mt-4 flex gap-4 flex-wrap justify-center basis-1/3">
                    {todos.map(todo => (
                        <Card id={todo.id} status={todo.status} description={todo.description}/>
                        )) }
                </div>
            </ul>
        </div>
    );
};

export default TodosList;





