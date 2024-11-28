import React from 'react';

const SubsidiosEspecificos: React.FC = () => {
  return (
    <div>
      <h1>Subsidios específicos</h1>
      <h2>Descripción</h2>
      <p>
        Ayudas económicas para cubrir necesidades concretas derivadas de la discapacidad, como movilidad y transporte o asistencia de terceros.
      </p>
      <h2>Requisitos</h2>
      <ul>
        <li>Subsidio de movilidad: discapacidad igual o superior al 33% con dificultades para usar transporte público.</li>
        <li>Subsidio por ayuda de tercera persona: discapacidad igual o superior al 75%.</li>
      </ul>
      <h2>Proceso de solicitud</h2>
      <p>
        Se solicita a través de los servicios sociales municipales, aportando documentación sobre la discapacidad y la situación económica.
      </p>
      <h2>Normativa</h2>
      <p>Regulado por la Ley General de derechos de las personas con discapacidad y su inclusión social.</p>
    </div>
  );
};

export default SubsidiosEspecificos;
