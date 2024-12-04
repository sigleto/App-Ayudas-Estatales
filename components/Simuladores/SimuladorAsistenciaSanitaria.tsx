import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const SimuladorAsistenciaSanitaria: React.FC = () => {
  const [discapacidad, setDiscapacidad] = useState<string>('');
  const [seguroSocial, setSeguroSocial] = useState<string>('');
  const [sistemaSocial, setSistemaSocial] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const discapacidadNum = parseInt(discapacidad);

    if (
      isNaN(discapacidadNum) ||
      !['S', 'N'].includes(seguroSocial.toUpperCase()) ||
      !['S', 'N'].includes(sistemaSocial.toUpperCase())
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    const tieneSeguroSocial = seguroSocial.toUpperCase() === 'S';
    const incluidoSistemaSocial = sistemaSocial.toUpperCase() === 'S';

    if (
      discapacidadNum >= 33 &&
      !tieneSeguroSocial &&
      !incluidoSistemaSocial
    ) {
      setResultado('Cumples con los requisitos para recibir asistencia sanitaria.');
    } else {
      setResultado('No cumples con los requisitos para esta asistencia.');
    }
  };

  React.useEffect(() => {
    Alert.alert(
      'Aviso importante',
      'Este simulador es una herramienta orientativa y no contempla necesariamente todos los requisitos o condiciones específicos aplicables a cada caso particular. Por tanto, el resultado obtenido no es vinculante ni garantiza la concesión de la ayuda.\n\nPara obtener información oficial y confirmar tu situación, es imprescindible consultar con el organismo competente o acudir a las fuentes oficiales correspondientes.',
      [{ text: 'Entendido' }]
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Asistencia Sanitaria</Text>

      <Text>Grado de Discapacidad (%):</Text>
      <TextInput
        value={discapacidad}
        onChangeText={setDiscapacidad}
        keyboardType="numeric"
        placeholder="Ingresa el grado de discapacidad"
        style={styles.input}
      />

      <Text>¿Tienes seguro social? (S/N):</Text>
      <TextInput
        value={seguroSocial}
        onChangeText={setSeguroSocial}
        placeholder="Ingresa S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Estás incluido en el sistema de la Seguridad Social? (S/N):</Text>
      <TextInput
        value={sistemaSocial}
        onChangeText={setSistemaSocial}
        placeholder="Ingresa S o N"
        style={styles.input}
        maxLength={1}
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
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#28a745',
  },
});

export default SimuladorAsistenciaSanitaria;
