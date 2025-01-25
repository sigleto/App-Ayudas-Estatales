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
  InformeLeyDependencia: {
    edad: string;
    gradoDependencia: string;
    resultado: string;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorLeyDeDependencia: React.FC = () => {
  const [edad, setEdad] = useState<string>("");
  const [gradoDependencia, setGradoDependencia] = useState<string>("1");
  const [resultado, setResultado] = useState<string>("");
  const navigation = useNavigation<NavigationProp>();

  const handleSubmit = () => {
    const edadNum = parseInt(edad);
    const gradoNum = parseInt(gradoDependencia);

    if (isNaN(edadNum) || isNaN(gradoNum)) {
      setResultado("Por favor, ingresa todos los datos correctamente.");
      return;
    }

    // Verificar si la persona está en situación de dependencia
    if (edadNum < 3) {
      setResultado(
        "No tienes derecho a la Ley de Dependencia, ya que no cumples con la edad mínima de 3 años."
      );
      return;
    }

    // Verificar el grado de dependencia y asignar las prestaciones
    let prestaciones = 0;
    let mensaje = "";

    switch (gradoNum) {
      case 1: // Grado I: Dependencia moderada
        prestaciones = 180;
        mensaje = "Grado I: Dependencia moderada";
        break;
      case 2: // Grado II: Dependencia severa
        prestaciones = 315;
        mensaje = "Grado II: Dependencia severa";
        break;
      case 3: // Grado III: Gran dependencia
        prestaciones = 747.25; // Actualizado para 2025
        mensaje = "Grado III: Gran dependencia";
        break;
      default:
        setResultado(
          "Por favor, ingresa un grado de dependencia válido (1, 2 o 3)."
        );
        return;
    }

    // Evaluar si la persona tiene derecho a la ayuda (conforme a los criterios de la ley)
    if (edadNum >= 3) {
      setResultado(
        `Tienes derecho a la prestación económica (${mensaje}). Cuantía estimada: €${prestaciones}/mes`
      );
    } else {
      setResultado(
        "No tienes derecho a la prestación económica según la Ley de Dependencia."
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
      <Text style={styles.title}>Simulador Ley de Dependencia</Text>

      <Text>Edad:</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />

      <Text>Grado de Dependencia (1, 2 o 3):</Text>
      <TextInput
        value={gradoDependencia}
        onChangeText={setGradoDependencia}
        keyboardType="numeric"
        placeholder="Grado de dependencia"
        style={styles.input}
      />

      <Button title="Verificar" onPress={handleSubmit} />

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          {resultado.includes("Tienes derecho") && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InformeLeyDependencia", {
                  edad,
                  gradoDependencia,
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
    backgroundColor: "#e8f4f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2a9d8f",
    marginBottom: 20,
    marginTop: 111,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
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
  shareIcon: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});

export default SimuladorLeyDeDependencia;
