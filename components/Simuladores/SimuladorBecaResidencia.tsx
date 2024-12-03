import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SimuladorBecaResidencia: React.FC = () => {
  const [matriculado, setMatriculado] = useState<boolean | null>(null);
  const [residenciaLejana, setResidenciaLejana] = useState<boolean | null>(null);
  const [estudiosPresenciales, setEstudiosPresenciales] = useState<boolean | null>(null);
  const [ingresos, setIngresos] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const ingresosNum = parseFloat(ingresos);
    const umbralRenta = 25000; // Umbral de renta familiar aproximado

    if (
      matriculado === null ||
      residenciaLejana === null ||
      estudiosPresenciales === null ||
      isNaN(ingresosNum)
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (
      matriculado &&
      residenciaLejana &&
      estudiosPresenciales &&
      ingresosNum <= umbralRenta
    ) {
      setResultado('Cumples con los requisitos para solicitar la Beca de Residencia.');
    } else {
      setResultado('No cumples con los requisitos para esta beca.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Beca de Residencia</Text>

      <Text>¿Estás matriculado en estudios postobligatorios o universitarios? (Sí: 1, No: 0)</Text>
      <TextInput
        value={matriculado !== null ? (matriculado ? '1' : '0') : ''}
        onChangeText={(text) => setMatriculado(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
        style={styles.input}
      />

      <Text>¿Tu residencia habitual está lejos del centro de estudios? (Sí: 1, No: 0)</Text>
      <TextInput
        value={residenciaLejana !== null ? (residenciaLejana ? '1' : '0') : ''}
        onChangeText={(text) => setResidenciaLejana(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
        style={styles.input}
      />

      <Text>¿Estás cursando estudios presenciales y con matrícula completa? (Sí: 1, No: 0)</Text>
      <TextInput
        value={estudiosPresenciales !== null ? (estudiosPresenciales ? '1' : '0') : ''}
        onChangeText={(text) => setEstudiosPresenciales(text === '1')}
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

      <Button title="Simular" onPress={handleSimulacion} />

      {resultado && <Text style={styles.result}>{resultado}</Text>}
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
    color: '#6c757d',
    textAlign: 'center',
  },
});

export default SimuladorBecaResidencia;
