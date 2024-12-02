import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SimuladorPrestacionHijoDiscapacidad: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [discapacidad, setDiscapacidad] = useState<string>('');
  const [residencia, setResidencia] = useState<boolean | null>(null);
  const [ingresos, setIngresos] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const edadNum = parseInt(edad, 10);
    const discapacidadNum = parseFloat(discapacidad);
    const ingresosNum = parseFloat(ingresos);
    const limiteIngresos = 15000; // Límite aproximado de ingresos anuales para menores de 18 años.

    if (
      isNaN(edadNum) ||
      isNaN(discapacidadNum) ||
      residencia === null ||
      (edadNum < 18 && isNaN(ingresosNum))
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (edadNum < 18 && discapacidadNum >= 33 && residencia && ingresosNum <= limiteIngresos) {
      setResultado(
        'Cumples los requisitos para la prestación. Cuantía estimada: 1.000,00 € anuales (83,33 € mensuales).'
      );
    } else if (edadNum >= 18 && discapacidadNum >= 65 && residencia) {
      setResultado(
        'Cumples los requisitos para la prestación. Cuantía estimada: 5.647,20 € anuales (470,60 € mensuales).'
      );
    } else {
      setResultado('No cumples con los requisitos para esta prestación.');
    }
  };

  return (
    <View style={styles.container}>
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

      <Text>¿Resides legalmente en España? (Sí: 1, No: 0)</Text>
      <TextInput
        value={residencia !== null ? (residencia ? '1' : '0') : ''}
        onChangeText={(text) => setResidencia(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
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

      {resultado && <Text style={styles.result}>{resultado}</Text>}
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
});

export default SimuladorPrestacionHijoDiscapacidad;
