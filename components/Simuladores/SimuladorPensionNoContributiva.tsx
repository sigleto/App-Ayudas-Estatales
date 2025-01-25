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
  InformePensionNoContributiva: {
    edad: string;
    ingresos: string;
    discapacidad: string;
    resultado: string;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorPensionNoContributiva: React.FC = () => {
  const [edad, setEdad] = useState<string>("");
  const [ingresos, setIngresos] = useState<string>("");
  const [discapacidad, setDiscapacidad] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const navigation = useNavigation<NavigationProp>();

  const handleSubmit = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);
    const discapacidadNum = parseInt(discapacidad);

    if (isNaN(edadNum) || isNaN(ingresosNum) || isNaN(discapacidadNum)) {
      setResultado("Por favor, ingresa todos los datos correctamente.");
      return;
    }

    if (edadNum < 18 || edadNum > 64) {
      setResultado("La edad debe estar entre 18 y 64 años.");
      return;
    }

    if (ingresosNum >= 7250.6) {
      setResultado(
        "Tus ingresos anuales superan el límite permitido para la pensión no contributiva."
      );
      return;
    }

    if (discapacidadNum < 65) {
      setResultado(
        "Tu grado de discapacidad debe ser igual o superior al 65%."
      );
      return;
    }

    if (
      edadNum >= 18 &&
      edadNum <= 64 &&
      ingresosNum < 7250.6 &&
      discapacidadNum >= 65
    ) {
      setResultado(
        "Cumples los requisitos para solicitar la pensión no contributiva."
      );
    } else {
      setResultado(
        "No cumples los requisitos para solicitar la pensión no contributiva."
      );
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
      <Text style={styles.title}>Simulador Pensión No Contributiva</Text>
      <Text>Edad:</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />
      <Text>Ingresos Anuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos"
        style={styles.input}
      />
      <Text>Grado de Discapacidad (%):</Text>
      <TextInput
        value={discapacidad}
        onChangeText={setDiscapacidad}
        keyboardType="numeric"
        placeholder="Ingresa tu grado de discapacidad"
        style={styles.input}
      />
      <Button title="Verificar" onPress={handleSubmit} />
      {resultado && (
        <>
          <Text
            style={[
              styles.result,
              resultado.includes("Cumples") ? styles.success : styles.error,
            ]}
          >
            {resultado}
          </Text>
          {resultado.includes("Cumples los requisitos") && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InformePensionNoContributiva", {
                  edad,
                  ingresos,
                  discapacidad,
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
  container: { padding: 20, backgroundColor: "#e8f4f8" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2a9d8f",
    marginBottom: 20,
    marginTop: 111,
  },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 10, fontSize: 16 },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  success: { color: "green" },
  error: { color: "red" },
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
  letras: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  letra: { fontSize: 16, color: "white", fontWeight: "bold" },
  shareIcon: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});

export default SimuladorPensionNoContributiva;
