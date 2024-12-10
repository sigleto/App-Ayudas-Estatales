import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnuncioInt from '../Anuncios/AnuncioIntersticial';

const SimuladorBonoCultural: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [nacionalidad, setNacionalidad] = useState<string>('');
  const [certificadoDigital, setCertificadoDigital] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const navegacion = useNavigation();

  const handleSimulacion = () => {
    const edadNum = parseInt(edad);

    // Validar las entradas
    if (isNaN(edadNum) || !['S', 'N'].includes(nacionalidad.toUpperCase()) || !['S', 'N'].includes(certificadoDigital.toUpperCase())) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    const esEdadValida = edadNum === 18;
    const esNacionalidadValida = nacionalidad.toUpperCase() === 'S';
    const tieneCertificadoDigital = certificadoDigital.toUpperCase() === 'S';

    if (esEdadValida && esNacionalidadValida && tieneCertificadoDigital) {
      setResultado('Cumples con los requisitos para solicitar el Bono Cultural Joven.');
    } else {
      setResultado('No cumples con los requisitos para el Bono Cultural Joven.');
    }
  };

  React.useEffect(() => {
    Alert.alert(
      'Aviso importante',
      'Este simulador es una herramienta orientativa y no garantiza la concesión del bono. Para información oficial, consulta con el organismo competente.',
      [{ text: 'Entendido' }]
    );
  }, []);

  return (
    <View style={styles.container}>
      <AnuncioInt/>
      <Text style={styles.title}>Simulador Bono Cultural Joven</Text>

      <Text>¿Qué edad tienes? (Introduce un número):</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />

      <Text>¿Tienes nacionalidad española o residencia legal en España? (S/N):</Text>
      <TextInput
        value={nacionalidad}
        onChangeText={setNacionalidad}
        maxLength={1}
        placeholder="Ingresa S o N"
        style={styles.input}
      />

      <Text>¿Cuentas con certificado digital o Cl@ve? (S/N):</Text>
      <TextInput
        value={certificadoDigital}
        onChangeText={setCertificadoDigital}
        maxLength={1}
        placeholder="Ingresa S o N"
        style={styles.input}
      />

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
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0077b6',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#4caf50',
    textAlign: 'center',
    fontWeight: 'bold',
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

export default SimuladorBonoCultural;
