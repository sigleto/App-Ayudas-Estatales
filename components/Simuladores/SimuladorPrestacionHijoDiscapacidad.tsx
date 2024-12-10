import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnuncioInt from '../Anuncios/AnuncioIntersticial';


const SimuladorPrestacionHijoDiscapacidad: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [discapacidad, setDiscapacidad] = useState<string>('');
  const [residencia, setResidencia] = useState<string>(''); // 'S' o 'N'
  const [ingresos, setIngresos] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const navegacion = useNavigation();

  const handleSimulacion = () => {
    const edadNum = parseInt(edad, 10);
    const discapacidadNum = parseFloat(discapacidad);
    const ingresosNum = parseFloat(ingresos);
    const limiteIngresos = 15000; // Límite aproximado de ingresos anuales para menores de 18 años.
    const residenciaBool = residencia.toUpperCase() === 'S';

    if (
      isNaN(edadNum) ||
      isNaN(discapacidadNum) ||
      (residencia.toUpperCase() !== 'S' && residencia.toUpperCase() !== 'N') ||
      (edadNum < 18 && isNaN(ingresosNum))
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (edadNum < 18 && discapacidadNum >= 33 && residenciaBool && ingresosNum <= limiteIngresos) {
      setResultado(
        'Cumples los requisitos para la prestación. Cuantía estimada: 1.000,00 € anuales (83,33 € mensuales).'
      );
    } else if (edadNum >= 18 && discapacidadNum >= 65 && residenciaBool) {
      setResultado(
        'Cumples los requisitos para la prestación. Cuantía estimada: 5.647,20 € anuales (470,60 € mensuales).'
      );
    } else {
      setResultado('No cumples con los requisitos para esta prestación.');
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
    <View style={styles.container}>
        <AnuncioInt/>
      <Text style={styles.title}>Simulador Prestación por Hijo con Discapacidad</Text>

      <Text>Edad del hijo:</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa la edad en años"
        style={styles.input}
      />

      <Text>Porcentaje de discapacidad (%):</Text>
      <TextInput
        value={discapacidad}
        onChangeText={setDiscapacidad}
        keyboardType="numeric"
        placeholder="Ingresa el porcentaje de discapacidad"
        style={styles.input}
      />

      <Text>¿Resides legalmente en España? (S/N):</Text>
      <TextInput
        value={residencia}
        onChangeText={setResidencia}
        placeholder="Escribe 'S' o 'N'"
        style={styles.input}
      />

      {parseInt(edad, 10) < 18 && (
        <>
          <Text>Ingresos anuales (€):</Text>
          <TextInput
            value={ingresos}
            onChangeText={setIngresos}
            keyboardType="numeric"
            placeholder="Ingresa los ingresos anuales"
            style={styles.input}
          />
        </>
      )}

      <Button title="Simular" onPress={handleSimulacion} />

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          <TouchableOpacity
            onPress={() => navegacion.navigate('Home' as never)}
            style={styles.boton}
          >
            <Text style={styles.letra}>VOLVER</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
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
    color: '#28a745',
  },
  boton: {
    backgroundColor: '#c13855',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '40%',
    marginTop: 20,
    height: 40,
  },
  letra: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SimuladorPrestacionHijoDiscapacidad;
