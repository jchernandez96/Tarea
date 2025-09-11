// import { useState } from 'react'
// App.jsx
import { useState } from 'react';
import Tarea from './tarea/tarea1';
import './App.css';

function App() {
  const [numero, setNumero] = useState(0);

  return (
    <>
      <h1>Contador</h1>
      <h4>{numero}</h4>
      <input type="number" className="form-control mt-4 mb-3" value={numero} onChange={(e) => setNumero(Number(e.target.value))} placeholder="Escribe el número a sumar en el contador" />
      <Tarea dato={numero} setDato={setNumero} />
    </>
  );
}

export default App;