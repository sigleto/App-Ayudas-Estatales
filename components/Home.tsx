import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// Definir el tipo para las rutas de navegación
type RootDrawerParamList = {
  Home: undefined;
  ListadoAyudas: undefined;
  FormularioGeneral:undefined;
  
};

type HomeScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'|'FormularioGeneral'>;

const Home: React.FC = () => {
  
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const openMenu = (): void => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons 
        name="menu" 
        size={30}
        style={styles.menuIcon}
        onPress={openMenu}
      />
      <Image source={require('../assets/images/LogoJuan.png')} style={styles.logo} />
      <Image source={require('../assets/images/icono.png')} style={styles.burocraciaImage} />
      <Text style={styles.titulo}>Bienvenido a Ayudas Públicas</Text>
      <Text style={styles.descripcion}>
      Encuentra ayudas públicas para vivienda, discapacidad, empleo y más, con información clara y accesible
      </Text>

      <Text style={styles.descargo}>
        ** Esta aplicación no está afiliada ni representa a ninguna entidad gubernamental. ** 
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('ListadoAyudas')}>
        <Text style={styles.organismos}>ACCEDE A LAS DISTINTAS AYUDAS</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('FormularioGeneral')}>
        <Text style={styles.organismos}>SIMULADOR GENERAL</Text>
      </TouchableOpacity>
      
   
      <View style={styles.privacidadContainer}>
        {/* Aquí podrías agregar un enlace a la política de privacidad o cualquier otro aviso */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 10,
  },
  logo: {
    width: '75%',
    height: '20%',
    marginTop: 55,
  },
  burocraciaImage: {
    width: '75%',
    height: '20%',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  descripcion: {
    textAlign: 'center',
    marginTop: 18,
    fontSize: 18,
    color: '#063931',
  },
  descargo: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 14,
    fontStyle: 'italic',
    color: 'red',
    paddingHorizontal: 10,
  },
  organismos: {
    marginTop: 18,
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 8,
    backgroundColor: "#8baaf7",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuIcon: {
    position: 'absolute',
    top: 60,
    left: 20,
    fontSize: 40,
    zIndex: 1,
  },
  privacidadContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 8,
  },
});

export default Home;