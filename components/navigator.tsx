// navigator.jsx
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';


import ListadoAyudas from './ListadoAyudas';
import SubsidiosDesempleo from './listado/SubsidiosDesempleo';
import PrestacionesJubilacion from './listado/PrestacionesJubilacion';
import AyudasVivienda from './listado/AyudasVivienda';
import FamiliasNumerosas from './listado/FamiliasNumerosas';
import BecasEstudio from './listado/BecasEstudio';
import Emprendedores from './listado/Emprendedores';
import Discapacidad from './listado/Discapacidad';
import PrestacionContributiva from './desgloseAyudas/Desempleo/PrestaciónContributiva';
import SubsidiosPorDesempleo from './desgloseAyudas/Desempleo/SubsidiosPorDesempleo';
import Aval20PorCiento from './desgloseAyudas/Vivienda/Aval20porciento';
import AyudasFamiliasNumerosas from './desgloseAyudas/Vivienda/AyudaFamiliasNumerosas';
import AyudasParaJovenes from './desgloseAyudas/Vivienda/AyudaParaJovenes';
import AyudasAlAlquiler from './desgloseAyudas/Vivienda/AyudasAlAlquiler';
import PrestamosICO from './desgloseAyudas/Vivienda/PrestamosICO';
import AyudasExtraordinarias from './desgloseAyudas/Desempleo/AyudasExtraordinarias';
import BecaGeneral from './desgloseAyudas/Educación/BecaGeneral';
import BecaApoyoEducativo from './desgloseAyudas/Educación/BecaApoyoEducativo';
import BecaResidencia from './desgloseAyudas/Educación/BecaResidencia';
import AyudasNacimientoAdopcion from './desgloseAyudas/Discapacidad/AyudasNacimientoAdopcion';
import IngresoMinimoVital from './desgloseAyudas/Discapacidad/IngresoMinimoVital';
import PensionNoContributiva from './desgloseAyudas/Discapacidad/PensionNoContributiva';
import SubsidiosEspecificos from './desgloseAyudas/Discapacidad/SubsidiosEspecificos';
import PrestacionHijoDiscapacidad from './desgloseAyudas/FamiliaNumerosa/PrestacionHijoDiscapacidad';
import EnisaEmprendedores from './desgloseAyudas/Emprendedores/EnisaEmprendedores';
import JovenesEmprendedores from './desgloseAyudas/Emprendedores/JovenesEmprendedores';
import KitDigital from './desgloseAyudas/Emprendedores/KitDigital';
import LineasICO from './desgloseAyudas/Emprendedores/LineasICO';
import PymeInvierte from './desgloseAyudas/Emprendedores/PymeInvierte';
import Home from './Home';
import DescargoResponsabilidad from './DescargoResponsabilidad';
import PoliticaPrivacidad from './PoliticaPrivacidad';


enableScreens();


const Stack = createStackNavigator();




export function AyudasStack  () {
  return (
  <Stack.Navigator>
     
        <Stack.Screen name="ListadoAyudas" component={ListadoAyudas} />
        <Stack.Screen name="SubsidiosDesempleo" component={SubsidiosDesempleo} />
        <Stack.Screen name="PrestacionContributiva" component={PrestacionContributiva} />
        <Stack.Screen name="SubsidiosPorDesempleo" component={SubsidiosPorDesempleo} />
        <Stack.Screen name="AyudasExtraordinarias" component={AyudasExtraordinarias} />
        <Stack.Screen name="PrestacionesJubilacion" component={PrestacionesJubilacion} />
        <Stack.Screen name="AyudasVivienda" component={AyudasVivienda} />
        <Stack.Screen name="FamiliasNumerosas" component={FamiliasNumerosas} />
        <Stack.Screen name="BecasEstudio" component={BecasEstudio} />
        <Stack.Screen name="Emprendedores" component={Emprendedores} />
        <Stack.Screen name="Discapacidad" component={Discapacidad} />
        <Stack.Screen name="Aval20PorCiento" component={Aval20PorCiento} />
        <Stack.Screen name="AyudasFamiliasNumerosas" component={AyudasFamiliasNumerosas} />
        <Stack.Screen name="AyudasParaJovenes" component={AyudasParaJovenes} />
        <Stack.Screen name="AyudasAlAlquiler" component={AyudasAlAlquiler} />
        <Stack.Screen name="PrestamosICO" component={PrestamosICO} />
        <Stack.Screen name="BecaGeneral" component={BecaGeneral} />
        <Stack.Screen name="BecaApoyoEducativo" component={BecaApoyoEducativo} />
        <Stack.Screen name="BecaResidencia" component={BecaResidencia} />
        <Stack.Screen name="AyudasNacimientoAdopcion" component={AyudasNacimientoAdopcion} />
        <Stack.Screen name="IngresoMinimoVital" component={IngresoMinimoVital} />
        <Stack.Screen name="PensionNoContributiva" component={PensionNoContributiva} />
        <Stack.Screen name="SubsidiosEspecificos" component={SubsidiosEspecificos} />
        <Stack.Screen name="AyudaNacimientoAdopcion" component={AyudasNacimientoAdopcion} />
        <Stack.Screen name="PrestacionHijoDiscapacidad" component={PrestacionHijoDiscapacidad} />
        <Stack.Screen name="EnisaEmprendedores" component={EnisaEmprendedores} />
        <Stack.Screen name="JovenesEmprendedores" component={JovenesEmprendedores} />
        <Stack.Screen name="KitDigital" component={KitDigital} />
        <Stack.Screen name="LineasICO" component={LineasICO} />
        <Stack.Screen name="PymeInvierte" component={PymeInvierte} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DescargoResponsabilidad" component={DescargoResponsabilidad} />
        <Stack.Screen name="PoliticaPrivacidad" component={PoliticaPrivacidad} />



        </Stack.Navigator>
);
}

export function PrincipalStack(){
  return (
   
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{  headerShown: false}}
        />
        <Stack.Screen
          name="Organismos"
          component={AyudasStack}
          options={{  headerShown: false }}
        />
      
        <Stack.Screen
          name="Descargo"
          component={DescargoResponsabilidad}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Politica"
          component={PoliticaPrivacidad}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
   
  );
};



