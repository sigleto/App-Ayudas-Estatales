import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SimuladorBecaApoyoEducativo: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [escolarizado, setEscolarizado] = useState<boolean | null>(null);
  const [certificado, setCertificado] = useState<boolean | null>(null);
  const [ingresos, setIngresos] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);

    if (
      isNaN(edadNum) ||
      escolarizado === null ||
      certificado === null ||
      isNaN(ingresosNum)
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    const umbralRenta = 15000; // Umbral de renta familiar aproximado

    if (
      ((edadNum >= 2 && edadNum <= 5) || (edadNum >= 6)) &&
      escolarizado &&
      certificado &&
      ingresosNum <= umbralRenta
    ) {
      setResultado('Cumples con los requisitos para solicitar la beca.');
    } else {
      setResultado('No cumples con los requisitos para esta beca.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Beca Apoyo Educativo</Text>

      <Text>Edad del estudiante (años):</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa la edad del estudiante"
        style={styles.input}
      />

      <Text>¿Está escolarizado en un centro adecuado? (Sí: 1, No: 0)</Text>
      <TextInput
        value={escolarizado !== null ? (escolarizado ? '1' : '0') : ''}
        onChangeText={(text) => setEscolarizado(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
        style={styles.input}
      />

      <Text>¿Cuenta con el certificado requerido? (Sí: 1, No: 0)</Text>
      <TextInput
        value={certificado !== null ? (certificado ? '1' : '0') : ''}
        onChangeText={(text) => setCertificado(text === '1')}
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

export default SimuladorBecaApoyoEducativo;
