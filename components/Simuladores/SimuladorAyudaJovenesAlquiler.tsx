import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert} from 'react-native';

const SimuladorAyudaJovenesAlquiler: React.FC = () => {
  const [ingresos, setIngresos] = useState<string>('');
  const [alquiler, setAlquiler] = useState<string>('');
  const [edad, setEdad] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleSimulacion = () => {
    const ingresosNum = parseFloat(ingresos);
    const alquilerNum = parseFloat(alquiler);
    const edadNum = parseInt(edad, 10);
    const IPREM = 6000; // Indicador Público de Renta de Efectos Múltiples aproximado

    if (isNaN(ingresosNum) || isNaN(alquilerNum) || isNaN(edadNum)) {
      setResultado('Por favor, ingresa valores válidos para ingresos, edad y alquiler.');
      return;
    }

    // Validaciones de edad
    if (edadNum < 18 || edadNum > 35) {
      setResultado('No cumples con la edad requerida (18-35 años).');
      return;
    }

    // Validación de ingresos
    if (ingresosNum > 3 * IPREM) {
      setResultado('Tus ingresos superan el límite de 3 veces el IPREM.');
      return;
    }

    // Validaciones de alquiler
    if (alquilerNum <= 600) {
      setResultado('Cumples los requisitos. Ayuda estimada: 250 € mensuales.');
    } else if (alquilerNum > 600 && alquilerNum <= 900) {
      setResultado(
        'Cumples los requisitos. La ayuda dependerá de un acuerdo de la Comisión de Seguimiento. Estimación: 250 € mensuales.'
      );
    } else {
      setResultado('El alquiler supera el límite permitido para esta ayuda.');
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
      <Text style={styles.title}>Simulador Bono Alquiler Joven</Text>

      <Text>Edad (años):</Text>
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

