import React, { useState } from "react";
import {
  Share,
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnuncioInt from "../Anuncios/AnuncioIntersticial";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //

type RootStackParamList = {
  Home: undefined;
  InformeAsistenciaSanitaria: {
    discapacidad: string;
    seguroSocial: string;
    sistemaSocial: string;
    resultado: string;
  };
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorAsistenciaSanitaria: React.FC = () => {
  const [discapacidad, setDiscapacidad] = useState<string>("");
  const [seguroSocial, setSeguroSocial] = useState<string>("");
  const [sistemaSocial, setSistemaSocial] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const navigation = useNavigation<NavigationProp>();

  const handleSimulacion = () => {
    const discapacidadNum = parseInt(discapacidad);

    // Verificación de los campos
    if (
      isNaN(discapacidadNum) ||
      (seguroSocial !== "S" && seguroSocial !== "N") ||
      (sistemaSocial !== "S" && sistemaSocial !== "N")
    ) {
      setResultado("Por favor, completa todos los campos correctamente.");
      return;
    }

    // Lógica para determinar la elegibilidad para la asistencia sanitaria
    if (
      discapacidadNum >= 33 &&
      seguroSocial === "N" &&
      sistemaSocial === "S"
    ) {
      setResultado(
        "Cumples con los requisitos para recibir asistencia sanitaria."
      );
    } else {
      setResultado("No cumples con los requisitos para esta asistencia.");
    }
  };

  React.useEffect(() => {
    Alert.alert(
      "Aviso importante",
      "Este simulador es una herramienta orientativa y no contempla necesariamente todos los requisitos o condiciones específicos aplicables a cada caso particular. Por tanto, el resultado obtenido no es vinculante ni garantiza la concesión de la ayuda.\n\nPara obtener información oficial y confirmar tu situación, es imprescindible consultar con el organismo competente o acudir a las fuentes oficiales correspondientes.",
      [{ text: "Entendido" }]
    );
  }, []);

  const shareApp = async () => {
    try {
      await Share.share({
        message:
          "Descarga la app Ayudas Públicas 2025 y descubre todas las ayudas disponibles. ¡Haz clic aquí para descargarla! https://play.google.com/store/apps/details?id=com.sigleto.Ayudas",
      });
    } catch (error) {
      console.error("Error al compartir", error);
    }
  };

  return (
    <View style={styles.container}>
      <AnuncioInt />
      <TouchableOpacity onPress={shareApp} style={styles.shareIcon}>
        <MaterialCommunityIcons
          name="share-variant"
          size={24}
          color="#007BFF"
        />
      </TouchableOpacity>
      <Text style={styles.title}>Simulador Asistencia Sanitaria</Text>

      <Text>Grado de Discapacidad (%):</Text>
      <TextInput
        value={discapacidad}
        onChangeText={setDiscapacidad}
        keyboardType="numeric"
        placeholder="Ingresa el grado de discapacidad"
        style={styles.input}
      />

      <Text>¿Tienes seguro social? (S: Sí, N: No)</Text>
      <TextInput
        value={seguroSocial}
        onChangeText={(text) => setSeguroSocial(text.toUpperCase().trim())}
        maxLength={1}
        placeholder="Ingresa S o N"
        style={styles.input}
      />

      <Text>¿Estás incluido en el sistema de la Seguridad Social? (S/N):</Text>
      <TextInput
        value={sistemaSocial}
        onChangeText={setSistemaSocial}
        placeholder="Ingresa S o N"
        style={styles.input}
        maxLength={1}
      />

      <Button title="Simular" onPress={handleSimulacion} />

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          {resultado.includes("Cumples con los requisitos") && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InformeAsistenciaSanitaria", {
                  discapacidad,
                  seguroSocial,
                  sistemaSocial,
                  resultado,
                })
              }
              style={styles.boton}
            >
              <Text style={styles.letras}>GENERAR INFORME DETALLADO</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate("Home" as never)}
            style={styles.boton}
          >
            <Text style={styles.letra}>VOLVER</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f2f2f2",
    flex: 1, // Para expandir el contenedor
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2a9d8f",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4caf50",
  },
  boton: {
    backgroundColor: "#c13855", // Color de fondo llamativo
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "40%", // Ajusta el ancho del botón
    marginTop: 20,
    height: 40,
    fontSize: 20,
    fontWeight: "bold",
  },
  letra: { fontSize: 16, color: "white", fontWeight: "bold" },
  letras: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  botonCompartir: {
    backgroundColor: "#4285F4", // Un color diferente para el botón de compartir
    marginTop: 60,
  },
  shareIcon: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});

export default SimuladorAsistenciaSanitaria;
