// SimuladorLeyDeDependencia.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SimuladorLeyDeDependencia: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [gradoDependencia, setGradoDependencia] = useState<string>('1');
  const [resultado, setResultado] = useState<string>('');

  const handleSubmit = () => {
    const edadNum = parseInt(edad);
    const gradoNum = parseInt(gradoDependencia);

    if (isNaN(edadNum) || isNaN(gradoNum)) {
      setResultado('Por favor, ingresa todos los datos correctamente.');
      return;
    }

    let prestaciones = 0;
    if (gradoNum === 1) {
      prestaciones = 180; // Grado I
    } else if (gradoNum === 2) {
      prestaciones = 315; // Grado II
    } else if (gradoNum === 3) {
      prestaciones = 455; // Grado III
    }

    if (edadNum >= 18 && prestaciones > 0) {
      setResultado(`Tienes derecho a la prestación económica. Cuantía estimada: €${prestaciones}/mes`);
    } else {
      setResultado('No tienes derecho a la prestación económica según la Ley de Dependencia.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Ley de Dependencia</Text>

      <Text>Edad:</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />

      <Text>Grado de Dependencia:</Text>
      <TextInput
        value={gradoDependencia}
        onChangeText={setGradoDependencia}
        keyboardType="numeric"
        placeholder="Grado (1, 2 o 3)"
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

export default SimuladorLeyDeDependencia;
