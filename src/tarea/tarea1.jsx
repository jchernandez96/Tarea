// tarea1.jsx
import React from 'react';

export default function Tarea({ contador, setContador, numero }) {
  const sumar = () => {
    setContador(contador + numero);
  };

  return (
    <>
      <input type="button" className="btn btn-primary mb-4" onClick={sumar} value="Agregar" />
    </>
  );
}