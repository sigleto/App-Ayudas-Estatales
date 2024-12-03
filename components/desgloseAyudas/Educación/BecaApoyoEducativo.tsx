import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorBecaApoyoEducativo: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const BecaApoyoEducativo: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Beca de Apoyo Educativo</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Diseñada para estudiantes con necesidades educativas especiales derivadas 
          de discapacidad, trastornos graves de conducta o altas capacidades.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>• Tener 2 años o más a 31 de diciembre del año anterior para alumnado con discapacidad, trastorno grave de conducta, trastorno grave de la comunicación o del lenguaje o trastorno del espectro autista.</Text>
        <Text style={styles.content}>• Estar escolarizado en un centro específico de educación especial o en un centro ordinario que tenga unidades de educación especial o que esté autorizado para escolarizar a alumnos con necesidades educativas especiales.</Text>
        <Text style={styles.content}>• Tener 6 años o más a 31 de diciembre del año en curso para alumnado con altas capacidades.</Text>
        <Text style={styles.content}>• Estar matriculado en alguno de los estudios para los que se puede pedir esta ayuda.</Text>
        <Text style={styles.content}>• Certificado que acredite la circunstancia especial del menor.</Text>
        <Text style={styles.content}>• No superar los umbrales de renta familiar.</Text>

        <Text style={styles.subtitle}>Tipos de ayudas</Text>
        <Text style={styles.content}>
          Se pueden recibir distintos tipos de ayudas o subsidios, en función de las circunstancias específicas de cada caso.{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.becaseducacion.gob.es/becas-y-ayudas/ayudas-apoyo-educativo/tipos-de-becas.html')}
          >
            AQUÍ
          </Text>{' '}
          podrás consultarlas.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>1. Accede al portal del Ministerio de Educación y rellena el formulario online.</Text>
        <Text style={styles.content}>2. Proporciona certificados médicos o informes psicopedagógicos.</Text>
        <Text style={styles.content}>3. Presenta la solicitud antes de la fecha límite.</Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Basada en la Orden EDU/947/2024 y las actualizaciones anuales del Ministerio.
        </Text>
        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho al bono? Puedes probar nuestro simulador aquí:
        </Text>
        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorBecaApoyoEducativo')} 
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
});

export default BecaApoyoEducativo;
