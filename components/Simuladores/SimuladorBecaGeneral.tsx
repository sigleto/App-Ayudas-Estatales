import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnuncioInt from '../Anuncios/AnuncioIntersticial';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  InformeBecaGeneral: { 
    edad: string;
    ciudadania: string;
    nivelEstudios: string;
    notaMedia: string;
    ingresos: string;
    resultado: string;
  };
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorBecaGeneral: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [ciudadania, setCiudadania] = useState<string>('');
  const [nivelEstudios, setNivelEstudios] = useState<string>('');
  const [notaMedia, setNotaMedia] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const navigation = useNavigation<NavigationProp>();
  
  const handleSimulacion = () => {
    const edadNum = parseInt(edad, 10);
    const ingresosNum = parseFloat(ingresos);
    const notaMediaNum = parseFloat(notaMedia);

    if (!edad || !ciudadania || !nivelEstudios || !notaMedia || !ingresos) {
      setResultado('Por favor, completa todos los campos.');
      return;
    }

    if (isNaN(edadNum) || isNaN(ingresosNum) || isNaN(notaMediaNum)) {
      setResultado('Asegúrate de ingresar valores numéricos válidos.');
      return;
    }

    if (!['S', 'N'].includes(ciudadania.toUpperCase())) {
      setResultado('La respuesta de ciudadanía debe ser S o N.');
      return;
    }

    // Lógica de la beca actualizada
    const umbralRenta = 40000; // Este valor es un ejemplo, ajústalo según los umbrales oficiales
    let cumpleRequisitos = false;

    if (ciudadania.toUpperCase() === 'S' && ingresosNum <= umbralRenta) {
      switch (nivelEstudios) {
        case 'bachillerato':
          cumpleRequisitos = notaMediaNum >= 5;
          break;
        case 'fpBasico':
        case 'fpMedio':
          cumpleRequisitos = true; // Solo necesita estar matriculado
          break;
        case 'fpSuperior':
        case 'universidad':
          cumpleRequisitos = notaMediaNum >= 5;
          break;
        default:
          cumpleRequisitos = false;
      }
    }

    setResultado(
      cumpleRequisitos
        ? 'Cumples con los requisitos básicos para solicitar la Beca General MEC 2024/2025.'
        : 'No cumples con los requisitos básicos para esta beca.'
    );
  };

  useEffect(() => {
    Alert.alert(
      'Aviso importante',
      'Este simulador es una herramienta orientativa y no contempla necesariamente todos los requisitos o condiciones específicos aplicables a cada caso particular. El resultado obtenido no es vinculante ni garantiza la concesión de la ayuda. Para información oficial, consulta con el organismo competente o las fuentes oficiales.',
      [{ text: 'Entendido' }]
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      <AnuncioInt/>
      <Text style={styles.title}>Simulador Beca General MEC 2024/2025</Text>

      <Text>Edad del estudiante (años):</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa la edad del estudiante"
        style={styles.input}
      />

      <Text>¿Tienes nacionalidad española o de un estado miembro de la UE? (S/N):</Text>
      <TextInput
        value={ciudadania}
        onChangeText={setCiudadania}
        placeholder="Ingresa S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>Nivel de estudios:</Text>
      <TextInput
        value={nivelEstudios}
        onChangeText={setNivelEstudios}
        placeholder="bachillerato, fpBasico, fpMedio, fpSuperior, universidad"
        style={styles.input}
      />

      <Text>Nota media del curso anterior:</Text>
      <TextInput
        value={notaMedia}
        onChangeText={setNotaMedia}
        keyboardType="numeric"
        placeholder="Ingresa la nota media (ej. 7.5)"
        style={styles.input}
      />

      <Text>Ingresos familiares anuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa los ingresos familiares anuales"
        style={styles.input}
      />

      <Button title="Simular" onPress={handleSimulacion} />

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          {resultado.includes('Cumples con los requisitos') && (
            <TouchableOpacity
              onPress={() => navigation.navigate('InformeBecaGeneral', { 
                edad,
                ciudadania,
                nivelEstudios,
                notaMedia,
                ingresos,                     
                resultado 
              })}
              style={styles.boton}
            >
              <Text style={styles.letras}>GENERAR INFORME DETALLADO</Text>
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
  letra:{fontSize:16, color:'white',fontWeight:'bold'},
  letras: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
  },
});

export default SimuladorBecaGeneral;
