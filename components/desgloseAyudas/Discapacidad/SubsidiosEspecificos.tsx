import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorSubsidioMovilidad: undefined;
  SimuladorAsistenciaSanitaria:undefined
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;



export default function SubsidiosEspecificos() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Subsidios Específicos</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ayudas económicas para cubrir necesidades concretas derivadas de la discapacidad, como movilidad, transporte o asistencia de terceros.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          <Text style={styles.bold}>Subsidio de movilidad y compensación por gastos de transporte:</Text>{"\n"}
          - No estar incluido en el sistema de la Seguridad Social por no desarrollar actividad laboral.{"\n"}
          - No ser beneficiario de otras ayudas similares con igual o superior cuantía.{"\n"}
          - No superar el 70% del Indicador Público de Renta de Efectos Múltiples (IPREM) anual, con un incremento del 10% por cada miembro adicional de la unidad familiar, hasta un máximo del 100%.{"\n"}
          - Compatible con pensiones no contributivas si los recursos personales no las superan.{"\n"}
          - Tener tres años o más.{"\n"}
          - Grado de discapacidad igual o superior al 33%.{"\n"}
          - Grave dificultad para usar transportes colectivos y capacidad para desplazarse fuera del hogar.{"\n"}
          - Si reside en un centro, salir al menos diez fines de semana al año.{"\n\n"}
          <Text style={styles.bold}>Asistencia sanitaria y prestación farmacéutica:</Text>{"\n"}
          - No estar incluido en el sistema de la Seguridad Social por no desarrollar actividad laboral.{"\n"}
          - No tener derecho a la prestación sanitaria del sistema de Seguridad Social.{"\n"}
          - Grado de discapacidad igual o superior al 33%.{"\n"}
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La gestión y reconocimiento del derecho a estas ayudas corresponde a las{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL('https://imserso.es/pnc-prestaciones-subvenciones/donde-solicitar-pension-no-contributiva-pnc')
            }>
            Comunidades Autónomas
          </Text>
          , que tienen transferidas las funciones del Instituto de Mayores y Servicios Sociales (Imserso). En Ceuta y Melilla, el proceso se realiza directamente a través del Imserso.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Reguladas por la Ley General de Derechos de las Personas con Discapacidad y su Inclusión Social.
        </Text>
        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho al bono? Puedes probar nuestro simulador aquí:
        </Text>
        <Button 
          title="Simulador subs. Movilidad" 
          onPress={() => navigation.navigate('SimuladorSubsidioMovilidad')} 
        />
        <Button 
          title="Simulador asist. Sanitaria" 
          onPress={() => navigation.navigate('SimuladorAsistenciaSanitaria')} 
        />
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
  bold: {
    fontWeight: 'bold',
    color: '#264653',    
  },
  link: {
    color: '#2a9d8f',
    textDecorationLine: 'underline',
  },
});
