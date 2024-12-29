import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnuncioInt from '../Anuncios/AnuncioIntersticial';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  InformeIngresoMinimoVital: { 
    edad: string;
    ingresos: string;
    personas: string;
    discapacidad: string;
    resultado: string;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorIngresoMinimoVital: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [personas, setPersonas] = useState<string>('');
  const [discapacidad, setDiscapacidad] = useState<string>('0');
  const [resultado, setResultado] = useState<string>('');
  const navigation = useNavigation<NavigationProp>();

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
    const rentaGarantizadaBase = 658.59; // Cuantía base para 2025
    const rentaGarantizadaPorPersona = 185.1; // Incremento por cada persona adicional
    const discapacidadIncremento = (discapacidadNum >= 65 ? rentaGarantizadaBase * 0.22 : 0); // Incremento por discapacidad

    // Cálculo de la renta garantizada total
    const rentaGarantizada = rentaGarantizadaBase + (personasNum - 1) * rentaGarantizadaPorPersona + discapacidadIncremento;
    
    // Cálculo del IMV
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
      <AnuncioInt />
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
      
      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          {resultado.includes('Tienes derecho') && (
            <TouchableOpacity
              onPress={() => navigation.navigate('InformeIngresoMinimoVital', { 
                edad, 
                ingresos,
                personas, 
                discapacidad, 
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

export default SimuladorIngresoMinimoVital;
