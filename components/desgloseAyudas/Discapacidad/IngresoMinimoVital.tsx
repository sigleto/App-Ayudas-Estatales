import React from 'react';

const IngresoMinimoVital: React.FC = () => {
  return (
    <div>
      <h1>Ingreso Mínimo Vital (IMV)</h1>
      <h2>Descripción</h2>
      <p>
        Prestación dirigida a prevenir la pobreza y exclusión social. Incluye un incremento del 22% para personas con discapacidad igual o superior al 65%.
      </p>
      <h2>Requisitos</h2>
      <ul>
        <li>Edad mínima de 23 años (o 18 años en determinados casos).</li>
        <li>Ingresos insuficientes y situación de vulnerabilidad económica.</li>
        <li>Residencia legal en España durante al menos 1 año.</li>
      </ul>
      <h2>Proceso de solicitud</h2>
      <p>
        La solicitud se realiza en la Seguridad Social mediante su plataforma online o en oficinas físicas. Se debe presentar documentación de ingresos y discapacidad.
      </p>
      <h2>Normativa</h2>
      <p>Regulado por el Real Decreto-ley 20/2020, de 29 de mayo.</p>
    </div>
  );
};

export default IngresoMinimoVital;
