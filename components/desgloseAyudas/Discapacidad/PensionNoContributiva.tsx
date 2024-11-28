import React from 'react';

const PensionNoContributiva: React.FC = () => {
  return (
    <div>
      <h1>Pensión no contributiva de invalidez</h1>
      <h2>Descripción</h2>
      <p>
        Prestación económica dirigida a personas con discapacidad igual o superior al 65% que carecen de ingresos suficientes.
      </p>
      <h2>Requisitos</h2>
      <ul>
        <li>Edad: entre 18 y 64 años.</li>
        <li>Residencia legal en España durante al menos 5 años.</li>
        <li>Ingresos familiares por debajo de los límites establecidos.</li>
      </ul>
      <h2>Proceso de solicitud</h2>
      <p>
        La solicitud se realiza en las oficinas del IMSERSO o de los servicios sociales de cada comunidad autónoma. Se debe presentar documentación médica y económica.
      </p>
      <h2>Normativa</h2>
      <p>Regulada por el Real Decreto Legislativo 1/2013, de 29 de noviembre.</p>
    </div>
  );
};

export default PensionNoContributiva;
