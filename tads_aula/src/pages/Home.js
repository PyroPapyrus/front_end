import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div>
                <Link to="/profile">Página de profile</Link>
            </div>

            <div>
            <Link to="/list">Página de list</Link>
            </div>
        </div>
    );
}

export default Home;