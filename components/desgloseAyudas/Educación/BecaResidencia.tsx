import React from 'react';

const BecaResidencia: React.FC = () => {
  return (
    <div>
      <h1>Beca de Residencia</h1>
      <section>
        <h2>Descripción</h2>
        <p>
          Ayuda destinada a sufragar los gastos de residencia de estudiantes que cursen 
          estudios lejos de su domicilio familiar.
        </p>
      </section>
      <section>
        <h2>Requisitos</h2>
        <ul>
          <li>Estar matriculado en estudios postobligatorios o universitarios.</li>
          <li>Residencia habitual alejada del centro de estudios.</li>
          <li>No superar el umbral de renta familiar correspondiente.</li>
        </ul>
      </section>
      <section>
        <h2>Proceso de Solicitud</h2>
        <ol>
          <li>Rellenar la solicitud en línea en la sede del Ministerio.</li>
          <li>Aportar un contrato de alquiler o certificado de residencia.</li>
          <li>Completar antes de la fecha límite.</li>
        </ol>
      </section>
      <section>
        <h2>Normativa</h2>
        <p>
          Incluida en las disposiciones generales de las becas estatales, regulada 
          por la Orden EFP/XYZ/2024.
        </p>
      </section>
    </div>
  );
};

export default BecaResidencia;
