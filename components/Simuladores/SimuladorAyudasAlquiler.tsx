import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const SimuladorAyudasAlquiler: React.FC = () => {
  const [ingresos, setIngresos] = useState<string>('');
  const [esFamiliaNumerosa, setEsFamiliaNumerosa] = useState<boolean | null>(null);
  const [gradoDiscapacidad, setGradoDiscapacidad] = useState<string>('');
  const [rentaAlquiler, setRentaAlquiler] = useState<string>('');
  const [edad, setEdad] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const ingresosNum = parseFloat(ingresos);
    const rentaAlquilerNum = parseFloat(rentaAlquiler);
    const gradoDiscapacidadNum = parseFloat(gradoDiscapacidad);
    const edadNum = parseInt(edad, 10);
    const iprem = 600; // IPREM mensual aproximado (ejemplo)

    if (
      isNaN(ingresosNum) ||
      isNaN(rentaAlquilerNum) ||
      esFamiliaNumerosa === null ||
      (gradoDiscapacidad && isNaN(gradoDiscapacidadNum)) ||
      isNaN(edadNum)
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    let limiteIngresos: number;
    if (esFamiliaNumerosa) {
      limiteIngresos =
        gradoDiscapacidadNum >= 33
          ? 5 * iprem
          : 4 * iprem; // Familia numerosa especial o con discapacidad
    } else {
      limiteIngresos = 3 * iprem; // General
    }

    const limiteAlquiler = rentaAlquilerNum <= 600 || rentaAlquilerNum <= 900;

    if (ingresosNum <= limiteIngresos && limiteAlquiler) {
      const porcentajeAyuda =
        edadNum >= 65 ? 50 : rentaAlquilerNum > 600 ? 30 : 40;
      const ayuda = (rentaAlquilerNum * porcentajeAyuda) / 100;
      setResultado(
        `Cumples con los requisitos para la ayuda al alquiler. Cuantía estimada: ${ayuda.toFixed(
          2
        )} € al mes.`
      );
    } else {
      setResultado('No cumples con los requisitos para esta ayuda.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Simulador Ayudas al Alquiler</Text>

      <Text>Ingresos mensuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos mensuales"
        style={styles.input}
      />

      <Text>¿Eres familia numerosa? (Sí: 1, No: 0):</Text>
      <TextInput
        value={esFamiliaNumerosa !== null ? (esFamiliaNumerosa ? '1' : '0') : ''}
        onChangeText={(text) => setEsFamiliaNumerosa(text === '1')}
        keyboardType="numeric"
        placeholder="Ingresa 1 o 0"
        style={styles.input}
      />

      <Text>Grado de discapacidad (%):</Text>
      <TextInput
        value={gradoDiscapacidad}
        onChangeText={setGradoDiscapacidad}
        keyboardType="numeric"
        placeholder="Ingresa el porcentaje de discapacidad"
        style={styles.input}
      />

      <Text>Renta mensual del alquiler (€):</Text>
      <TextInput
        value={rentaAlquiler}
        onChangeText={setRentaAlquiler}
        keyboardType="numeric"
        placeholder="Ingresa la renta mensual del alquiler"
        style={styles.input}
      />

      <Text>Edad (años):</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
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

export default SimuladorAyudasAlquiler;
