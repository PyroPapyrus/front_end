import { useNavigate } from "react-router-dom";


const List = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>List</h1>
            <p>hobbies: </p>
            <p>Videogames</p>
            <p>Volei</p>
            <p>COzinhar</p>

            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}

export default List;