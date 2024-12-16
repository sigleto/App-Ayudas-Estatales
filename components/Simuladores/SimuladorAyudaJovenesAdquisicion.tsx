import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnuncioInt from '../Anuncios/AnuncioIntersticial';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = { 
  Home: undefined;
  InformeAyudaAdquisicion: { 
    edad: string;
    ingresos: string;
    precioVivienda: string;
    esPropietario:string;
    poblacion:string;
    resultado: string;
  };
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const SimuladorAyudaJovenesAdquisicion: React.FC = () => {
  const [edad, setEdad] = useState<string>('');
  const [ingresos, setIngresos] = useState<string>('');
  const [precioVivienda, setPrecioVivienda] = useState<string>('');
  const [esPropietario, setEsPropietario] = useState<string>(''); // 'S' o 'N'
  const [poblacion, setPoblacion] = useState<string>(''); // población del municipio
  const [resultado, setResultado] = useState<string>('');
  const navigation = useNavigation<NavigationProp>();
  
  
  const handleSimulacion = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);
    const precioNum = parseFloat(precioVivienda);
    const poblacionNum = parseInt(poblacion);
    const esPropietarioBool = esPropietario.toUpperCase() === 'S';

    if (
      isNaN(edadNum) ||
      isNaN(ingresosNum) ||
      isNaN(precioNum) ||
      isNaN(poblacionNum) ||
      (esPropietario.toUpperCase() !== 'S' && esPropietario.toUpperCase() !== 'N')
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    const ipremAnual = 600 * 12; // IPREM mensual estimado x 12
    const limiteIngresos = ipremAnual * 3; // 3 veces el IPREM anual

    // Validación de requisitos
    if (
      edadNum <= 35 &&
      ingresosNum <= limiteIngresos &&
      precioNum <= 120000 &&
      poblacionNum <= 10000 &&
      !esPropietarioBool
    ) {
      const ayuda = Math.min(10800, precioNum * 0.2); // Ayuda máxima o el 20% del precio
      setResultado(
        `¡Enhorabuena! Cumples los requisitos. Ayuda estimada: ${ayuda.toFixed(
          2
        )} €.\nRecuerda que debes residir en la vivienda al menos 5 años.`
      );
    } else {
      setResultado('No cumples con los requisitos para esta ayuda.');
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
        <AnuncioInt/>
      <Text style={styles.title}>Simulador Ayuda a la Adquisición</Text>

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
        placeholder="Ingresa tus ingresos anuales"
        style={styles.input}
      />

      <Text>Precio de la vivienda (€):</Text>
      <TextInput
        value={precioVivienda}
        onChangeText={setPrecioVivienda}
        keyboardType="numeric"
        placeholder="Ingresa el precio de la vivienda"
        style={styles.input}
      />

      <Text>¿Eres propietario o usufructuario de otra vivienda? (S/N):</Text>
      <TextInput
        value={esPropietario}
        onChangeText={setEsPropietario}
        placeholder="Escribe 'S' o 'N'"
        style={styles.input}
      />

      <Text>Población del municipio:</Text>
      <TextInput
        value={poblacion}
        onChangeText={setPoblacion}
        keyboardType="numeric"
        placeholder="Población del municipio"
        style={styles.input}
      />

      <Button title="Simular" onPress={handleSimulacion} />

     
      {resultado && (
             <>
               <Text style={styles.result}>{resultado}</Text>
               {resultado.includes('Cumples los requisitos') && (
                 <TouchableOpacity
                   onPress={() => navigation.navigate('InformeAyudaAdquisicion', { 
                     edad, 
                     ingresos,
                     precioVivienda,
                     esPropietario,
                     poblacion, 
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
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 22,
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
  letra:{fontSize:16, color:'white',fontWeight:'bold'},
  letras: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
  },
});

export default SimuladorAyudaJovenesAdquisicion;
