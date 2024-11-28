import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PrestacionContributiva = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Prestación Contributiva por Desempleo</Text>

      {/* Descripción */}
      <Text style={styles.subtitle}>Descripción</Text>
      <Text style={styles.text}>
        La prestación contributiva por desempleo es una ayuda económica destinada a las personas que han perdido su empleo de manera involuntaria y que cumplen con los requisitos de cotización establecidos. Esta prestación permite garantizar un ingreso temporal mientras el beneficiario busca un nuevo empleo.
      </Text>

      {/* Requisitos */}
      <Text style={styles.subtitle}>Requisitos</Text>
      <Text style={styles.text}>
        Para acceder a esta prestación, se deben cumplir los siguientes requisitos:
      </Text>
      <Text style={styles.list}>
        - Haber cotizado al menos 360 días en los últimos seis años.
      </Text>
      <Text style={styles.list}>
        - Encontrarse en situación de desempleo de manera involuntaria.
      </Text>
      <Text style={styles.list}>
        - Estar inscrito como demandante de empleo en el SEPE.
      </Text>
      <Text style={styles.list}>
        - No haber alcanzado la edad de jubilación.
      </Text>

      {/* Proceso de solicitud */}
      <Text style={styles.subtitle}>Proceso de Solicitud</Text>
      <Text style={styles.text}>
        1. Inscribirse como demandante de empleo en el SEPE.
      </Text>
      <Text style={styles.text}>
        2. Presentar la solicitud dentro de los 15 días hábiles posteriores al cese de la relación laboral.
      </Text>
      <Text style={styles.text}>
        3. Adjuntar la documentación necesaria: DNI, certificado de empresa, y justificantes de cotización.
      </Text>
      <Text style={styles.text}>
        4. El SEPE revisará la solicitud y notificará la resolución.
      </Text>

      {/* Normativa */}
      <Text style={styles.subtitle}>Normativa</Text>
      <Text style={styles.text}>
        La prestación contributiva está regulada por el Texto Refundido de la Ley General de la Seguridad Social (Real Decreto Legislativo 8/2015) y sus disposiciones reglamentarias. Puedes consultar más detalles en el portal del SEPE.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#555',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  list: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginLeft: 16,
    marginVertical: 4,
  },
});

export default PrestacionContributiva;
