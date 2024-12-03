import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SimuladorAyudaJovenesAdquisicion: React.FC = () => {
  const [ingresos, setIngresos] = useState<string>('');
  const [precioVivienda, setPrecioVivienda] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const ingresosNum = parseFloat(ingresos);
    const precioNum = parseFloat(precioVivienda);

    if (isNaN(ingresosNum) || isNaN(precioNum)) {
      setResultado('Por favor, ingresa valores válidos para ingresos y precio de vivienda.');
      return;
    }

    if (ingresosNum <= 3 * 6000 && precioNum <= 100000) {
      const ayuda = Math.min(10800, precioNum * 0.2);
      setResultado(`Cumples los requisitos. Ayuda estimada: ${ayuda.toFixed(2)} €.`);
    } else {
      setResultado('No cumples con los requisitos para esta ayuda.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Ayuda a la Adquisición</Text>

      <Text>Ingresos anuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos anuales"
        style={styles.input}
      />

      <Text>Precio de la vivienda (€):</Text>
      <TextInput
        value={precioVivienda}
        onChangeText={setPrecioVivienda}
        keyboardType="numeric"
        placeholder="Ingresa el precio de la vivienda"
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

export default SimuladorAyudaJovenesAdquisicion;
