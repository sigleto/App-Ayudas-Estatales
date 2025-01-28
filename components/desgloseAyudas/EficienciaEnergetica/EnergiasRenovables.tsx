import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  SimuladorRenovables: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AyudaEnergiasRenovables: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Programas de Energías Renovables</Text>

        <Text style={styles.content}>
          Este programa fomenta la instalación de energías renovables,
          incluyendo autoconsumo con energía solar fotovoltaica, biogás y redes
          de calor y frío con fuentes renovables. Su objetivo es impulsar la
          transición energética hacia un modelo más sostenible y eficiente.
        </Text>

        <Text style={styles.subtitle}>Objetivos del Programa</Text>
        <Text style={styles.content}>
          • Reducir la dependencia de combustibles fósiles y emisiones de CO₂.
        </Text>
        <Text style={styles.content}>
          • Promover el autoconsumo energético y la generación distribuida.
        </Text>
        <Text style={styles.content}>
          • Fomentar la inversión en tecnologías limpias y sostenibles.
        </Text>
        <Text style={styles.content}>
          • Impulsar la creación de empleo en el sector de las energías
          renovables.
        </Text>

        <Text style={styles.subtitle}>Actuaciones Subvencionables</Text>
        <Text style={styles.content}>
          • Energía Solar Fotovoltaica: Ayudas para paneles solares en viviendas
          y empresas.
        </Text>
        <Text style={styles.content}>
          • Biogás: Subvenciones para producción de biogás a partir de residuos
          orgánicos.
        </Text>
        <Text style={styles.content}>
          • Redes de Calor y Frío: Apoyo para redes de distribución con fuentes
          renovables.
        </Text>

        <Text style={styles.subtitle}>Requisitos para Solicitar la Ayuda</Text>
        <Text style={styles.content}>
          • Ser residente en España o empresa registrada en el país.
        </Text>
        <Text style={styles.content}>
          • Presentar un proyecto viable alineado con el programa.
        </Text>
        <Text style={styles.content}>
          • Cumplir con plazos y condiciones establecidos.
        </Text>
        <Text style={styles.content}>
          • Disponer de la documentación técnica y legal requerida.
        </Text>

        <Text style={styles.subtitle}>Más Información</Text>
        <Text style={styles.content}>
          Para conocer todos los detalles, visita la página oficial del IDAE:
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://www.idae.es/ayudas-y-financiacion")
            }
          >
            IDAE - Ayudas y Financiación
          </Text>
        </Text>

        <Text style={styles.subtitle}>Simulador de Ayudas</Text>
        <Text style={styles.content}>
          ¿Quieres saber si cumples los requisitos y cuánto podrías ahorrar?
          Prueba nuestro simulador:
        </Text>
        <Button
          title="Ir al simulador"
          onPress={() => navigation.navigate("SimuladorRenovables")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  card: {
    backgroundColor: "#fff7e6",
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
    color: "#4a90e2",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#e67e22",
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    fontSize: 20,
    lineHeight: 26,
    color: "#2c3e50",
    textAlign: "justify",
  },
  link: {
    color: "#2a9d8f",
    textDecorationLine: "underline",
  },
});

export default AyudaEnergiasRenovables;
