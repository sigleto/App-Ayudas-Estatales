import React, { useState } from 'react';
<<<<<<< HEAD
import { View, TextInput, Button, Text, StyleSheet, Alert,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
=======
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
>>>>>>> 63ca339c67c45a3b1fee7c691024f133bff5fd95

const SimuladorAsistenciaSanitaria: React.FC = () => {
  const [discapacidad, setDiscapacidad] = useState<string>('');
  const [seguroSocial, setSeguroSocial] = useState<string>('');
<<<<<<< HEAD
=======
  const [sistemaSocial, setSistemaSocial] = useState<string>('');
>>>>>>> 63ca339c67c45a3b1fee7c691024f133bff5fd95
  const [resultado, setResultado] = useState<string>('');
  const navegacion = useNavigation();

  const handleSimulacion = () => {
    const discapacidadNum = parseInt(discapacidad);

    if (
      isNaN(discapacidadNum) ||
<<<<<<< HEAD
      (seguroSocial !== 'S' && seguroSocial !== 'N')
=======
      !['S', 'N'].includes(seguroSocial.toUpperCase()) ||
      !['S', 'N'].includes(sistemaSocial.toUpperCase())
>>>>>>> 63ca339c67c45a3b1fee7c691024f133bff5fd95
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

<<<<<<< HEAD
    if (discapacidadNum >= 33 && seguroSocial === 'N') {
      setResultado(
        'Cumples con los requisitos para recibir asistencia sanitaria.'
      );
=======
    const tieneSeguroSocial = seguroSocial.toUpperCase() === 'S';
    const incluidoSistemaSocial = sistemaSocial.toUpperCase() === 'S';

    if (
      discapacidadNum >= 33 &&
      !tieneSeguroSocial &&
      !incluidoSistemaSocial
    ) {
      setResultado('Cumples con los requisitos para recibir asistencia sanitaria.');
>>>>>>> 63ca339c67c45a3b1fee7c691024f133bff5fd95
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

<<<<<<< HEAD
      <Text>¿Tienes seguro social? (S: Sí, N: No)</Text>
      <TextInput
        value={seguroSocial}
        onChangeText={(text) => setSeguroSocial(text.toUpperCase().trim())}
        maxLength={1}
=======
      <Text>¿Tienes seguro social? (S/N):</Text>
      <TextInput
        value={seguroSocial}
        onChangeText={setSeguroSocial}
>>>>>>> 63ca339c67c45a3b1fee7c691024f133bff5fd95
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flex: 1, // Para expandir el contenedor
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
<<<<<<< HEAD
    color: '#4caf50',
=======
    color: '#28a745',
>>>>>>> 63ca339c67c45a3b1fee7c691024f133bff5fd95
  },
  boton: {
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

export default SimuladorAsistenciaSanitaria;
