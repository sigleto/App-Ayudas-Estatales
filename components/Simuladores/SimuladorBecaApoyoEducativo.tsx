import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnuncioInt from '../Anuncios/AnuncioIntersticial';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  InformeBecaApoyoEducativo: {
    edad: string;
    escolarizado: string;
    certificado: string;
    ingresos: string;
    resultado: string;
  };
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorBecaApoyoEducativo: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [escolarizado, setEscolarizado] = useState<string>('');
  const [certificado, setCertificado] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    Alert.alert(
      'Aviso importante',
      'Este simulador es una herramienta orientativa y no contempla necesariamente todos los requisitos o condiciones específicos aplicables a cada caso particular. Por tanto, el resultado obtenido no es vinculante ni garantiza la concesión de la ayuda.\n\nPara obtener información oficial y confirmar tu situación, consulta con el organismo competente o las fuentes oficiales.',
      [{ text: 'Entendido' }]
    );
  }, []);

  const handleSimulacion = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);

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

    const umbralRenta = 15000;

    if (
      ((edadNum >= 2 && edadNum <= 5) || edadNum >= 6) &&
      esEscolarizado &&
      esCertificado &&
      ingresosNum <= umbralRenta
    ) {
      setResultado('Cumples con los requisitos para solicitar la beca.');
    } else {
      setResultado('No cumples con los requisitos para esta beca.');
    }
  };

  return (
    <View style={styles.container}>
      <AnuncioInt />
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

      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{resultado}</Text>
          {resultado.includes('Cumples con los requisitos') && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('InformeBecaApoyoEducativo', {
                  edad,
                  escolarizado,
                  certificado,
                  ingresos,
                  resultado,
                })
              }
              style={styles.button}
            >
             <Text style={styles.letras}>GENERAR INFORME DETALLADO</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>VOLVER</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flex: 1,
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
    borderRadius: 5,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    color: '#4caf50',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#c13855',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    marginTop: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  letras: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
  },
});

export default SimuladorBecaApoyoEducativo;
