import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SimuladorAyudaNacimiento: React.FC = () => {
  const [residencia, setResidencia] = useState<boolean | null>(null);
  const [ingresos, setIngresos] = useState<string>('');
  const [convivencia, setConvivencia] = useState<boolean | null>(null);
  const [otraPrestacion, setOtraPrestacion] = useState<boolean | null>(null);
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const ingresosNum = parseFloat(ingresos);
    const limiteIngresos = 15000; // Límite aproximado de ingresos anuales

    if (
      residencia === null ||
      convivencia === null ||
      otraPrestacion === null ||
      isNaN(ingresosNum)
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (
      residencia &&
      !otraPrestacion &&
      ingresosNum <= limiteIngresos &&
      (!convivencia || ingresosNum <= limiteIngresos / 2)
    ) {
      setResultado('Cumples con los requisitos para solicitar la ayuda por nacimiento o adopción.');
    } else {
      setResultado('No cumples con los requisitos para esta ayuda.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Ayuda por Nacimiento o Adopción</Text>

      <Text>¿Resides legalmente en territorio español? (Sí: 1, No: 0)</Text>
      <TextInput
        value={residencia !== null ? (residencia ? '1' : '0') : ''}
        onChangeText={(text) => setResidencia(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
        style={styles.input}
      />

      <Text>Ingresos anuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos anuales"
        style={styles.input}
      />

      <Text>¿Convives con otra persona que pueda ser beneficiaria? (Sí: 1, No: 0)</Text>
      <TextInput
        value={convivencia !== null ? (convivencia ? '1' : '0') : ''}
        onChangeText={(text) => setConvivencia(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
        style={styles.input}
      />

      <Text>¿Tienes derecho a prestaciones similares en otro régimen público? (Sí: 1, No: 0)</Text>
      <TextInput
        value={otraPrestacion !== null ? (otraPrestacion ? '1' : '0') : ''}
        onChangeText={(text) => setOtraPrestacion(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
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

export default SimuladorAyudaNacimiento;
