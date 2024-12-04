import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const SimuladorBecaApoyoEducativo: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [escolarizado, setEscolarizado] = useState<string>('');
  const [certificado, setCertificado] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);

    // Validar que las respuestas sean solo 'S' o 'N'
    const esEscolarizado = escolarizado.toUpperCase() === 'S';
    const esCertificado = certificado.toUpperCase() === 'S';

    if (
      isNaN(edadNum) ||
      !['S', 'N'].includes(escolarizado.toUpperCase()) ||
      !['S', 'N'].includes(certificado.toUpperCase()) ||
      isNaN(ingresosNum)
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    const umbralRenta = 15000; // Umbral de renta familiar aproximado

    if (
      ((edadNum >= 2 && edadNum <= 5) || (edadNum >= 6)) &&
      esEscolarizado &&
      esCertificado &&
      ingresosNum <= umbralRenta
    ) {
      setResultado('Cumples con los requisitos para solicitar la beca.');
    } else {
      setResultado('No cumples con los requisitos para esta beca.');
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
      <Text style={styles.title}>Simulador Beca Apoyo Educativo</Text>

      <Text>Edad del estudiante (años):</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa la edad del estudiante"
        style={styles.input}
      />

      <Text>¿Está escolarizado en un centro adecuado? (S/N):</Text>
      <TextInput
        value={escolarizado}
        onChangeText={setEscolarizado}
        maxLength={1}
        placeholder="Ingresa S o N"
        style={styles.input}
      />

      <Text>¿Cuenta con el certificado requerido? (S/N):</Text>
      <TextInput
        value={certificado}
        onChangeText={setCertificado}
        maxLength={1}
        placeholder="Ingresa S o N"
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
    color: '#4caf50',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SimuladorBecaApoyoEducativo;
