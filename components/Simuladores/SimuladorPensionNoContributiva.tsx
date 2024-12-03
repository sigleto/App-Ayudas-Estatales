import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SimuladorPensionNoContributiva: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [discapacidad, setDiscapacidad] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSubmit = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);
    const discapacidadNum = parseInt(discapacidad);

    if (isNaN(edadNum) || isNaN(ingresosNum) || isNaN(discapacidadNum)) {
      setResultado('Por favor, ingresa todos los datos correctamente.');
      return;
    }

    if (
      edadNum >= 18 &&
      edadNum <= 64 &&
      ingresosNum < 7250.60 &&
      discapacidadNum >= 65
    ) {
      setResultado('Cumples los requisitos para solicitar la pensión no contributiva.');
    } else {
      setResultado('No cumples los requisitos para solicitar la pensión no contributiva.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Pensión No Contributiva</Text>

      <Text>Edad:</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />

      <Text>Ingresos Anuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos"
        style={styles.input}
      />

      <Text>Grado de Discapacidad (%):</Text>
      <TextInput
        value={discapacidad}
        onChangeText={setDiscapacidad}
        keyboardType="numeric"
        placeholder="Ingresa tu grado de discapacidad"
        style={styles.input}
      />

      <Button title="Verificar" onPress={handleSubmit} />

      {resultado && <Text style={styles.result}>{resultado}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e8f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2a9d8f',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
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

export default SimuladorPensionNoContributiva;