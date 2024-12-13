import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnuncioInt from '../Anuncios/AnuncioIntersticial';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  InformeBecaResidencia: {
    matriculado: string;
    residenciaLejana: string;
    estudiosPresenciales: string;
    ingresos: string;
    resultado: string;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorBecaResidencia: React.FC = () => {
  const [matriculado, setMatriculado] = useState<string>('');
  const [residenciaLejana, setResidenciaLejana] = useState<string>('');
  const [estudiosPresenciales, setEstudiosPresenciales] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const navigation = useNavigation<NavigationProp>();

  const handleSimulacion = () => {
    const ingresosNum = parseFloat(ingresos);
    const umbralRenta = 25000; // Umbral de renta familiar aproximado

    // Validar que las respuestas sean solo 'S' o 'N'
    const esMatriculado = matriculado.toUpperCase() === 'S';
    const esResidenciaLejana = residenciaLejana.toUpperCase() === 'S';
    const esEstudiosPresenciales = estudiosPresenciales.toUpperCase() === 'S';

    if (
      !['S', 'N'].includes(matriculado.toUpperCase()) ||
      !['S', 'N'].includes(residenciaLejana.toUpperCase()) ||
      !['S', 'N'].includes(estudiosPresenciales.toUpperCase()) ||
      isNaN(ingresosNum)
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (
      esMatriculado &&
      esResidenciaLejana &&
      esEstudiosPresenciales &&
      ingresosNum <= umbralRenta
    ) {
      setResultado('Cumples con los requisitos para solicitar la Beca de Residencia.');
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
      <AnuncioInt />
      <Text style={styles.title}>Simulador Beca de Residencia</Text>

      <Text>¿Estás matriculado en estudios postobligatorios o universitarios? (S/N):</Text>
      <TextInput
        value={matriculado}
        onChangeText={setMatriculado}
        maxLength={1} // Solo permite un carácter
        placeholder="Ingresa S o N"
        style={styles.input}
      />

      <Text>¿Tu residencia habitual está lejos del centro de estudios? (S/N):</Text>
      <TextInput
        value={residenciaLejana}
        onChangeText={setResidenciaLejana}
        maxLength={1} // Solo permite un carácter
        placeholder="Ingresa S o N"
        style={styles.input}
      />

      <Text>¿Estás cursando estudios presenciales y con matrícula completa? (S/N):</Text>
      <TextInput
        value={estudiosPresenciales}
        onChangeText={setEstudiosPresenciales}
        maxLength={1} // Solo permite un carácter
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

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          {resultado.includes('Cumples con los requisitos') && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('InformeBecaResidencia', {
                  matriculado,
                  residenciaLejana,
                  estudiosPresenciales,
                  ingresos,
                  resultado,
                })
              }
              style={styles.boton}
            >
              <Text style={styles.letra}>Generar Informe</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
                      onPress={() => navigation.navigate('Home' as never)}
                      style={styles.boton} 
                    >
                      <Text style={styles.letra}>VOLVER</Text>
                    </TouchableOpacity>
        </>
      )}
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
  boton: {
    backgroundColor: '#c13855', // Color de fondo llamativo
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '40%', // Ajusta el ancho del botón
    marginTop: 20,
    height: 40,
  },
  letra: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SimuladorBecaResidencia;
