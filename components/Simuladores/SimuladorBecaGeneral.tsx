import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, Alert,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SimuladorBecaGeneral: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [ciudadania, setCiudadania] = useState<string>(''); // S o N
  const [matriculado, setMatriculado] = useState<string>(''); // S o N
  const [ingresos, setIngresos] = useState<string>('');
  const [rendimiento, setRendimiento] = useState<string>(''); // S o N
  const [resultado, setResultado] = useState<string>('');
  const navegacion = useNavigation();
  
  const handleSimulacion = () => {
    // Convertir valores
    const edadNum = parseInt(edad, 10);
    const ingresosNum = parseFloat(ingresos);

    // Validaciones iniciales
    if (!edad || !ciudadania || !matriculado || !ingresos || !rendimiento) {
      setResultado('Por favor, completa todos los campos.');
      return;
    }

    if (isNaN(edadNum) || isNaN(ingresosNum)) {
      setResultado('Asegúrate de ingresar valores numéricos válidos para edad e ingresos.');
      return;
    }

    if (!['S', 'N'].includes(ciudadania.toUpperCase()) ||
        !['S', 'N'].includes(matriculado.toUpperCase()) ||
        !['S', 'N'].includes(rendimiento.toUpperCase())) {
      setResultado('Las respuestas deben ser S o N en las preguntas de ciudadanía, matrícula y rendimiento.');
      return;
    }

    // Lógica de la beca
    const umbralRenta = 20000;
    const cumpleRequisitos =
      edadNum >= 16 &&
      ciudadania.toUpperCase() === 'S' &&
      matriculado.toUpperCase() === 'S' &&
      ingresosNum <= umbralRenta &&
      rendimiento.toUpperCase() === 'S';

    setResultado(
      cumpleRequisitos
        ? 'Cumples con los requisitos para solicitar la Beca General.'
        : 'No cumples con los requisitos para esta beca.'
    );
  };

  useEffect(() => {
    Alert.alert(
      'Aviso importante',
      'Este simulador es una herramienta orientativa y no contempla necesariamente todos los requisitos o condiciones específicos aplicables a cada caso particular. Por tanto, el resultado obtenido no es vinculante ni garantiza la concesión de la ayuda.\n\nPara obtener información oficial y confirmar tu situación, es imprescindible consultar con el organismo competente o acudir a las fuentes oficiales correspondientes.',
      [{ text: 'Entendido' }]
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Simulador Beca General</Text>

      <Text>Edad del estudiante (años):</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa la edad del estudiante"
        style={styles.input}
      />

      <Text>¿Es ciudadano español o tiene residencia legal? (S/N):</Text>
      <TextInput
        value={ciudadania}
        onChangeText={setCiudadania}
        placeholder="Ingresa S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Está matriculado en un curso completo o mínimo de asignaturas? (S/N):</Text>
      <TextInput
        value={matriculado}
        onChangeText={setMatriculado}
        placeholder="Ingresa S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>Ingresos familiares (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa los ingresos familiares"
        style={styles.input}
      />

      <Text>¿Cumple con el rendimiento académico mínimo exigido? (S/N):</Text>
      <TextInput
        value={rendimiento}
        onChangeText={setRendimiento}
        placeholder="Ingresa S o N"
        style={styles.input}
        maxLength={1}
      />

      <Button title="Simular" onPress={handleSimulacion} />

    
      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          <TouchableOpacity
            onPress={() => navegacion.navigate('Home' as never)}
            style={styles.boton}
          >
            <Text style={styles.letra}>VOLVER</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0056b3',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#4caf50',
    textAlign: 'center',
    fontWeight: 'bold',
  },  boton: {
    backgroundColor: '#c13855', // Color de fondo llamativo
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',     
    width: '40%', // Ajusta el ancho del botón
    marginTop: 20,
    height:40,
    fontSize:20,
    fontWeight:'bold',
  },
  letra:{fontSize:16, color:'white',fontWeight:'bold'}
});

export default SimuladorBecaGeneral;
