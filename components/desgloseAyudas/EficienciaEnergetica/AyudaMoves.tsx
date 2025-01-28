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
  SimuladorMoves: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const MovesIII: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Programa MOVES III</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          El Programa MOVES III es una iniciativa del Gobierno de España que
          ofrece ayudas directas para la compra de vehículos eléctricos y la
          instalación de infraestructuras de recarga.
        </Text>

        <Text style={styles.subtitle}>¿Quién puede solicitarlo?</Text>
        <Text style={styles.content}>
          Está dirigido a particulares, autónomos, empresas y administraciones
          públicas que deseen adquirir un vehículo eléctrico o instalar puntos
          de recarga.
        </Text>

        <Text style={styles.subtitle}>Cuantías</Text>
        <Text style={styles.content}>
          • Hasta 7.000€ por la compra de un vehículo eléctrico.
        </Text>
        <Text style={styles.content}>
          • Hasta 1.300€ para motocicletas eléctricas.
        </Text>
        <Text style={styles.content}>
          • Hasta 80% de ayuda para la instalación de puntos de recarga.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          • El vehículo debe ser nuevo o con menos de 9 meses de antigüedad.
        </Text>
        <Text style={styles.content}>
          • El beneficiario debe mantener la titularidad durante al menos 2
          años.
        </Text>
        <Text style={styles.content}>
          • Las instalaciones de recarga deben estar en España.
        </Text>

        <Text style={styles.subtitle}>Solicitud</Text>
        <Text style={styles.content}>
          Para solicitar la ayuda, accede a la web oficial y revisa los plazos y
          condiciones específicas de tu comunidad autónoma.
        </Text>
        <Text style={styles.content}>
          Más información disponible en
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://www.idae.es/ayudas-y-subvenciones/moves-iii"
              )
            }
          >
            {" "}
            AQUÍ
          </Text>
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber cuánto podrías recibir con el MOVES III? Prueba nuestro
          simulador:
        </Text>
        <Button
          title="Ir al simulador"
          onPress={() => navigation.navigate("SimuladorMoves")}
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

export default MovesIII;
