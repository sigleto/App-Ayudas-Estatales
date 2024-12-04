import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet,Alert } from 'react-native';

const SimuladorIngresoMinimoVital: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [personas, setPersonas] = useState<string>('');
  const [discapacidad, setDiscapacidad] = useState<string>('0');
  const [resultado, setResultado] = useState<string>('');

  const handleSubmit = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);
    const personasNum = parseInt(personas);
    const discapacidadNum = parseFloat(discapacidad);

    if (isNaN(edadNum) || isNaN(ingresosNum) || isNaN(personasNum) || isNaN(discapacidadNum)) {
      setResultado('Por favor, ingresa todos los datos correctamente.');
      return;
    }

    // Cálculo del Ingreso Mínimo Vital
    const rentaGarantizada = 604.21 + (personasNum - 1) * 185.1 + (discapacidadNum >= 65 ? 22 / 100 * 604.21 : 0);
    const imv = rentaGarantizada - ingresosNum;

    if (edadNum >= 23 && ingresosNum <= rentaGarantizada && imv >= 10) {
      setResultado(`Tienes derecho al Ingreso Mínimo Vital. Cuantía estimada: €${imv.toFixed(2)}`);
    } else {
      setResultado('No tienes derecho al Ingreso Mínimo Vital.');
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
      <Text style={styles.title}>Simulador Ingreso Mínimo Vital</Text>

      <Text>Edad:</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />

      <Text>Ingresos mensuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos"
        style={styles.input}
      />

      <Text>Número de personas en tu unidad de convivencia:</Text>
      <TextInput
        value={personas}
        onChangeText={setPersonas}
        keyboardType="numeric"
        placeholder="Número de personas"
        style={styles.input}
      />

      <Text>Porcentaje de discapacidad (si aplica):</Text>
      <TextInput
        value={discapacidad}
        onChangeText={setDiscapacidad}
        keyboardType="numeric"
        placeholder="Discapacidad (%)"
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
    color: '#4caf50',
    textAlign: 'center',
    fontWeight:'bold',
  },
});

export default SimuladorIngresoMinimoVital;
