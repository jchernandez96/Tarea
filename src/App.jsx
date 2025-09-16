// App.jsx
import { useState } from 'react';
import Tarea from './tarea/tarea1';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(0);

  return (
  <div className="d-flex flex-column align-items-center justify-content-center text-center">
    <h1 className="mb-4">Contador</h1>
    <h4 className="mb-4">{contador}</h4>
    <input 
      type="number" 
      className="form-control mt-4 mb-3 text-center mx-auto" 
      style={{maxWidth: '250px'}}
      value={numero} 
      onChange={(e) => setNumero(Number(e.target.value))} 
      placeholder="Escribe el número a sumar"
    />
    <Tarea contador={contador} setContador={setContador} numero={numero} />
  </div>
  );
}

export default App;