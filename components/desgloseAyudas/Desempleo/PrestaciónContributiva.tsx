import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';

const PrestacionContributiva = () => {
  const openSEPEPortal = () => {
    Linking.openURL('https://www.sepe.es/HomeSepe/prestaciones-desempleo/prestacion-contributiva/prestacion-contributiva-mas-de-un-anyo.html');
  };

  const openInfoPDF = () => {
    Linking.openURL('https://drive.google.com/file/d/1e2TtAsTZnnAsYw4cs7mJwU_pxU1x5I21/view?usp=drive_link'); // URL del PDF de hoja informativa
  };

  const openSolicitudPDF = () => {
    Linking.openURL('https://drive.google.com/file/d/1ylmtyS5SJWwHCD-QIzIitfo_dk7oWZEB/view?usp=drive_link'); // URL del PDF del modelo de solicitud
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Prestación Contributiva por Desempleo</Text>

        {/* Descripción */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Descripción</Text>
          <Text style={styles.text}>
            La prestación contributiva por desempleo es una ayuda económica destinada a las personas que han perdido su empleo de manera involuntaria y que cumplen con los requisitos de cotización establecidos. Esta prestación permite garantizar un ingreso temporal mientras el beneficiario busca un nuevo empleo.
          </Text>
        </View>

        {/* Requisitos */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Requisitos</Text>
          <Text style={styles.text}>
            Para acceder a esta prestación, se deben cumplir los siguientes requisitos:
          </Text>
          <Text style={styles.list}>• Haber cotizado al menos 360 días en los últimos seis años.</Text>
          <Text style={styles.list}>• Encontrarse en situación de desempleo de manera involuntaria.</Text>
          <Text style={styles.list}>• Estar inscrito como demandante de empleo en el SEPE.</Text>
          <Text style={styles.list}>• No haber alcanzado la edad de jubilación.</Text>
        </View>

        {/* Proceso de solicitud */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Proceso de Solicitud</Text>
          <Text style={styles.text}>1. Inscribirse como demandante de empleo en el SEPE.</Text>
          <Text style={styles.text}>
            2. Presentar la solicitud dentro de los 15 días hábiles posteriores al cese de la relación laboral.
            Puedes descargar el modelo de solicitud</Text><Text style={styles.link} onPress={openSolicitudPDF}><Text style={styles.link}>AQUÍ</Text></Text>
          <Text style={styles.text}>3. Adjuntar la documentación necesaria: DNI, certificado de empresa, y justificantes de cotización.</Text>
          <Text style={styles.text}>4. El SEPE revisará la solicitud y notificará la resolución.</Text>
        </View>

        {/* Normativa */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Normativa</Text>
          <Text style={styles.text}>
            La prestación contributiva está regulada por el Texto Refundido de la Ley General de la Seguridad Social (Real Decreto Legislativo 8/2015) y sus disposiciones reglamentarias. Puedes consultar más detalles en el{' '}
            <Text style={styles.link} onPress={openSEPEPortal}>
              portal del SEPE
            </Text>.
          </Text>
          <Text style={styles.text}>
            También puedes descargar el siguiente documento relacionado:
          </Text>
          <Text style={styles.link} onPress={openInfoPDF}>
            • Hoja informativa (PDF)
          </Text>
          
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8', // Fondo suave y atractivo
  },
  card: {
    backgroundColor: '#f9f1b9',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2a9d8f',
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1f5ef8',
    marginBottom: 8,
  },
  text: {
    fontSize: 20,
    lineHeight: 26,
    color: '#6c757d',
    textAlign: 'justify',
  },
  list: {
    fontSize: 16,
    lineHeight: 26,
    color: '#6c757d',
    marginLeft: 16,
    marginVertical: 4,
  },
  link: {
    color: '#007AFF', // Color azul para el enlace
    textDecorationLine: 'underline', // Subrayado para simular un enlace
  },
});

export default PrestacionContributiva;
