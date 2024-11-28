import React from 'react';

const BecaGeneral: React.FC = () => {
  return (
    <div>
      <h1>Beca General</h1>
      <section>
        <h2>Descripción</h2>
        <p>
          La Beca General está dirigida a estudiantes de enseñanzas postobligatorias: 
          bachillerato, formación profesional, enseñanzas artísticas y deportivas, 
          idiomas y universitarias.
        </p>
      </section>
      <section>
        <h2>Requisitos</h2>
        <ul>
          <li>Ser ciudadano español o tener residencia legal en España.</li>
          <li>Estar matriculado en un curso completo o número mínimo de asignaturas.</li>
          <li>No superar los umbrales de renta establecidos.</li>
          <li>Alcanzar el rendimiento académico mínimo exigido.</li>
        </ul>
      </section>
      <section>
        <h2>Proceso de Solicitud</h2>
        <ol>
          <li>Accede a la sede electrónica del Ministerio de Educación.</li>
          <li>Rellena el formulario en línea con los datos personales y académicos.</li>
          <li>Adjunta la documentación requerida.</li>
          <li>Envía la solicitud antes del 10 de mayo de 2024.</li>
        </ol>
      </section>
      <section>
        <h2>Normativa</h2>
        <p>
          Regulado por el Real Decreto 1721/2007 y las convocatorias anuales del Ministerio 
          de Educación y Formación Profesional.
        </p>
      </section>
    </div>
  );
};

export default BecaGeneral;
