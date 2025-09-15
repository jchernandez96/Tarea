// App.jsx
import { useState } from 'react';
import Tarea from './tarea/tarea1';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(0);

  return (
    <>
      <h1>Contador</h1>
      <h4>{contador}</h4>
      <input type="number" className="form-control mt-4 mb-3" value={numero} onChange={(e) => setNumero(Number(e.target.value))} placeholder="Escribe el número a sumar"/>
      <Tarea contador={contador} setContador={setContador} numero={numero} />
    </>
  );
}

export default App;