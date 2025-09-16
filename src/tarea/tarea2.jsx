import React from 'react'

export default function Tarea2({ setColorContador }) {
  const colores = [
    { nombre: 'Azul', valor: '#3498db' },
    { nombre: 'Rojo', valor: '#e74c3c' },
    { nombre: 'Verde', valor: '#2ecc71' },
    { nombre: 'Amarillo', valor: '#f1c40f' },
    { nombre: 'Morado', valor: '#9b59b6' },
    { nombre: 'Naranja', valor: '#e67e22' }
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {colores.map((color, index) => (
        <button
          key={index}
          className="btn btn-outline-primary"
          style={{ 
            backgroundColor: color.valor, 
            color: 'white',
            border: 'none',
            minWidth: '100px'
          }}
          onClick={() => setColorContador(color.valor)}
        >
          {color.nombre}
        </button>
      ))}
    </div>
  );
}