import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SimuladorAyudaJovenesAlquiler: React.FC = () => {
  const [ingresos, setIngresos] = useState<string>('');
  const [alquiler, setAlquiler] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const ingresosNum = parseFloat(ingresos);
    const alquilerNum = parseFloat(alquiler);

    if (isNaN(ingresosNum) || isNaN(alquilerNum)) {
      setResultado('Por favor, ingresa valores válidos para ingresos y alquiler.');
      return;
    }

    if (ingresosNum <= 3 * 6000 && alquilerNum <= 600) {
      const ayuda = alquilerNum * 0.5;
      setResultado(`Cumples los requisitos. Ayuda estimada: ${ayuda.toFixed(2)} € mensuales.`);
    } else if (ingresosNum <= 3 * 6000 && alquilerNum > 600 && alquilerNum <= 900) {
      const ayuda = 300 + (alquilerNum - 600) * 0.3;
      setResultado(`Cumples los requisitos. Ayuda estimada: ${ayuda.toFixed(2)} € mensuales.`);
    } else {
      setResultado('No cumples con los requisitos para esta ayuda.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Ayuda al Alquiler</Text>

      <Text>Ingresos anuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos anuales"
        style={styles.input}
      />

      <Text>Alquiler mensual (€):</Text>
      <TextInput
        value={alquiler}
        onChangeText={setAlquiler}
        keyboardType="numeric"
        placeholder="Ingresa el alquiler mensual"
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

export default SimuladorAyudaJovenesAlquiler;
