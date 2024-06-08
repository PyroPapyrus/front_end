import { useEffect, useState } from "react";

const UseEffect = () => {
    const [myState, setMyState] = useState();
    const [myState2, setMyState2] = useState();

        // Atualização do componente
        useEffect( () => {
            console.log(
                "useEffet excutado na montagem e atualização do componente"
            );
        }, [myState, myState2] );

        // Montagem do componente
        useEffect(() => {
            console.log("useEffet excutado na montagem do componente")
        }, [])

        // Desmontagem do componente
        useEffect(() => {
            return () => {
                console.log("Função executada na desmontagem do componente")
            }
        }, [])

        const updateMyState = () => {
            setMyState("Status do MyState atualizado");
            setMyState2("a");
        }

    return (
        <div>
            <button onClick={updateMyState}>Disparar userEffect</button>
        </div>
    );
}

export default UseEffect;