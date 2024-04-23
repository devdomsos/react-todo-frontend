import {TodoStatus} from "../types.ts";
import {FC} from "react";
import {useLocation, useNavigate} from "react-router-dom";

interface CardProps {
    id: string,
    description:string ,
    status: TodoStatus,
}
const Card: FC<CardProps> = ({ id, description, status}: CardProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname + id, "location.pathname + id")
    const handleShowDetails = (id: string) => {
        navigate(`${id}`, { state: {id, description, status} });

    }

    const statusButtonText = status === TodoStatus.OPEN ? "Move to In Progress" : status === TodoStatus.IN_PROGRESS ? "Move to Done" : "Delete"


    return (
        <div key={id} className="card w-120 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{status}</h2>
                <h4>{description}</h4>
                <div className="card-actions justify-between">
                    <button className="btn btn-accent" onClick={() => handleShowDetails(id)}>Details
                    </button>
                    <button className="btn btn-secondary" onClick={() => 0}>Edit
                    </button>
                    <button className="btn btn-warning" onClick={() => 0}>{statusButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;





