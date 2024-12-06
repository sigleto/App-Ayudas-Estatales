import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SimuladorBonoJoven: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [alquiler, setAlquiler] = useState<string>('');
  const [rentasTrabajo, setRentasTrabajo] = useState<string>(''); // S o N
  const [resultado, setResultado] = useState<string>('');
  const navegacion = useNavigation();
  
  const handleSubmit = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);
    const alquilerNum = parseFloat(alquiler);

    // Validaciones de entrada
    if (isNaN(edadNum) || isNaN(ingresosNum) || isNaN(alquilerNum) || !rentasTrabajo) {
      setResultado('Por favor, ingresa todos los datos correctamente.');
      return;
    }

    if (!['S', 'N'].includes(rentasTrabajo.toUpperCase())) {
      setResultado('La respuesta para rentas del trabajo debe ser S o N.');
      return;
    }

    // Criterios del bono joven (ajustar si es necesario)
    const edadRequerida = edadNum >= 18 && edadNum <= 35;
    const ingresosRequeridos = ingresosNum <= 24000; // Ajustar según los criterios oficiales
    const alquilerRequerido = alquilerNum <= 600; // Ajustar según los criterios oficiales
    const rentasTrabajoRequeridas = rentasTrabajo.toUpperCase() === 'S';

    if (edadRequerida && ingresosRequeridos && alquilerRequerido && rentasTrabajoRequeridas) {
      setResultado('¡Tienes derecho al Bono Joven por Alquiler!');
    } else {
      setResultado('No tienes derecho al Bono Joven por Alquiler.');
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
      <Text style={styles.title}>Simulador Bono Joven por Alquiler</Text>

      <Text>Edad:</Text>
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
        placeholder="Ingresa tus ingresos"
        style={styles.input}
      />

      <Text>Precio del alquiler (€):</Text>
      <TextInput
        value={alquiler}
        onChangeText={setAlquiler}
        keyboardType="numeric"
        placeholder="Ingresa el precio del alquiler"
        style={styles.input}
      />

      <Text>¿Obtienes rentas del trabajo? (S/N):</Text>
      <TextInput
        value={rentasTrabajo}
        onChangeText={setRentasTrabajo}
        placeholder="Ingresa S o N"
        style={styles.input}
        maxLength={1}
      />

      <Button title="Verificar" onPress={handleSubmit} />

      
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

export default SimuladorBonoJoven;
