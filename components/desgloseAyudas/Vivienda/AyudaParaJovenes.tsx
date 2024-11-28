import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AyudasParaJovenes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayudas para Jóvenes</Text>

      <Text style={styles.subtitle}>Descripción</Text>
      <Text style={styles.content}>
        Ayudas para jóvenes menores de 35 años que desean adquirir una vivienda habitual y permanente en municipios con menos de 10,000 habitantes. Esta ayuda puede cubrir hasta el 20% del precio de la vivienda con un máximo de 10,800 €.
      </Text>

      <Text style={styles.subtitle}>Requisitos</Text>
      <Text style={styles.content}>
        - Ser menor de 35 años.{"\n"}
        - No tener propiedades en España.{"\n"}
        - Ingresos anuales no superiores a tres veces el IPREM.
      </Text>

      <Text style={styles.subtitle}>Proceso de Solicitud</Text>
      <Text style={styles.content}>
        Las solicitudes deben gestionarse en las oficinas de vivienda de cada comunidad autónoma, adjuntando documentación personal, fiscal y de la vivienda.
      </Text>

      <Text style={styles.subtitle}>Normativa</Text>
      <Text style={styles.content}>
        Plan Estatal de Vivienda 2022-2025 (BOE-A-2021-19809).
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  content: { fontSize: 16, lineHeight: 24, color: '#555' },
});
