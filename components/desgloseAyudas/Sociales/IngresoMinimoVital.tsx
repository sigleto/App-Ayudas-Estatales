import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  SimuladorIngresoMinimoVital: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function IngresoMinimoVital() {
  const navigation = useNavigation<NavigationProp>();

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
          - La unidad de convivencia debe estar formada desde hace seis meses.{"\n"}
          Para comprobar si cumple los requisitos, puede acceder a este{' '}
          <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://imv.seg-social.es/')}>
            simulador de la Seguridad Social
          </Text>.
        </Text>

        <Text style={styles.subtitle}>Cuantías</Text>
        <Text style={styles.content}>
          La cuantía del ingreso mínimo vital (IMV) se establece en **658,59 euros mensuales** (7.903,07 euros anuales) para un adulto en 2025.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La solicitud se realiza en la Seguridad Social mediante su plataforma online o en oficinas físicas. Puede hacerlo a través de la Sede Electrónica de la Seguridad Social, tanto con certificado electrónico como sin él.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulado por el Real Decreto-ley 20/2020, de 29 de mayo, y dentro del marco del Plan de Recuperación.
        </Text>

        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorIngresoMinimoVital')} 
        />
      </View>
    </ScrollView>
  );
}

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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1f5ef8',
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    fontSize: 20,
    lineHeight: 26,
    color: '#6c757d',
    textAlign: 'justify',
  },
  link: {
    color: '#2a9d8f',
    textDecorationLine: 'underline',
  },
});
