import React, { useState, useEffect } from "react";
import {
  Share,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnuncioInt from "../Anuncios/AnuncioIntersticial";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //

const SimuladorComplementoInfancia: React.FC = () => {
  const [numMenores, setNumMenores] = useState<string>(""); // Número de menores a cargo
  const [ingresos, setIngresos] = useState<string>(""); // Ingresos familiares
  const [resultado, setResultado] = useState<string>("");
  const navegacion = useNavigation();

  const handleSimulacion = () => {
    const numMenoresNum = parseInt(numMenores, 10);
    const ingresosNum = parseFloat(ingresos);

    // Validaciones iniciales
    if (!numMenores || !ingresos) {
      setResultado("Por favor, completa todos los campos.");
      return;
    }

    if (isNaN(numMenoresNum) || isNaN(ingresosNum)) {
      setResultado("Asegúrate de ingresar valores numéricos válidos.");
      return;
    }

    // Lógica de simulación
    const umbralIngresos = 32100; // Ejemplo: umbral para 2 adultos y 2 niños
    let ayudaTotal = 0;

    if (ingresosNum <= umbralIngresos) {
      for (let i = 0; i < numMenoresNum; i++) {
        if (i === 0) ayudaTotal += 115; // Por cada menor de 3 años
        else if (i < 6) ayudaTotal += 80.5; // Por cada menor entre 3 y 6 años
        else ayudaTotal += 57.5; // Por cada menor entre 6 y 18 años
      }
    }

    setResultado(
      ingresosNum <= umbralIngresos
        ? `Cumples los requisitos. La ayuda estimada sería de €${ayudaTotal.toFixed(
            2
          )} al mes.`
        : "No cumples los requisitos para esta ayuda debido a los ingresos familiares."
    );
  };

  useEffect(() => {
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
    <ScrollView style={styles.container}>
      <AnuncioInt />
      <TouchableOpacity onPress={shareApp} style={styles.shareIcon}>
        <MaterialCommunityIcons
          name="share-variant"
          size={24}
          color="#007BFF"
        />
      </TouchableOpacity>
      <Text style={styles.title}>
        Simulador Complemento de Ayuda para la Infancia
      </Text>

      <Text>Número de menores a cargo:</Text>
      <TextInput
        value={numMenores}
        onChangeText={setNumMenores}
        keyboardType="numeric"
        placeholder="Ingresa el número de menores"
        style={styles.input}
      />

      <Text>Ingresos familiares (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa los ingresos familiares"
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0056b3",
    textAlign: "center",
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
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
    fontSize: 20,
    fontWeight: "bold",
  },
  letra: { fontSize: 16, color: "white", fontWeight: "bold" },
  shareIcon: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});

export default SimuladorComplementoInfancia;
