import React, { useState, useEffect } from "react";
import {
  Share,
  TextInput,
  Button,
  Text,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnuncioInt from "../Anuncios/AnuncioIntersticial";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SimuladorRehabilitacion: React.FC = () => {
  const [antiguedad, setAntiguedad] = useState<string>("");
  const [usoResidencial, setUsoResidencial] = useState<string>("");
  const [eficienciaEnergetica, setEficienciaEnergetica] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const navegacion = useNavigation();

  const handleSimulacion = () => {
    const anoConstruccion = parseInt(antiguedad);
    if (
      isNaN(anoConstruccion) ||
      !["S", "N"].includes(usoResidencial.toUpperCase()) ||
      !["S", "N"].includes(eficienciaEnergetica.toUpperCase())
    ) {
      setResultado("Por favor, completa todos los campos correctamente.");
      return;
    }

    const esAntiguo = anoConstruccion < 2007;
    const esResidencial = usoResidencial.toUpperCase() === "S";
    const mejoraEficiencia = eficienciaEnergetica.toUpperCase() === "S";

    if (esAntiguo && esResidencial && mejoraEficiencia) {
      setResultado(
        "Cumples con los requisitos para solicitar la ayuda de rehabilitación."
      );
    } else {
      setResultado(
        "No cumples con los requisitos para la ayuda de rehabilitación."
      );
    }
  };

  useEffect(() => {
    Alert.alert(
      "Aviso importante",
      "Este simulador es una herramienta orientativa y no garantiza la concesión de la ayuda. Para información oficial, consulta con el organismo competente.",
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
      <Text style={styles.title}>
        Simulador Ayuda Rehabilitación Energética
      </Text>

      <Text>¿En qué año se construyó el edificio? (Introduce un número):</Text>
      <TextInput
        value={antiguedad}
        onChangeText={setAntiguedad}
        keyboardType="numeric"
        placeholder="Ejemplo: 1995"
        style={styles.input}
      />

      <Text>¿Es un edificio de uso residencial? (S/N):</Text>
      <TextInput
        value={usoResidencial}
        onChangeText={setUsoResidencial}
        maxLength={1}
        placeholder="Ingresa S o N"
        style={styles.input}
      />

      <Text>
        ¿Las reformas incluyen mejoras en eficiencia energética? (S/N):
      </Text>
      <TextInput
        value={eficienciaEnergetica}
        onChangeText={setEficienciaEnergetica}
        maxLength={1}
        placeholder="Ingresa S o N"
        style={styles.input}
      />

      <Button title="Simular" onPress={handleSimulacion} />

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          <TouchableOpacity
            onPress={() => navegacion.navigate("Home" as never)}
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0077b6",
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
    color: "#4caf50",
    textAlign: "center",
    fontWeight: "bold",
  },
  boton: {
    backgroundColor: "#c13855",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "40%",
    marginTop: 20,
    height: 40,
  },
  letra: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  shareIcon: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});

export default SimuladorRehabilitacion;
