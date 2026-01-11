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
          El Programa MOVES III es una iniciativa estatal destinada a fomentar
          la movilidad eléctrica mediante ayudas económicas para la adquisición
          de vehículos eléctricos y la instalación de infraestructuras de
          recarga.
        </Text>

        <Text style={styles.subtitle}>Personas beneficiarias</Text>
        <Text style={styles.content}>
          Pueden beneficiarse del programa, conforme a la convocatoria vigente:
          {"\n"}• Personas físicas.
          {"\n"}• Autónomos.
          {"\n"}• Empresas.
          {"\n"}• Administraciones públicas.
        </Text>

        <Text style={styles.subtitle}>Cuantía de las ayudas</Text>
        <Text style={styles.content}>
          El importe de la ayuda varía en función del tipo de vehículo, la
          existencia o no de achatarramiento, el perfil del solicitante y la
          comunidad autónoma de residencia. Las cuantías se determinan
          oficialmente en cada convocatoria o prórroga del programa.
        </Text>

        <Text style={styles.subtitle}>Requisitos generales</Text>
        <Text style={styles.content}>
          • Cumplir las condiciones establecidas en la convocatoria autonómica
          correspondiente.{"\n"}• El vehículo o infraestructura de recarga debe
          cumplir los requisitos técnicos exigidos.{"\n"}• Mantener la
          titularidad y el uso conforme a lo establecido en la normativa
          aplicable.
        </Text>

        <Text style={styles.subtitle}>Solicitud</Text>
        <Text style={styles.content}>
          La solicitud se tramita a través de los organismos habilitados por
          cada comunidad autónoma. Los plazos y condiciones pueden variar en
          función de la disponibilidad presupuestaria.
        </Text>

        <Text style={styles.content}>
          Puedes consultar la información oficial del programa en el{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://www.idae.es/ayudas-y-subvenciones/moves-iii"
              )
            }
          >
            Instituto para la Diversificación y Ahorro de la Energía (IDAE)
          </Text>
          .
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres estimar la ayuda que podrías recibir según tu caso?
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
