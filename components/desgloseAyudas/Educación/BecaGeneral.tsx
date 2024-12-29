import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  SimuladorBecaGeneral: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BecaGeneral: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Beca General MEC 2024/2025</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          La Beca General del Ministerio de Educación y Formación Profesional está dirigida a estudiantes de enseñanzas postobligatorias: bachillerato, formación profesional, enseñanzas artísticas y deportivas, idiomas y estudios universitarios.
        </Text>

        <Text style={styles.subtitle}>Requisitos Generales</Text>
        <Text style={styles.content}>
          - Tener nacionalidad española o de un estado miembro de la Unión Europea[1].
          - No poseer un título igual o superior al de los estudios para los que se solicita la beca[1].
          - Estar matriculado en un curso completo o en el mínimo de créditos exigidos.
          - Cumplir con los requisitos económicos y académicos establecidos.
        </Text>

        <Text style={styles.subtitle}>Requisitos Académicos</Text>
        <Text style={styles.content}>
          - Para 1º de Bachillerato: Nota mínima de 5 en 4º de ESO[1].
          - Para 1º de FP de Grado Medio o Básico: Estar matriculado[1].
          - Para 1º de FP de Grado Superior: Nota mínima de 5 en 2º de Bachillerato, ciclo medio o prueba de acceso[1].
          - Para Universidad (1º curso de grado): Nota mínima de 5 en el acceso a la universidad[1].
          - Para Universidad (2º curso o posteriores en enseñanzas técnicas y ciencias): Superar el 65% de los créditos matriculados el año anterior[1].
        </Text>

        <Text style={styles.subtitle}>Cuantías</Text>
        <Text style={styles.content}>
          Las cuantías varían según el tipo de estudios, la renta familiar y otras circunstancias. Incluyen componentes fijos y variables, como beca básica, cuantía ligada a la renta, cuantía ligada a la residencia y cuantía ligada a la excelencia académica[3].
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          1. Accede a la <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://sede.educacion.gob.es/portada.html')}>
            Sede Electrónica
          </Text> del Ministerio de Educación.
          2. Rellena el formulario en línea con los datos personales y académicos.
          3. Adjunta la documentación requerida.
          4. Envía la solicitud dentro del plazo establecido (generalmente hasta mayo del año correspondiente).
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulado por el Real Decreto 1721/2007 y las convocatorias anuales del Ministerio de Educación y Formación Profesional.
        </Text>

        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho a la beca? Prueba nuestro simulador:
        </Text>
        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorBecaGeneral')} 
        />
      </View>
    </ScrollView>
  );
};



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
  bold: {
    fontWeight: 'bold',
  },
});

export default BecaGeneral;