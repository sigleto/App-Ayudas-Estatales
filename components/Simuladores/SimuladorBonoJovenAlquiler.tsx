import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SimuladorBonoJoven: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [alquiler, setAlquiler] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSubmit = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);
    const alquilerNum = parseFloat(alquiler);

    if (isNaN(edadNum) || isNaN(ingresosNum) || isNaN(alquilerNum)) {
      setResultado('Por favor, ingresa todos los datos correctamente.');
      return;
    }

    // Criterios del bono joven (ajustar si es necesario)
    const edadRequerida = edadNum >= 18 && edadNum <= 35;
    const ingresosRequeridos = ingresosNum <= 24000; // Ajustar según los criterios oficiales
    const alquilerRequerido = alquilerNum <= 600; // Ajustar según los criterios oficiales

    if (edadRequerida && ingresosRequeridos && alquilerRequerido) {
      setResultado('¡Tienes derecho al Bono Joven por Alquiler!');
    } else {
      setResultado('No tienes derecho al Bono Joven por Alquiler.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Bono Joven por Alquiler</Text>

      <Text>Edad:</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />

      <Text>Ingresos anuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos"
        style={styles.input}
      />

      <Text>Precio del alquiler (€):</Text>
      <TextInput
        value={alquiler}
        onChangeText={setAlquiler}
        keyboardType="numeric"
        placeholder="Ingresa el precio del alquiler"
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

export default SimuladorBonoJoven;
