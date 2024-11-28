import React from 'react';

const BecaApoyoEducativo: React.FC = () => {
  return (
    <div>
      <h1>Beca de Apoyo Educativo</h1>
      <section>
        <h2>Descripción</h2>
        <p>
          Diseñada para estudiantes con necesidades educativas especiales derivadas 
          de discapacidad, trastornos graves de conducta o altas capacidades.
        </p>
      </section>
      <section>
        <h2>Requisitos</h2>
        <ul>
          <li>Acreditar una discapacidad igual o superior al 25%.</li>
          <li>Estar matriculado en centros educativos específicos o integradores.</li>
          <li>No superar los umbrales de renta familiar.</li>
        </ul>
      </section>
      <section>
        <h2>Proceso de Solicitud</h2>
        <ol>
          <li>Accede al portal del Ministerio de Educación y rellena el formulario online.</li>
          <li>Proporciona certificados médicos o informes psicopedagógicos.</li>
          <li>Presenta la solicitud antes de la fecha límite.</li>
        </ol>
      </section>
      <section>
        <h2>Normativa</h2>
        <p>
          Basada en la Orden EDU/947/2024 y las actualizaciones anuales del Ministerio.
        </p>
      </section>
    </div>
  );
};

export default BecaApoyoEducativo;
