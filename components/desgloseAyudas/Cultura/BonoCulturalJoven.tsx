import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button,Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  SimuladorBonoCultural: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BonoCulturalJoven: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bono Cultural Joven</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          El Bono Cultural Joven es una ayuda directa de 400€ para jóvenes que cumplen 18 años durante el año de publicación de la convocatoria. Más de 500.000 jóvenes en España podrán beneficiarse de este programa, con una partida de 210 millones de euros incluida en los Presupuestos Generales del Estado 2023.
        </Text>

        <Text style={styles.subtitle}>Objetivo</Text>
        <Text style={styles.content}>
          El programa busca tres objetivos principales: 
        </Text>
        <Text style={styles.content}>
          • Impulsar el acceso a la cultura y generar hábitos de consumo cultural en la juventud.
        </Text>
        <Text style={styles.content}>
          • Revitalizar y dinamizar el sector cultural tras los efectos de la pandemia.
        </Text>

        <Text style={styles.subtitle}>¿En qué se puede gastar?</Text>
        <Text style={styles.content}>• 200€ para artes en vivo, patrimonio cultural y artes audiovisuales.</Text>
        <Text style={styles.content}>• 100€ para productos culturales en soporte físico.</Text>
        <Text style={styles.content}>• 100€ para consumo digital o en línea.</Text>

        <Text style={styles.subtitle}>Funcionamiento</Text>
        <Text style={styles.content}>
          El Bono Cultural Joven es una tarjeta prepago virtual que podrás usar en empresas y entidades culturales adheridas. Funciona durante 12 meses tras su concesión.
        </Text>
        <Text style={styles.content}>
          Las compras deben estar dentro de las categorías autorizadas y es obligatorio subir los tickets de compra a la app del bono.
        </Text>
        <Text style={styles.content}>
          Puedes encontrar todas las entidades adheridas al bono cultural <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://beneficiarios.2024.bonoculturajoven.gob.es/entidades-adheridas')}>
            AQUÍ
          </Text>{"\n"}
        </Text>

        <Text style={styles.subtitle}>Aspectos importantes</Text>
        <Text style={styles.content}>
          • No incluye productos como libros de texto, equipos electrónicos, ni productos de gastronomía o artesanía.
        </Text>
        <Text style={styles.content}>
          • Si no tienes saldo suficiente, puedes completar el pago con otros métodos.
        </Text>
        <Text style={styles.content}>
          • La tarjeta no permite devoluciones de dinero, solo cambios por productos equivalentes.
        </Text>

        <Text style={styles.subtitle}>Plazos y excepciones</Text>
        <Text style={styles.content}>
          • El plazo de solicitud de 2024 ha finalizado. Sin embargo, se ha reabierto para jóvenes nacidos en 2006 residentes en municipios afectados por la DANA.
        </Text>
        <Text style={styles.content}>
          • Las tarjetas de 2023 con caducidad entre octubre y diciembre de 2024 han sido extendidas hasta marzo de 2025 para estos beneficiarios.
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si puedes beneficiarte del Bono Cultural Joven? Prueba nuestro simulador:
        </Text>
        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorBonoCultural')} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  card: {
    backgroundColor: '#fff7e6',
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
    color: '#4a90e2',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#e67e22',
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    fontSize: 20,
    lineHeight: 26,
    color: '#2c3e50',
    textAlign: 'justify',
  },link: {
    color: '#2a9d8f',
    textDecorationLine: 'underline',
  },
});

export default BonoCulturalJoven;
