import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorPensionNoContributiva: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function PensionNoContributiva() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Pensión no contributiva de invalidez</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Prestación económica dirigida a personas con discapacidad igual o
          superior al 65% que carecen de ingresos suficientes.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Edad: entre 18 y 64 años.{"\n"}- Residencia legal en España durante
          al menos 5 años.{"\n"}- Estar afectado de un grado de discapacidad
          igual o superior al 65%.{"\n"}- Los ingresos familiares deben estar
          por debajo de los límites establecidos según la normativa vigente del
          IMSERSO.
        </Text>

        <Text style={styles.subtitle}>Cuantías</Text>
        <Text style={styles.content}>
          Las cuantías de las pensiones de invalidez y jubilación en su
          modalidad no contributiva se actualizan anualmente según la normativa
          del IMSERSO y los Presupuestos Generales del Estado. La cuantía
          individual se establece en función del número de beneficiarios en el
          domicilio y de sus rentas personales o de la unidad económica de
          convivencia, sin poder ser inferior al mínimo legal (aproximadamente
          el 25% de la cuantía básica). Los beneficiarios con grado de
          discapacidad igual o superior al 75% y que necesiten asistencia de
          otra persona pueden recibir un complemento adicional.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La solicitud se realiza en las oficinas del IMSERSO o de los servicios
          sociales de cada{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://imserso.es/pnc-prestaciones-subvenciones/donde-solicitar-pension-no-contributiva-pnc"
              )
            }
          >
            comunidad autónoma
          </Text>
          . Se debe presentar documentación médica y económica.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulada por el Real Decreto Legislativo 1/2013, de 29 de noviembre.
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho a la pensión no contributiva? Puedes
          probar nuestro simulador:
        </Text>
        <Button
          title="Ir al simulador"
          onPress={() => navigation.navigate("SimuladorPensionNoContributiva")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f4f8", // Fondo suave y amigable
  },
  card: {
    backgroundColor: "#f9f1b9",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2a9d8f",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1f5ef8",
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    fontSize: 20,
    lineHeight: 26,
    color: "#6c757d",
    textAlign: "justify",
  },
  link: {
    color: "#2a9d8f",
    textDecorationLine: "underline",
  },
});
