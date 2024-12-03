import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorPrestacionHijoDiscapacidad: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const PrestacionHijoDiscapacidad = () => {
  const navigation = useNavigation<NavigationProp>();
 

// Sección: Descripción
const SectionDescripcion = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Descripción</Text>
    <Text style={styles.text}>
      Ayuda destinada a familias con hijos menores de 18 años con una discapacidad igual o superior al 33% o mayor de dicha edad con discapacidad igual o superior al 65%.
    </Text>
  </View>
); 

// Sección: Requisitos
const SectionRequisitos = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Requisitos</Text>
    <Text style={styles.text}>
      - Tener un hijo con discapacidad reconocida (mínimo 33%).{"\n"}
      - Residir legalmente en España.{"\n"}
      - No percibir ingresos anuales, de cualquier naturaleza, superiores a los{" "}
      <Text
        style={styles.link}
        onPress={() =>
          Linking.openURL(
            'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10967/27924/2dffb310-1f20-4c9f-ae95-e55c31b6030f'
          )
        }
      >
        límites establecidos
      </Text>{" "}
      por la Seguridad Social para acceder a la ayuda.
    </Text>
  </View>
);

// Sección: Cuantía
const SectionCuantia = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Cuantía</Text>
    <Text style={styles.text}>
      Hijos o menores a cargo, menores de 18 años, con una discapacidad igual o superior al 33%{"\n\n"}
      - 1.000,00 euros anuales por hijo (83,33 euros mensuales).{"\n\n"}
      Hijos mayores de 18 años y con una discapacidad igual o superior al 65%{"\n\n"}
      - 5.647,20 euros anuales por hijo (470,60 euros mensuales).{"\n"}
      Nota: No se exige límite de recursos económicos al tratarse de una persona con discapacidad.
    </Text>
  </View>
);

// Sección: Proceso de Solicitud
const SectionProcesoSolicitud = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
    <Text style={styles.text}>
      1. Dirígete a la Seguridad Social y descarga el{" "}
      <Text
        style={styles.link}
        onPress={() =>
          Linking.openURL(
            'https://www.seg-social.es/wps/portal/wss/internet/Pensionistas/Servicios/34887/40968/41091/bin41083#BIN41083'
          )
        }
      >
        formulario oficial
      </Text>.{"\n"}
      2. Adjunta los documentos requeridos: certificado de discapacidad, libro de familia y documentación económica.{"\n"}
      3. Presenta la solicitud en las oficinas de la Seguridad Social o a través de su portal online.
    </Text>
  </View>
);

// Sección: Normativa
const SectionNormativa = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Normativa</Text>
    <Text style={styles.text}>
      Esta prestación se regula por el Real Decreto Legislativo 8/2015, de 30 de octubre, que aprueba el texto refundido
      de la Ley General de la Seguridad Social.
    </Text>
  </View>
);

return (
  <ScrollView style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.title}>
        Prestación Económica por Hijo a Cargo con Discapacidad
      </Text>

      <SectionDescripcion />
      <SectionRequisitos />
      <SectionCuantia />
      <SectionProcesoSolicitud />
      <SectionNormativa />
      <Text style={styles.content}>
        ¿Quieres saber si tienes derecho al bono? Puedes probar nuestro simulador aquí:
      </Text>
      <Button 
        title="Ir al simulador" 
        onPress={() => navigation.navigate('SimuladorPrestacionHijoDiscapacidad')} 
      />
    </View>
    
  </ScrollView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5f7',
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
    color: '#1d3557',
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
  content: {
    fontSize: 20,
    lineHeight: 26,
    color: '#6c757d',
    textAlign: 'justify',
  },
});

export default PrestacionHijoDiscapacidad;
