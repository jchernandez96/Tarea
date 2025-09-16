// App.jsx
import { useState } from 'react';
import Tarea1 from './tarea/tarea1';
import Tarea2 from './tarea/tarea2';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(0);
  const [colorContador, setColorContador] = useState('#3498db');

  return (
  <div className="d-flex flex-column align-items-center justify-content-center text-center">
    <h1 className="mb-4" style={{ color: colorContador }}>Contador</h1>
    <h4 className="mb-4">{contador}</h4>
    <input 
      type="number" 
      className="form-control mt-4 mb-3 text-center mx-auto" 
      style={{maxWidth: '250px'}}
      value={numero} 
      onChange={(e) => setNumero(Number(e.target.value))} 
      placeholder="Escribe el número a sumar"
    />
    <Tarea1 contador={contador} setContador={setContador} numero={numero} />
    <h2 className="mb-4 mt-4">Color a Cambiar</h2>
    <Tarea2 setColorContador={setColorContador} />
  </div>
  );
}

export default App;