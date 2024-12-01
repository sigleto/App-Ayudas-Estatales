import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

export default function IngresoMinimoVital() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ingreso Mínimo Vital (IMV)</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
        El Ingreso Mínimo Vital es una prestación dirigida a prevenir el riesgo de pobreza y exclusión social de las personas que viven solas o están integradas en una unidad de convivencia y carecen de recursos económicos básicos para cubrir sus necesidades básicas.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Edad mínima de 23 años (o 18 años en determinados casos).{"\n"}
          - Ingresos insuficientes y situación de vulnerabilidad económica.{"\n"}
          - Residencia legal en España durante al menos 1 año.{"\n"}
          {"\n"}
          Para comprobar si cumple los requisitos, puede acceder a este{' '}
          <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://imv.seg-social.es/')}>
            simulador de la Seguridad Social
          </Text>.
        </Text>

        <Text style={styles.subtitle}>Cuantias</Text>
        <Text style={styles.content}>
        La cuantía del ingreso mínimo vital (IMV) se calcula como la diferencia entre la renta garantizada y los ingresos, siendo al menos 10 € mensuales. En 2024, la renta garantizada es de 604,21 € para un beneficiario individual, con incrementos según discapacidad (22 %) o número de miembros en la unidad de convivencia (máximo 1.329,27 €). Unidades monoparentales tienen un complemento del 22 %, alcanzando hasta 1.462,20 €. Se aplica un extra del 22 % si hay una persona con discapacidad ≥65 %.
        </Text>
        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La solicitud se realiza en la Seguridad Social mediante su plataforma online o en oficinas físicas. Se debe presentar documentación de ingresos y discapacidad.Si desea hacelo online puede acceder a través de este {' '}
          <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://sede.seg-social.gob.es/wps/portal/sede/sede/Ciudadanos/familia/270420inss_sinc')}>
            enlace
          </Text>.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulado por el Real Decreto-ley 20/2020, de 29 de mayo.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8', // Fondo suave y amigable
  },
  card: {
    backgroundColor: '#ffffff',
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#264653',
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    lineHeight: 26,
    color: '#6c757d',
    textAlign: 'justify',
  },
  link: {
    color: '#2a9d8f',
    textDecorationLine: 'underline',
  },
});

