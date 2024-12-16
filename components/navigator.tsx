// navigator.jsx
import React from 'react';

import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';


import ListadoAyudas from './ListadoAyudas';
import SubsidiosDesempleo from './listado/SubsidiosDesempleo';
import PrestacionesJubilacion from './listado/PrestacionesJubilacion';
import AyudasVivienda from './listado/AyudasVivienda';
import AyudaDescendientes from './listado/PrestacionesDescendientes';
import BecasEstudio from './listado/BecasEstudio';
import Emprendedores from './listado/Emprendedores';
import Discapacidad from './listado/Discapacidad';
import PrestacionContributiva from './desgloseAyudas/Desempleo/PrestaciónContributiva';
import SubsidiosPorDesempleo from './desgloseAyudas/Desempleo/SubsidiosPorDesempleo';
import Aval20PorCiento from './desgloseAyudas/Vivienda/Aval20porciento';
import AyudasParaJovenes from './desgloseAyudas/Vivienda/AyudaParaJovenes';
import AyudasAlAlquiler from './desgloseAyudas/Vivienda/AyudasAlAlquiler';
import BecaGeneral from './desgloseAyudas/Educación/BecaGeneral';
import BecaApoyoEducativo from './desgloseAyudas/Educación/BecaApoyoEducativo';
import BecaResidencia from './desgloseAyudas/Educación/BecaResidencia';
import AyudaNacimientoAdopcion from './desgloseAyudas/PrestacionDescendientes/AyudaNacimientoAdopcion';
import IngresoMinimoVital from './desgloseAyudas/Sociales/IngresoMinimoVital';
import PensionNoContributiva from './desgloseAyudas/Discapacidad/PensionNoContributiva';
import SubsidiosEspecificos from './desgloseAyudas/Discapacidad/SubsidiosEspecificos';
import PrestacionHijoDiscapacidad from './desgloseAyudas/PrestacionDescendientes/PrestacionHijoDiscapacidad';
import EnisaEmprendedores from './desgloseAyudas/Emprendedores/EnisaEmprendedores';
import KitDigital from './desgloseAyudas/Emprendedores/KitDigital';
import LineasICO from './desgloseAyudas/Emprendedores/LineasICO';
import PymeInvierte from './desgloseAyudas/Emprendedores/PymeInvierte';
import Home from './Home';
import DescargoResponsabilidad from './DescargoResponsabilidad';
import PoliticaPrivacidad from './PoliticaPrivacidad';
import AyudasSociales from './listado/AyudasSociales';
import BonoJovenAlquiler from './desgloseAyudas/Sociales/BonoJovenAlquiler';
import LeyDependencia from './desgloseAyudas/Sociales/LeyDependencia';
import Presentacion1 from './Presentacion/Presentacion1';
import FormularioGeneral from './SimuladorGeneral/FormularioGeneral';
import ComplementoAyudaInfancia from './desgloseAyudas/PrestacionDescendientes/ComplementoAyudaInfancia';
import BonoCulturalJoven from './desgloseAyudas/Cultura/BonoCulturalJoven';
import Cultura from './listado/Cultura';
import AyudasPAC from './listado/AyudasAgricolas';
import AyudasDesacopladas from './desgloseAyudas/Agrícolas/AyudasDesacopladas';
import MedidasDesarrolloRural from './desgloseAyudas/Agrícolas/MedidasDesarrolloRural';







import SimuladorIngresoMinimoVital from './Simuladores/SimuladorIngresoMinimoVital';
import SimuladorLeyDeDependencia from './Simuladores/SimuladorLeyDeDependencia';
import SimuladorPensionNoContributiva from './Simuladores/SimuladorPensionNoContributiva';
import SimuladorSubsidioMovilidad from './Simuladores/SimuladorSubsidioMovilidad';
import SimuladorAsistenciaSanitaria from './Simuladores/SimuladorAsistenciaSanitaria';
import SimuladorBecaApoyoEducativo from './Simuladores/SimuladorBecaApoyoEducativo';
import SimuladorBecaGeneral from './Simuladores/SimuladorBecaGeneral';
import SimuladorBecaResidencia from './Simuladores/SimuladorBecaResidencia';
import SimuladorAyudaNacimiento from './Simuladores/SimuladorAyudaNacimiento';
import SimuladorPrestacionHijoDiscapacidad from './Simuladores/SimuladorPrestacionHijoDiscapacidad';
import SimuladorAyudaJovenesAlquiler from './Simuladores/SimuladorAyudaJovenesAlquiler';
import SimuladorAyudasAlquiler from './Simuladores/SimuladorAyudasAlquiler';
import SimuladorAyudaJovenesAdquisicion from './Simuladores/SimuladorAyudaJovenesAdquisicion';
import SimuladorAvalHipoteca from './Simuladores/SimuladorAvalHipoteca';
import SimuladorComplementoInfancia from './Simuladores/SimuladorComplementoAyudaInfancia';
import SimuladorBonoCultural from './Simuladores/SimuladorBonoCultural';
import SimuladorAyudasDesacopladas from './Simuladores/SimuladorAyudasDesacopladas';
import SimuladorDesarrolloRural from './Simuladores/SimuladorMedidasDesarrolloRural';
import SimuladorMedidasSectoriales from './Simuladores/SimuladorMedidasSectoriales';

import InformePensionNoContributiva from './Informes/InformePensionNoContributiva';
import InformeIngresoMinimoVital from './Informes/InformeIngresoMinimoVital';
import InformeBecaGeneral from './Informes/InformeBecaGeneral';
import InformeAyudasAlquiler from './Informes/InformeAyudasAlquiler';
import InformeLeyDependencia from './Informes/InformeLeyDependencia';
import InformeBonoJoven from './Informes/InformeBonoJoven';
import InformeAyudaAdquisicion from './Informes/InformeAyudaAdquisicion';
import InformeAvalHipoteca from './Informes/InformeAvalHipoteca';
import InformeAyudaNacimiento from './Informes/InformeAyudaNacimiento';
import InformeBecaApoyoEducativo from './Informes/InformeBecaApoyoEducativo';
import InformeAyudasDesacopladas from './Informes/InformeAyudasDesacopladas';
import InformeBecaResidencia from './Informes/InformeBecaResidencia';
import InformePrestacionHijoDiscapacidad from './Informes/InformePrestacionHijoDiscapacidad';
import InformeAsistenciaSanitaria from './Informes/InformeAsistenciaSanitaria';
import InformeSubsidioMovilidad from './Informes/InformeSubsidioMovilidad';

enableScreens();

const Stack = createStackNavigator();


    export function AyudasStack  () {
  return (
  <Stack.Navigator>
     
        <Stack.Screen name="ListadoAyudas" component={ListadoAyudas}options={{ headerShown: false }} />
        <Stack.Screen name="SubsidiosDesempleo" component={SubsidiosDesempleo}options={{ headerShown: false }} />
        <Stack.Screen name="PrestacionContributiva" component={PrestacionContributiva}options={{ headerShown: false }} />
        <Stack.Screen name="SubsidiosPorDesempleo" component={SubsidiosPorDesempleo}options={{ headerShown: false }} />    
        <Stack.Screen name="PrestacionesJubilacion" component={PrestacionesJubilacion}options={{ headerShown: false }} />
        <Stack.Screen name="AyudasVivienda" component={AyudasVivienda}options={{ headerShown: false }} />
        <Stack.Screen name="AyudaDescendientes" component={AyudaDescendientes}options={{ headerShown: false }} />
        <Stack.Screen name="BecasEstudio" component={BecasEstudio}options={{ headerShown: false }} />
        <Stack.Screen name="Emprendedores" component={Emprendedores}options={{ headerShown: false }} />
        <Stack.Screen name="Discapacidad" component={Discapacidad}options={{ headerShown: false }} />
        <Stack.Screen name="Aval20PorCiento" component={Aval20PorCiento}options={{ headerShown: false }} />
        <Stack.Screen name="AyudasParaJovenes" component={AyudasParaJovenes}options={{ headerShown: false }} />
        <Stack.Screen name="AyudasAlAlquiler" component={AyudasAlAlquiler}options={{ headerShown: false }} />
        <Stack.Screen name="BecaGeneral" component={BecaGeneral}options={{ headerShown: false }} />
        <Stack.Screen name="BecaApoyoEducativo" component={BecaApoyoEducativo}options={{ headerShown: false }} />
        <Stack.Screen name="BecaResidencia" component={BecaResidencia}options={{ headerShown: false }} />
        <Stack.Screen name="IngresoMinimoVital" component={IngresoMinimoVital}options={{ headerShown: false }} />
        <Stack.Screen name="PensionNoContributiva" component={PensionNoContributiva}options={{ headerShown: false }} />
        <Stack.Screen name="SubsidiosEspecificos" component={SubsidiosEspecificos}options={{ headerShown: false }} />
        <Stack.Screen name="AyudaNacimientoAdopcion" component={AyudaNacimientoAdopcion}options={{ headerShown: false }} />
        <Stack.Screen name="PrestacionHijoDiscapacidad" component={PrestacionHijoDiscapacidad}options={{ headerShown: false }} />
        <Stack.Screen name="EnisaEmprendedores" component={EnisaEmprendedores}options={{ headerShown: false }} />
        <Stack.Screen name="KitDigital" component={KitDigital}options={{ headerShown: false }} />
        <Stack.Screen name="LineasICO" component={LineasICO}options={{ headerShown: false }} />
        <Stack.Screen name="PymeInvierte" component={PymeInvierte}options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}options={{ headerShown: false }} />
        <Stack.Screen name="DescargoResponsabilidad" component={DescargoResponsabilidad}options={{ headerShown: false }} />
        <Stack.Screen name="PoliticaPrivacidad" component={PoliticaPrivacidad}options={{ headerShown: false }} />
        <Stack.Screen name="AyudasSociales" component={AyudasSociales}options={{ headerShown: false }} />
        <Stack.Screen name="BonoJovenAlquiler" component={BonoJovenAlquiler}options={{ headerShown: false }} />
        <Stack.Screen name="LeyDependencia" component={LeyDependencia}options={{ headerShown: false }} />
        <Stack.Screen name="ComplementoAyudaInfancia" component={ComplementoAyudaInfancia}options={{ headerShown: false }} />
        <Stack.Screen name="BonoCulturalJoven" component={BonoCulturalJoven}options={{ headerShown: false }} />
        <Stack.Screen name="Cultura" component={Cultura}options={{ headerShown: false }} />
        <Stack.Screen name="AyudasPAC" component={AyudasPAC}options={{ headerShown: false }} />
        <Stack.Screen name="AyudasDesacopladas" component={AyudasDesacopladas}options={{ headerShown: false }} />
        <Stack.Screen name="MedidasDesarrolloRural" component={MedidasDesarrolloRural}options={{ headerShown: false }} />
        

       
        
        <Stack.Screen name="SimuladorIngresoMinimoVital" component={SimuladorIngresoMinimoVital}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorLeyDeDependencia" component={SimuladorLeyDeDependencia}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorPensionNoContributiva" component={SimuladorPensionNoContributiva}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorSubsidioMovilidad" component={SimuladorSubsidioMovilidad}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAsistenciaSanitaria" component={SimuladorAsistenciaSanitaria}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorBecaApoyoEducativo" component={SimuladorBecaApoyoEducativo}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorBecaGeneral" component={SimuladorBecaGeneral}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorBecaResidencia" component={SimuladorBecaResidencia}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAyudaNacimiento" component={SimuladorAyudaNacimiento}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorPrestacionHijoDiscapacidad" component={SimuladorPrestacionHijoDiscapacidad}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAyudaJovenesAlquiler" component={SimuladorAyudaJovenesAlquiler}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAyudaJovenesAdquisicion" component={SimuladorAyudaJovenesAdquisicion}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAyudasAlquiler" component={SimuladorAyudasAlquiler}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAvalHipoteca" component={SimuladorAvalHipoteca}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorComplementoAyudaInfancia" component={SimuladorComplementoInfancia}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorBonoCultural" component={SimuladorBonoCultural}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAyudasDesacopladas" component={SimuladorAyudasDesacopladas}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorDesarrolloRural" component={SimuladorDesarrolloRural}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorMedidasSectoriales" component={SimuladorMedidasSectoriales}options={{ headerShown: false }} />
        
        <Stack.Screen name="InformePensionNoContributiva" component={InformePensionNoContributiva}options={{ headerShown: false }} />
        <Stack.Screen name="InformeIngresoMinimoVital" component={InformeIngresoMinimoVital}options={{ headerShown: false }} />
        <Stack.Screen name="InformeBecaGeneral" component={InformeBecaGeneral}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAyudasAlquiler" component={InformeAyudasAlquiler}options={{ headerShown: false }} />
        <Stack.Screen name="InformeLeyDependencia" component={InformeLeyDependencia}options={{ headerShown: false }} />
        <Stack.Screen name="InformeBonoJoven" component={InformeBonoJoven}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAyudaAdquisicion" component={InformeAyudaAdquisicion}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAvalHipoteca" component={InformeAvalHipoteca}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAyudaNacimiento" component={InformeAyudaNacimiento}options={{ headerShown: false }} />
        <Stack.Screen name="InformeBecaApoyoEducativo" component={InformeBecaApoyoEducativo}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAyudasDesacopladas" component={InformeAyudasDesacopladas}options={{ headerShown: false }} />
        <Stack.Screen name="InformeBecaResidencia" component={InformeBecaResidencia}options={{ headerShown: false }} />
        <Stack.Screen name="InformePrestacionHijoDiscapacidad" component={InformePrestacionHijoDiscapacidad}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAsistenciaSanitaria" component={InformeAsistenciaSanitaria}options={{ headerShown: false }} />
        <Stack.Screen name="InformeSubsidioMovilidad" component={InformeSubsidioMovilidad}options={{ headerShown: false }} />
       
       
       </Stack.Navigator>
);
}

    export function FormularioGeneralStack(){
  return (
    <Stack.Navigator
      initialRouteName="FormularioGeneral"
     screenOptions={{ headerShown: false }} >
    
        <Stack.Screen name="FormularioGeneral" component={FormularioGeneral}options={{ headerShown: false }} />
         <Stack.Screen name="SimuladorIngresoMinimoVital" component={SimuladorIngresoMinimoVital}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorLeyDeDependencia" component={SimuladorLeyDeDependencia}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorPensionNoContributiva" component={SimuladorPensionNoContributiva}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorSubsidioMovilidad" component={SimuladorSubsidioMovilidad}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAsistenciaSanitaria" component={SimuladorAsistenciaSanitaria}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorBecaApoyoEducativo" component={SimuladorBecaApoyoEducativo}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorBecaGeneral" component={SimuladorBecaGeneral}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorBecaResidencia" component={SimuladorBecaResidencia}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAyudaNacimiento" component={SimuladorAyudaNacimiento}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorPrestacionHijoDiscapacidad" component={SimuladorPrestacionHijoDiscapacidad}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAyudaJovenesAlquiler" component={SimuladorAyudaJovenesAlquiler}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAyudaJovenesAdquisicion" component={SimuladorAyudaJovenesAdquisicion}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAyudasAlquiler" component={SimuladorAyudasAlquiler}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorComplementoAyudaInfancia" component={SimuladorComplementoInfancia}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorBonoCultural" component={SimuladorBonoCultural}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAvalHipoteca" component={SimuladorAvalHipoteca}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorAyudasDesacopladas" component={SimuladorAyudasDesacopladas}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorDesarrolloRural" component={SimuladorDesarrolloRural}options={{ headerShown: false }} />
        <Stack.Screen name="SimuladorMedidasSectoriales" component={SimuladorMedidasSectoriales}options={{ headerShown: false }} />
      
        
        <Stack.Screen name="InformePensionNoContributiva" component={InformePensionNoContributiva}options={{ headerShown: false }} />
        <Stack.Screen name="InformeIngresoMinimoVital" component={InformeIngresoMinimoVital}options={{ headerShown: false }} />
        <Stack.Screen name="InformeBecaGeneral" component={InformeBecaGeneral}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAyudasAlquiler" component={InformeAyudasAlquiler}options={{ headerShown: false }} />
        <Stack.Screen name="InformeLeyDependencia" component={InformeLeyDependencia}options={{ headerShown: false }} />
        <Stack.Screen name="InformeBonoJoven" component={InformeBonoJoven}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAyudaAdquisicion" component={InformeAyudaAdquisicion}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAvalHipoteca" component={InformeAvalHipoteca}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAyudaNacimiento" component={InformeAyudaNacimiento}options={{ headerShown: false }} />
        <Stack.Screen name="InformeBecaApoyoEducativo" component={InformeBecaApoyoEducativo}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAyudasDesacopladas" component={InformeAyudasDesacopladas}options={{ headerShown: false }} />
        <Stack.Screen name="InformeBecaResidencia" component={InformeBecaResidencia}options={{ headerShown: false }} />
        <Stack.Screen name="InformePrestacionHijoDiscapacidad" component={InformePrestacionHijoDiscapacidad}options={{ headerShown: false }} />
        <Stack.Screen name="InformeAsistenciaSanitaria" component={InformeAsistenciaSanitaria}options={{ headerShown: false }} />
        <Stack.Screen name="InformeSubsidioMovilidad" component={InformeSubsidioMovilidad}options={{ headerShown: false }} />
     
      </Stack.Navigator>
  );
}

    export function PresentacionStack() {
  return (
    <Stack.Navigator
      initialRouteName="Presentacion1"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: { animation: "timing", config: { duration: 500 } },
          close: { animation: "timing", config: { duration: 500 } },
        },
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      }}
    >
      <Stack.Screen
        name="Presentacion1"
        component={Presentacion1}
        options={() => ({headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
    
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
          name="FormularioGeneral"
          component={FormularioGeneralStack}
          options={{  headerShown: false}}
        />
        <Stack.Screen
          name="ListadoAyudas"
          component={AyudasStack}
          options={{  headerShown: false }}
        />
      
        <Stack.Screen
          name="DescargoResponsabilidad"
          component={DescargoResponsabilidad}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PoliticaPrivacidad"
          component={PoliticaPrivacidad}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
   
  );
};


