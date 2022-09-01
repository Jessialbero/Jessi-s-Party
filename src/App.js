import './App.css';
import { GiPartyFlags } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section class="header">
        <GiPartyFlags style={{color: '#9720bf', fontSize: '50px'}} />
        <h1>Jessi´s Party</h1>
          <h3>Este año mi cumple se dividirá en dos celebraciones </h3>
            <div className="texto"> 
              <p>Puedes acompañarme a un Scape Room, puedes brindar conmigo en CheBonche </p>
              <p>¡O mejor aún, puedes venir a las dos!  </p>
        </div>
                <a className="btn-bgstroke" href='https://forms.gle/6MLhXb8dgoEc7HRa7'>Juego de Escape </a>
                <a className="btn-bgstroke" href='https://forms.gle/aGxdPk5Kgbh9McN19'>Che Bonche </a>
                  <p className='PD'>Por fa selecciona a dónde me acompañarás </p>
        </section>
      </header>
    </div>
  );
}

export default App;
