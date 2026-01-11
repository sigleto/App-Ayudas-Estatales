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
  SimuladorComplementoAyudaInfancia: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ComplementoAyudaInfancia = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Complemento de Ayuda para la Infancia 2026
        </Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Prestación económica mensual de entre 57,50 € y 115 € destinada a
          unidades de convivencia con menores a cargo y rentas bajas.{"\n"}
          En 2026 continúa siendo compatible y puede solicitarse
          independientemente del Ingreso Mínimo Vital (IMV).
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Menores de 18 años a cargo en la unidad de convivencia.{"\n"}- No
          superar el 300% de las rentas garantizadas por el IMV en 2026.{"\n"}-
          No superar el 150% del umbral de patrimonio del IMV.{"\n"}- Puede
          solicitarse incluso sin recibir IMV, siempre que la renta esté dentro
          de los límites.{"\n"}- Para perceptores de IMV o antigua prestación
          por hijo a cargo, el complemento se reconoce automáticamente si
          cumplen requisitos.
        </Text>

        <Text style={styles.subtitle}>Cuantías</Text>
        <Text style={styles.content}>
          Las cuantías vigentes para 2026 son:{"\n"}- Menores de 3 años: 115 €
          al mes.{"\n"}- Entre 3 y 6 años: 80,50 € al mes.{"\n"}- Entre 6 y 18
          años: 57,50 € al mes.{"\n"}
          {"\n"}Ejemplo: Una familia con un menor de 2 años y otro de 15 años
          recibiría 172,50 € al mes.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          El complemento puede reconocerse automáticamente en determinados
          casos.{"\n"}- <Text style={{ fontWeight: "bold" }}>Automático</Text>:
          para perceptores de IMV o prestaciones familiares si cumplen
          requisitos.{"\n"}-{" "}
          <Text style={{ fontWeight: "bold" }}>Solicitud manual</Text>: a través
          del portal del INSS. Inicia el trámite aquí:{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://imv.seg-social.es")}
          >
            Solicitar complemento ayuda infancia
          </Text>
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulada por la Ley del Ingreso Mínimo Vital y actualizada en las
          disposiciones recogidas en la Ley de Presupuestos Generales del Estado
          2026.
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres comprobar si tienes derecho al complemento en 2026? Prueba
          nuestro simulador:
        </Text>

        <Button
          title="Ir al simulador"
          onPress={() =>
            navigation.navigate("SimuladorComplementoAyudaInfancia")
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f8ff", // Fondo suave y amigable
  },
  card: {
    backgroundColor: "#dff6e8",
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
    color: "#054a91",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#0e76a8",
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
    color: "#1b9c85",
    textDecorationLine: "underline",
  },
});
export default ComplementoAyudaInfancia;
