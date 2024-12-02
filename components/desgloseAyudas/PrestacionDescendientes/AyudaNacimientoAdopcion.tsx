import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';

const AyudaNacimientoAdopcion = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* Título principal */}
        <Text style={styles.title}>Ayuda por Nacimiento o Adopción</Text>

        {/* Sección: Descripción */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Esta ayuda supone una prestación económica por nacimiento o adopción de hijo, en supuestos de familias numerosas, monoparentales y en los casos de madres o padres con discapacidad.
          </Text>
        </View>

        {/* Sección: Requisitos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          <Text style={styles.text}>
            - Residan legalmente en territorio español.{"\n"}
            - No perciban ingresos anuales, de cualquier naturaleza, superiores a los límites establecidos anualmente en la correspondiente Ley de Presupuestos Generales del Estado.{"\n"}
            - En los supuestos de convivencia, si la suma de los ingresos de los progenitores o adoptantes superase los límites establecidos, no se reconocerá la condición de beneficiario a ninguno de ellos.{"\n"}
            - No tengan derecho a prestaciones de esta misma naturaleza en cualquier otro régimen público de protección social.
          </Text>
        </View>

        {/* Sección: Cuantía */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuantía</Text>
          <Text style={styles.text}>
            La prestación se abona en un pago único, cuya cuantía asciende a 1.000,00 euros, siempre que los ingresos del beneficiario no rebasen el límite establecido.
          </Text>
        </View>

        {/* Sección: Proceso de Solicitud */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
          <Text style={styles.text}>
            El procedimiento se iniciará previa presentación ante el INSS de la correspondiente{" "}
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  'https://www.seg-social.es/wps/portal/wss/internet/Pensionistas/Servicios/34887/40968/41091/bin41083#BIN41083'
                )
              }
            >
              solicitud
            </Text>
            , aportando los documentos necesarios para la acreditación de las circunstancias determinantes del derecho.
          </Text>
        </View>

        {/* Sección: Normativa */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            Esta prestación está regulada por la Ley del Impuesto sobre la Renta de las Personas Físicas (IRPF). La normativa específica puede variar según actualizaciones legislativas.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8',
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
    textAlign: 'center',
    color: '#2a9d8f',
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
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
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default AyudaNacimientoAdopcion;
