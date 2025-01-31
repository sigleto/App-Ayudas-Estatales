import React, { useState } from "react";
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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //

type RootStackParamList = {
  Home: undefined;
  InformeSubsidioMovilidad: {
    edad: string;
    discapacidad: string;
    ingresos: string;
    usaTransporteColectivo: string;
    puedeSalirDeCasa: string;
    resultado: string;
  };
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorSubsidioMovilidad: React.FC = () => {
  const [edad, setEdad] = useState<string>("");
  const [discapacidad, setDiscapacidad] = useState<string>("");
  const [ingresos, setIngresos] = useState<string>("");
  const [usaTransporteColectivo, setUsaTransporteColectivo] =
    useState<string>("");
  const [puedeSalirDeCasa, setPuedeSalirDeCasa] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const navigation = useNavigation<NavigationProp>();

  const handleSimulacion = () => {
    const edadNum = parseInt(edad);
    const discapacidadNum = parseInt(discapacidad);
    const ingresosNum = parseFloat(ingresos);

    // Validaciones para S o N
    if (
      usaTransporteColectivo.toUpperCase() !== "S" &&
      usaTransporteColectivo.toUpperCase() !== "N"
    ) {
      setResultado(
        'Por favor, responde "S" o "N" para la dificultad de usar transporte colectivo.'
      );
      return;
    }

    if (
      puedeSalirDeCasa.toUpperCase() !== "S" &&
      puedeSalirDeCasa.toUpperCase() !== "N"
    ) {
      setResultado(
        'Por favor, responde "S" o "N" para si puedes desplazarte fuera de casa.'
      );
      return;
    }

    const usaTransporte = usaTransporteColectivo.toUpperCase() === "S";
    const puedeSalir = puedeSalirDeCasa.toUpperCase() === "S";

    if (
      isNaN(edadNum) ||
      isNaN(discapacidadNum) ||
      isNaN(ingresosNum) ||
      !usaTransporteColectivo ||
      !puedeSalirDeCasa
    ) {
      setResultado("Por favor, ingresa todos los datos correctamente.");
      return;
    }

    const iprem = 600 * 12; // IPREM mensual aproximado x 12 meses
    const limiteIngresos = iprem * 0.7; // 70% del IPREM

    if (
      edadNum >= 3 &&
      discapacidadNum >= 33 &&
      ingresosNum <= limiteIngresos &&
      usaTransporte &&
      puedeSalir
    ) {
      setResultado("Cumples con los requisitos para recibir el subsidio.");
    } else {
      setResultado("No cumples con los requisitos para este subsidio.");
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
    <ScrollView contentContainerStyle={styles.container}>
      <AnuncioInt />
      <TouchableOpacity onPress={shareApp} style={styles.shareIcon}>
        <MaterialCommunityIcons
          name="share-variant"
          size={24}
          color="#007BFF"
        />
      </TouchableOpacity>
      <Text style={styles.title}>Simulador Subsidio Movilidad</Text>

      <Text>Edad:</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />

      <Text>Grado de Discapacidad (%):</Text>
      <TextInput
        value={discapacidad}
        onChangeText={setDiscapacidad}
        keyboardType="numeric"
        placeholder="Ingresa el grado de discapacidad"
        style={styles.input}
      />

      <Text>Ingresos Anuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos anuales"
        style={styles.input}
      />

      <Text>¿Tienes dificultad para usar transporte colectivo? (S/N):</Text>
      <TextInput
        value={usaTransporteColectivo}
        onChangeText={setUsaTransporteColectivo}
        placeholder="Responde S o N"
        style={styles.input}
      />

      <Text>¿Puedes desplazarte fuera de casa? (S/N):</Text>
      <TextInput
        value={puedeSalirDeCasa}
        onChangeText={setPuedeSalirDeCasa}
        placeholder="Responde S o N"
        style={styles.input}
      />

      <Button title="Simular" onPress={handleSimulacion} />

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          {resultado.includes("Cumples con los requisitos") && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InformeSubsidioMovilidad", {
                  edad,
                  discapacidad,
                  ingresos,
                  usaTransporteColectivo,
                  puedeSalirDeCasa,
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
    </ScrollView>
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
    color: "#2a9d8f",
    textAlign: "center",
    marginTop: 111,
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

export default SimuladorSubsidioMovilidad;
