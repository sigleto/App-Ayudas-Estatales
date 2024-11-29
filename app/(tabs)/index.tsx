import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { PrincipalStack} from '../../components/navigator';
import DescargoResponsabilidad from '@/components/DescargoResponsabilidad';
import PoliticaPrivacidad from '@/components/PoliticaPrivacidad';


enableScreens();

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      
        <Drawer.Navigator 
          initialRouteName="Principal"
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: '#f7f7f7', // Cambia el color de fondo del drawer
            },
            drawerLabelStyle: {
              fontSize: 18, // Tamaño de la fuente del label
              marginLeft: -10, // Mover el texto un poco a la izquierda
            },
            drawerActiveTintColor: '#007AFF', // Color cuando se selecciona un ítem
            drawerInactiveTintColor: '#333', // Color de ítems no seleccionados
          }}
        >
          <Drawer.Screen
            name="Inicio"
            component={PrincipalStack}
            options={{
              drawerIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              ),
              drawerLabel: 'Inicio',
            }}
          />
                          

          <Drawer.Screen
            name="Responsabilidad"
            component={DescargoResponsabilidad}
            options={{
              drawerIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="shield-alert-outline" size={size} color={color} />
              ),
              drawerLabel: 'Descargo de responsabilidad',
            }}
          />
          
          <Drawer.Screen
            name="Política de Privacidad"
            component={PoliticaPrivacidad}
            options={{
              drawerIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="file-document-outline" size={size} color={color} />
              ),
              drawerLabel: 'Política de Privacidad',
            }}
          />

        </Drawer.Navigator>
   
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
