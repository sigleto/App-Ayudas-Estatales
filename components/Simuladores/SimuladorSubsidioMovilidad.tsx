import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SimuladorSubsidioMovilidad: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [discapacidad, setDiscapacidad] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const edadNum = parseInt(edad);
    const discapacidadNum = parseInt(discapacidad);
    const ingresosNum = parseFloat(ingresos);

    if (isNaN(edadNum) || isNaN(discapacidadNum) || isNaN(ingresosNum)) {
      setResultado('Por favor, ingresa todos los datos correctamente.');
      return;
    }

    const iprem = 600 * 12; // IPREM mensual aproximado x 12 meses
    const limiteIngresos = iprem * 0.7; // 70% del IPREM

    if (
      edadNum >= 3 &&
      discapacidadNum >= 33 &&
      ingresosNum <= limiteIngresos
    ) {
      setResultado('Cumples con los requisitos para recibir el subsidio.');
    } else {
      setResultado('No cumples con los requisitos para este subsidio.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Subsidio Movilidad</Text>

      <Text>Edad:</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />

      <Text>Grado de Discapacidad (%):</Text>
      <TextInput
        value={discapacidad}
        onChangeText={setDiscapacidad}
        keyboardType="numeric"
        placeholder="Ingresa el grado de discapacidad"
        style={styles.input}
      />

      <Text>Ingresos Anuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos anuales"
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
    color: '#2a9d8f',
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

export default SimuladorSubsidioMovilidad;
