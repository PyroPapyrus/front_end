import './BotaoContador.css';
import Button from '../components/Button';
import Contador from '../components/Contador';


function BotaoContador() {

  const handleCliqueButon = () => {
    console.log("Botão acionado")
  }

  const handleCliqueButonDos = () => {
    console.log("Outro Buton acionado")
  }

  return (
    <div>
      <h1 className='title'>Primeiro projeto React
      </h1>
      <h3>Começando a criar componentes</h3>
      <Button texto="clique no Buton" onClickButton={handleCliqueButon}/>
      <Button texto="ou nesse" onClickButton={handleCliqueButonDos}/>
      <Contador/>

    </div>
  );
}

export default BotaoContador;
