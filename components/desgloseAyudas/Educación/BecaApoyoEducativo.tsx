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
  SimuladorBecaApoyoEducativo: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BecaApoyoEducativo: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Beca de Apoyo Educativo</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ayuda dirigida a estudiantes con necesidades educativas especiales
          derivadas de discapacidad, trastornos graves de conducta, trastornos
          de la comunicación o del lenguaje, trastorno del espectro autista o
          altas capacidades.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          • Tener 2 años o más en la fecha establecida en la convocatoria para
          alumnado con discapacidad, trastornos graves de conducta, trastornos
          de la comunicación o del lenguaje o trastorno del espectro autista.
          {"\n"}• Tener 6 años o más para alumnado con altas capacidades.{"\n"}•
          Estar escolarizado en un centro específico de educación especial o en
          un centro ordinario autorizado para la escolarización de alumnado con
          necesidades educativas especiales.{"\n"}• Estar matriculado en alguno
          de los estudios subvencionables.{"\n"}• Aportar certificado médico o
          informe psicopedagógico que acredite la situación del menor.{"\n"}• No
          superar los umbrales de renta y patrimonio familiar establecidos en la
          convocatoria vigente.
        </Text>

        <Text style={styles.subtitle}>Tipos de ayudas</Text>
        <Text style={styles.content}>
          Existen distintos tipos de ayudas y subsidios en función de las
          necesidades específicas de cada caso.{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://www.becaseducacion.gob.es/becas-y-ayudas/ayudas-apoyo-educativo/tipos-de-becas.html"
              )
            }
          >
            Consulta aquí los tipos de ayudas disponibles
          </Text>
          .
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          1. Acceder al portal del Ministerio de Educación y Formación
          Profesional.{"\n"}
          2. Cumplimentar el formulario de solicitud online.{"\n"}
          3. Adjuntar la documentación médica o psicopedagógica requerida.{"\n"}
          4. Presentar la solicitud dentro del plazo establecido en la
          convocatoria anual.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulada por la normativa vigente del Ministerio de Educación y
          Formación Profesional y por las convocatorias anuales de ayudas para
          alumnado con necesidades educativas especiales.
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si puedes cumplir los requisitos? Puedes probar nuestro
          simulador:
        </Text>

        <Button
          title="Ir al simulador"
          onPress={() => navigation.navigate("SimuladorBecaApoyoEducativo")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f4f8",
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

export default BecaApoyoEducativo;
