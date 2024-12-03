import React from 'react';
import { View, Text, StyleSheet, ScrollView,Linking, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorPensionNoContributiva: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function PensionNoContributiva() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Pensión no contributiva de invalidez</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Prestación económica dirigida a personas con discapacidad igual o superior al 65% que carecen de ingresos suficientes.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Edad: entre 18 y 64 años.{"\n"}
          - Residencia legal en España durante al menos 5 años.{"\n"}
          - Estar afectado de un grado de discapacidad igual o superior al 65%.{"\n"}
          - Ingresos familiares por debajo de los límites establecidos (Existe carencia cuando las rentas o ingresos personales de que se disponga, en cómputo anual, para 2024, sean inferiores a 7.250,60 € anuales.)
        </Text>
        <Text style={styles.subtitle}>Cuantias</Text>
        <Text style={styles.content}>        
        la cuantía de las pensiones de invalidez y jubilación de la Seguridad Social en su modalidad no contributiva, quedando el importe anual para el año 2024 en 7.250,60 € anuales, que se abonan en 12 mensualidades más dos pagas extraordinarias al año.{"\n"}

        La cuantía individual actualizada para cada pensionista se establece a partir del citado importe y en función del número de beneficiarios que vivan en el mismo domicilio, de sus rentas personales y/o de las de su unidad económica de convivencia, no pudiendo ser la cuantía inferior a la mínima del 25% de la establecida.{"\n"}

        Los pensionistas de pensión no contributiva de invalidez cuyo grado de discapacidad sea igual o superior al 75% y acrediten la necesidad del concurso de otra persona para realizar los actos esenciales de la vida, percibirán además un complemento del 50% de los 7.250,60 € anuales, por lo que el importe de ese complemento queda fijado en 3.625,30 € anuales.{"\n"}
        Cuantías básicas para 2024
Cuantía	Anual	Mensual
Íntegra	7.250,60 €	517,90 €
Mínima 25%	1.812,65 €	129,48 €
Íntegra más
Incremento 50%	10.875,90 €	776,85 €
        </Text>
        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La solicitud se realiza en las oficinas del IMSERSO o de los servicios sociales de cada  <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://imserso.es/pnc-prestaciones-subvenciones/donde-solicitar-pension-no-contributiva-pnc')}>
            comunidad autónoma
          </Text>. Se debe presentar documentación médica y económica.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulada por el Real Decreto Legislativo 1/2013, de 29 de noviembre.
        </Text>
        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho al bono? Puedes probar nuestro simulador aquí:
        </Text>
        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorPensionNoContributiva')} 
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
  link: {
    color: '#2a9d8f',
    textDecorationLine: 'underline',
  },
});
