import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Profile</h1>
            <p>Nome: Walter Yoshio</p>
            <p>Email: waltergmack@gmail.com</p>
            <p>Idade: 18</p>

            <button onClick={() => navigate(-1)}>Voltar</button>

        </div>
    );
}

export default Profile;