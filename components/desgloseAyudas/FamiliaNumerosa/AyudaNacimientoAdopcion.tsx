import React from "react";

const AyudaNacimientoAdopcion: React.FC = () => {
  return (
    <div>
      <h1>Ayuda por Nacimiento o Adopción</h1>

      <section>
        <h2>Descripción</h2>
        <p>
          Esta ayuda está destinada a apoyar económicamente a las familias que han tenido un hijo o han adoptado uno recientemente. Se ofrece como deducción fiscal o abono anticipado.
        </p>
      </section>

      <section>
        <h2>Requisitos</h2>
        <ul>
          <li>Ser padre o madre de un recién nacido o haber adoptado un menor.</li>
          <li>Estar dado de alta en la Seguridad Social o mutualidad equivalente.</li>
          <li>En caso de desempleo, estar recibiendo prestación por desempleo.</li>
        </ul>
      </section>

      <section>
        <h2>Proceso de Solicitud</h2>
        <ol>
          <li>
            Accede al portal de la <a href="https://www.agenciatributaria.es">Agencia Tributaria</a> o solicita la ayuda a través de tu empresa si eliges el abono anticipado.
          </li>
          <li>
            Presenta los documentos que acrediten tu situación (certificado de nacimiento o adopción, documentación laboral).
          </li>
          <li>Completa el formulario correspondiente.</li>
        </ol>
      </section>

      <section>
        <h2>Normativa</h2>
        <p>
          Esta prestación está regulada por la Ley del Impuesto sobre la Renta de las Personas Físicas (IRPF). La normativa específica puede variar según actualizaciones legislativas.
        </p>
      </section>
    </div>
  );
};

export default AyudaNacimientoAdopcion;
