import React from "react";

const PrestacionHijoDiscapacidad: React.FC = () => {
  return (
    <div>
      <h1>Prestación Económica por Hijo a Cargo con Discapacidad</h1>

      <section>
        <h2>Descripción</h2>
        <p>
          Ayuda destinada a familias con hijos menores de 18 años o mayores con un grado de discapacidad igual o superior al 33 %. Se concede como prestación económica mensual.
        </p>
      </section>

      <section>
        <h2>Requisitos</h2>
        <ul>
          <li>Tener un hijo con discapacidad reconocida (mínimo 33 %).</li>
          <li>Residir legalmente en España.</li>
          <li>
            Cumplir con los límites de ingresos establecidos por la Seguridad Social para acceder a la ayuda.
          </li>
        </ul>
      </section>

      <section>
        <h2>Proceso de Solicitud</h2>
        <ol>
          <li>
            Dirígete a la <a href="https://www.seg-social.es">Seguridad Social</a> y descarga el formulario oficial.
          </li>
          <li>
            Adjunta los documentos requeridos: certificado de discapacidad, libro de familia y documentación económica.
          </li>
          <li>
            Presenta la solicitud en las oficinas de la Seguridad Social o a través de su portal online.
          </li>
        </ol>
      </section>

      <section>
        <h2>Normativa</h2>
        <p>
          Esta prestación se regula por el Real Decreto Legislativo 8/2015, de 30 de octubre, que aprueba el texto refundido de la Ley General de la Seguridad Social.
        </p>
      </section>
    </div>
  );
};

export default PrestacionHijoDiscapacidad;
