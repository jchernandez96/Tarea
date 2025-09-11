import React from 'react';

export default function Tarea({ dato, setDato }) {
  const sumar = () => {
    setDato(dato + dato);
  };

  return (
    <>
      <input type="button" className="btn btn-primary mb-4" onClick={sumar} value="Agregar"/>
    </>
  );
}