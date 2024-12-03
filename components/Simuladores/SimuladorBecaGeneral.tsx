import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

const SimuladorBecaGeneral: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [ciudadania, setCiudadania] = useState<boolean | null>(null);
  const [matriculado, setMatriculado] = useState<boolean | null>(null);
  const [ingresos, setIngresos] = useState<string>('');
  const [rendimiento, setRendimiento] = useState<boolean | null>(null);
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);
    const umbralRenta = 20000; // Umbral de renta aproximado

    if (
      isNaN(edadNum) ||
      edadNum < 16 ||
      ciudadania === null ||
      matriculado === null ||
      rendimiento === null ||
      isNaN(ingresosNum)
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (
      ciudadania &&
      matriculado &&
      ingresosNum <= umbralRenta &&
      rendimiento
    ) {
      setResultado('Cumples con los requisitos para solicitar la Beca General.');
    } else {
      setResultado('No cumples con los requisitos para esta beca.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Simulador Beca General</Text>

      <Text>Edad del estudiante (años):</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa la edad del estudiante"
        style={styles.input}
      />

      <Text>¿Es ciudadano español o tiene residencia legal? (Sí: 1, No: 0)</Text>
      <TextInput
        value={ciudadania !== null ? (ciudadania ? '1' : '0') : ''}
        onChangeText={(text) => setCiudadania(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
        style={styles.input}
      />

      <Text>¿Está matriculado en un curso completo o mínimo de asignaturas? (Sí: 1, No: 0)</Text>
      <TextInput
        value={matriculado !== null ? (matriculado ? '1' : '0') : ''}
        onChangeText={(text) => setMatriculado(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
        style={styles.input}
      />

      <Text>Ingresos familiares (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa los ingresos familiares"
        style={styles.input}
      />

      <Text>¿Cumple con el rendimiento académico mínimo exigido? (Sí: 1, No: 0)</Text>
      <TextInput
        value={rendimiento !== null ? (rendimiento ? '1' : '0') : ''}
        onChangeText={(text) => setRendimiento(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
        style={styles.input}
      />

      <Button title="Simular" onPress={handleSimulacion} />

      {resultado && <Text style={styles.result}>{resultado}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0056b3',
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
  },
});

export default SimuladorBecaGeneral;
