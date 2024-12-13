import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet,Alert,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnuncioInt from '../Anuncios/AnuncioIntersticial';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = { 
  Home: undefined;
  InformeAyudaNacimiento: {  
    residencia: string;
    ingresos: string;
    convivencia:string;
    otraPrestacion: string;
    resultado: string;
  };
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorAyudaNacimiento: React.FC = () => {
  const [residencia, setResidencia] = useState<boolean | null>(null);
  const [ingresos, setIngresos] = useState<string>('');
  const [convivencia, setConvivencia] = useState<boolean | null>(null);
  const [otraPrestacion, setOtraPrestacion] = useState<boolean | null>(null);
  const [resultado, setResultado] = useState<string>('');
  const navigation = useNavigation<NavigationProp>();
  
  const handleSimulacion = () => {
    const ingresosNum = parseFloat(ingresos);
    const limiteIngresos = 15000; // Límite aproximado de ingresos anuales

    if (
      residencia === null ||
      convivencia === null ||
      otraPrestacion === null ||
      isNaN(ingresosNum)
    ) {
      setResultado('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (
      residencia &&
      !otraPrestacion &&
      ingresosNum <= limiteIngresos &&
      (!convivencia || ingresosNum <= limiteIngresos / 2)
    ) {
      setResultado('Cumples con los requisitos para solicitar la ayuda por nacimiento o adopción.');
    } else {
      setResultado('No cumples con los requisitos para esta ayuda.');
    }
  };

  const handleBooleanInput = (text: string): boolean | null => {
    if (text.toLowerCase() === 'sí') return true;
    if (text.toLowerCase() === 'no') return false;
    return null;
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
      <Text style={styles.title}>Simulador Ayuda por Nacimiento o Adopción</Text>

      <Text>¿Resides legalmente en territorio español? (Sí/No)</Text>
      <TextInput
        value={residencia !== null ? (residencia ? 'Sí' : 'No') : ''}
        onChangeText={(text) => setResidencia(handleBooleanInput(text))}
        placeholder="Ingresa Sí o No"
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

      <Text>¿Convives con otra persona que pueda ser beneficiaria? (Sí/No)</Text>
      <TextInput
        value={convivencia !== null ? (convivencia ? 'Sí' : 'No') : ''}
        onChangeText={(text) => setConvivencia(handleBooleanInput(text))}
        placeholder="Ingresa Sí o No"
        style={styles.input}
      />

      <Text>¿Tienes derecho a prestaciones similares en otro régimen público? (Sí/No)</Text>
      <TextInput
        value={otraPrestacion !== null ? (otraPrestacion ? 'Sí' : 'No') : ''}
        onChangeText={(text) => setOtraPrestacion(handleBooleanInput(text))}
        placeholder="Ingresa Sí o No"
        style={styles.input}
      />

      <Button title="Simular" onPress={handleSimulacion} />

     
    {resultado && (
            <>
              <Text style={styles.result}>{resultado}</Text>
              {resultado.includes('Cumples con los requisitos') && (
                         <TouchableOpacity
                           onPress={() => navigation.navigate('InformeAyudaNacimiento', { 
                            residencia: residencia === true ? 'Sí' : residencia === false ? 'No' : '', 
                            ingresos,
                            convivencia: convivencia === true ? 'Sí' : convivencia === false ? 'No' : '', 
                            otraPrestacion: otraPrestacion === true ? 'Sí' : otraPrestacion === false ? 'No' : '', 
                            resultado 
                           })}
                           style={styles.boton}
                         >
                           <Text style={styles.letra}>DESCARGAR INFORME</Text>
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
    fontWeight: 'bold',
    textAlign: 'center',
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

export default SimuladorAyudaNacimiento;
