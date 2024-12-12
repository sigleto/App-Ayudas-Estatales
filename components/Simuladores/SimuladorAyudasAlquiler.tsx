import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnuncioInt from '../Anuncios/AnuncioIntersticial';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  InformeAyudasAlquiler: { 
    ingresos: string;
    esFamiliaNumerosa:string;
    gradoDiscapacidad: string;
    rentaAlquiler:string;
    edad:string;
    resultado: string;
  };
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const SimuladorAyudasAlquiler: React.FC = () => {
  const [ingresos, setIngresos] = useState<string>('');
  const [esFamiliaNumerosa, setEsFamiliaNumerosa] = useState<string>(''); // Cambiado para 'S' o 'N'
  const [gradoDiscapacidad, setGradoDiscapacidad] = useState<string>('');
  const [rentaAlquiler, setRentaAlquiler] = useState<string>('');
  const [edad, setEdad] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
   const navigation = useNavigation<NavigationProp>();
  
  const handleSimulacion = () => {
    const ingresosNum = parseFloat(ingresos);
    const rentaAlquilerNum = parseFloat(rentaAlquiler);
    const gradoDiscapacidadNum = parseFloat(gradoDiscapacidad);
    const edadNum = parseInt(edad, 10);
    const iprem = 600; // IPREM mensual aproximado (ejemplo)

    if (
      isNaN(ingresosNum) ||
      isNaN(rentaAlquilerNum) ||
      esFamiliaNumerosa === '' ||
      (gradoDiscapacidad && isNaN(gradoDiscapacidadNum)) ||
      isNaN(edadNum)
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    // Convertir la respuesta 'S' o 'N' a booleano
    const esFamiliaNumerosaBool = esFamiliaNumerosa === 'S';

    let limiteIngresos: number;
    if (esFamiliaNumerosaBool) {
      limiteIngresos =
        gradoDiscapacidadNum >= 33
          ? 5 * iprem
          : 4 * iprem; // Familia numerosa especial o con discapacidad
    } else {
      limiteIngresos = 3 * iprem; // General
    }

    const limiteAlquiler = rentaAlquilerNum <= 600 || rentaAlquilerNum <= 900;

    if (ingresosNum <= limiteIngresos && limiteAlquiler) {
      const porcentajeAyuda =
        edadNum >= 65 ? 50 : rentaAlquilerNum > 600 ? 30 : 40;
      const ayuda = (rentaAlquilerNum * porcentajeAyuda) / 100;
      setResultado(
        `Cumples con los requisitos para la ayuda al alquiler. Cuantía estimada: ${ayuda.toFixed(
          2
        )} € al mes.`
      );
    } else {
      setResultado('No cumples con los requisitos para esta ayuda.');
    }
  };

  React.useEffect(() => {
    Alert.alert(
      'Aviso importante',
      'Este simulador es una herramienta orientativa y no contempla necesariamente todos los requisitos o condiciones específicos aplicables a cada caso particular. Por tanto, el resultado obtenido no es vinculante ni garantiza la concesión de la ayuda.\n\nPara obtener información oficial y confirmar tu situación, es imprescindible consultar con el organismo competente o acudir a las fuentes oficiales correspondientes.',
      [{ text: 'Entendido' }]
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
        <AnuncioInt/>
      <Text style={styles.title}>Simulador Ayudas al Alquiler</Text>

      <Text>Ingresos mensuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos mensuales"
        style={styles.input}
      />

      <Text>¿Eres familia numerosa? (S: Sí, N: No):</Text>
      <TextInput
        value={esFamiliaNumerosa}
        onChangeText={setEsFamiliaNumerosa}
        placeholder="Ingresa 'S' o 'N'"
        style={styles.input}
      />

      <Text>Grado de discapacidad (%):</Text>
      <TextInput
        value={gradoDiscapacidad}
        onChangeText={setGradoDiscapacidad}
        keyboardType="numeric"
        placeholder="Ingresa el porcentaje de discapacidad"
        style={styles.input}
      />

      <Text>Renta mensual del alquiler (€):</Text>
      <TextInput
        value={rentaAlquiler}
        onChangeText={setRentaAlquiler}
        keyboardType="numeric"
        placeholder="Ingresa la renta mensual del alquiler"
        style={styles.input}
      />

      <Text>Edad (años):</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />

      <Button title="Simular" onPress={handleSimulacion} />

    {resultado && (
            <>
              <Text style={styles.result}>{resultado}</Text>
              {resultado.includes('Cumples con los requisitos') && (
                <TouchableOpacity
                  onPress={() => navigation.navigate('InformeAyudasAlquiler', { 
                    ingresos, 
                    esFamiliaNumerosa,
                    gradoDiscapacidad,
                    rentaAlquiler,
                    edad, 
                    resultado 
                  })}
                  style={styles.boton}
                >
                  <Text style={styles.letra}>DESCARGAR INFORME</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={() => navigation.navigate('Home' as never)}
                style={styles.boton}
              >
                <Text style={styles.letra}>VOLVER</Text>
              </TouchableOpacity>
            </>
          )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0077b6',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4caf50',
  },  boton: {
    backgroundColor: '#c13855', // Color de fondo llamativo
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',     
    width: '40%', // Ajusta el ancho del botón
    marginTop: 20,
    height:40,
    fontSize:20,
    fontWeight:'bold',
  },
  letra:{fontSize:16, color:'white',fontWeight:'bold'}
});

export default SimuladorAyudasAlquiler;
