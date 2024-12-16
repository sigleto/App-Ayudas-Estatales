import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = { 
  Home: undefined;
  InformeAyudasDesacopladas: { 
    hectareas: string;
    cultivo: string;
    sostenibilidad: string;
    agricultorActivo: string;
    cumpleNormativa: string;
    ubicacion: string;
    resultado: string;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorAyudasDesacopladas: React.FC = () => {
  const [hectareas, setHectareas] = useState<string>('');
  const [cultivo, setCultivo] = useState<string>('');
  const [sostenibilidad, setSostenibilidad] = useState<string>('N');
  const [agricultorActivo, setAgricultorActivo] = useState<string>('N');
  const [cumpleNormativa, setCumpleNormativa] = useState<string>('N');
  const [ubicacion, setUbicacion] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const navigation = useNavigation<NavigationProp>();

  const handleSubmit = () => {
    const hectareasNum = parseFloat(hectareas);

    // Validaciones de entrada
    if (
      isNaN(hectareasNum) ||
      !cultivo ||
      !sostenibilidad ||
      !agricultorActivo ||
      !cumpleNormativa ||
      !ubicacion
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (
      !['S', 'N'].includes(sostenibilidad.toUpperCase()) ||
      !['S', 'N'].includes(agricultorActivo.toUpperCase()) ||
      !['S', 'N'].includes(cumpleNormativa.toUpperCase())
    ) {
      setResultado('Las respuestas deben ser S o N.');
      return;
    }

    // Criterios de elegibilidad
    const tieneHectareas = hectareasNum > 0;
    const cumpleCultivo = ['trigo', 'maíz', 'cebada', 'girasol'].includes(cultivo.toLowerCase());
    const criteriosSostenibilidad = sostenibilidad.toUpperCase() === 'S';
    const esAgricultorActivo = agricultorActivo.toUpperCase() === 'S';
    const respetaNormativa = cumpleNormativa.toUpperCase() === 'S';
    const esUbicacionValida = ['montaña', 'regadío', 'secano'].includes(ubicacion.toLowerCase());

    if (
      tieneHectareas &&
      cumpleCultivo &&
      criteriosSostenibilidad &&
      esAgricultorActivo &&
      respetaNormativa &&
      esUbicacionValida
    ) {
      setResultado(
        '¡Puedes solicitar las ayudas desacopladas de la PAC! Asegúrate de presentar la solicitud en tu comunidad autónoma.'
      );
    } else {
      setResultado(
        'No cumples todos los requisitos para las ayudas desacopladas de la PAC. Por favor, revisa los criterios o consulta con tu comunidad autónoma.'
      );
    }
  };

  React.useEffect(() => {
    Alert.alert(
      'Aviso importante',
      'Este simulador es una herramienta orientativa y no contempla necesariamente todos los requisitos específicos aplicables. Consulta siempre con tu comunidad autónoma.',
      [{ text: 'Entendido' }]
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador Ayudas Desacopladas de la PAC</Text>

      <Text>Número de hectáreas:</Text>
      <TextInput
        value={hectareas}
        onChangeText={setHectareas}
        keyboardType="numeric"
        placeholder="Ingresa el número de hectáreas"
        style={styles.input}
      />

      <Text>Tipo de cultivo (trigo, maíz, etc.):</Text>
      <TextInput
        value={cultivo}
        onChangeText={setCultivo}
        placeholder="Ingresa el tipo de cultivo"
        style={styles.input}
      />

      <Text>¿Cumples criterios de sostenibilidad? (S/N):</Text>
      <TextInput
        value={sostenibilidad}
        onChangeText={setSostenibilidad}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Eres agricultor activo registrado? (S/N):</Text>
      <TextInput
        value={agricultorActivo}
        onChangeText={setAgricultorActivo}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Cumples la normativa PAC vigente? (S/N):</Text>
      <TextInput
        value={cumpleNormativa}
        onChangeText={setCumpleNormativa}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>Ubicación de las tierras (montaña, regadío, secano):</Text>
      <TextInput
        value={ubicacion}
        onChangeText={setUbicacion}
        placeholder="Ingresa la ubicación"
        style={styles.input}
      />

      <Button title="Verificar" onPress={handleSubmit} />

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          {resultado.includes('¡Puedes solicitar') && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('InformeAyudasDesacopladas', {
                  hectareas,
                  cultivo,
                  sostenibilidad,
                  agricultorActivo,
                  cumpleNormativa,
                  ubicacion,
                  resultado
                })
              }
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4c3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6a1b9a',
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
    color: '#388e3c',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  boton: {
    backgroundColor: '#8e24aa',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '40%',
    marginTop: 20,
    height: 40,
  },
  letra: { fontSize: 16, color: 'white', fontWeight: 'bold' },
  letras: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
  },
});

export default SimuladorAyudasDesacopladas;
