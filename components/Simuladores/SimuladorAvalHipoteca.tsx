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
  InformeAvalHipoteca: {
    edad: string;
    menoresACargo: string;
    residente: string;
    ingresos: string;
    patrimonio: string;
    propietario: string;
    deudas: string;
    resultado: string;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorAvalHipoteca: React.FC = () => {
  const [edad, setEdad] = useState<string>("");
  const [menoresACargo, setMenoresACargo] = useState<string>("N"); // S o N
  const [residente, setResidente] = useState<string>("N"); // S o N
  const [ingresos, setIngresos] = useState<string>("");
  const [patrimonio, setPatrimonio] = useState<string>("");
  const [propietario, setPropietario] = useState<string>("N"); // S o N
  const [deudas, setDeudas] = useState<string>("N"); // S o N
  const [resultado, setResultado] = useState<string>("");
  const navigation = useNavigation<NavigationProp>();

  const handleSubmit = () => {
    const edadNum = parseInt(edad);
    const ingresosNum = parseFloat(ingresos);
    const patrimonioNum = parseFloat(patrimonio);

    // Validaciones de entrada
    if (
      isNaN(edadNum) ||
      isNaN(ingresosNum) ||
      isNaN(patrimonioNum) ||
      !menoresACargo ||
      !residente ||
      !propietario ||
      !deudas
    ) {
      setResultado("Por favor, ingresa todos los datos correctamente.");
      return;
    }

    if (
      !["S", "N"].includes(menoresACargo.toUpperCase()) ||
      !["S", "N"].includes(residente.toUpperCase()) ||
      !["S", "N"].includes(propietario.toUpperCase()) ||
      !["S", "N"].includes(deudas.toUpperCase())
    ) {
      setResultado("Las respuestas deben ser S o N.");
      return;
    }

    // Criterios de elegibilidad
    const menorDe36OConMenores =
      edadNum < 36 || menoresACargo.toUpperCase() === "S";
    const residenteLegal = residente.toUpperCase() === "S";
    const ingresosRequeridos = ingresosNum <= 37800; // Ingresos individuales
    const patrimonioRequerido = patrimonioNum <= 100000; // Patrimonio neto
    const noPropietarioPrevio = propietario.toUpperCase() === "N"; // No haber sido propietario
    const sinDeudasCIRBE = deudas.toUpperCase() === "N"; // Sin deudas en CIRBE

    if (
      menorDe36OConMenores &&
      residenteLegal &&
      ingresosRequeridos &&
      patrimonioRequerido &&
      noPropietarioPrevio &&
      sinDeudasCIRBE
    ) {
      setResultado("¡Tienes derecho al aval del 20% de hipoteca!");
    } else {
      setResultado(
        "No cumples con los requisitos para el aval del 20% de hipoteca."
      );
    }
  };

  React.useEffect(() => {
    Alert.alert(
      "Aviso importante",
      "Este simulador es una herramienta orientativa y no contempla necesariamente todos los requisitos o condiciones específicos aplicables a cada caso particular. Por tanto, el resultado obtenido no garantiza la concesión del aval. Consulta siempre con el organismo competente.",
      [{ text: "Entendido" }]
    );
  }, []);

  const shareApp = async () => {
    try {
      await Share.share({
        message:
          "Descarga la app Ayudas Públicas 2026 y descubre todas las ayudas disponibles. ¡Haz clic aquí para descargarla! https://play.google.com/store/apps/details?id=com.sigleto.Ayudas",
      });
    } catch (error) {
      console.error("Error al compartir", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={shareApp} style={styles.shareIcon}>
        <MaterialCommunityIcons
          name="share-variant"
          size={24}
          color="#007BFF"
        />
      </TouchableOpacity>
      <Text style={styles.title}>Simulador Aval del 20% de Hipoteca</Text>
      <AnuncioInt />

      <Text>Edad:</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholder="Ingresa tu edad"
        style={styles.input}
      />

      <Text>¿Tienes menores a cargo? (S/N):</Text>
      <TextInput
        value={menoresACargo}
        onChangeText={setMenoresACargo}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>
        ¿Resides legalmente en España desde hace al menos 2 años? (S/N):
      </Text>
      <TextInput
        value={residente}
        onChangeText={setResidente}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>Ingresos anuales (€):</Text>
      <TextInput
        value={ingresos}
        onChangeText={setIngresos}
        keyboardType="numeric"
        placeholder="Ingresa tus ingresos"
        style={styles.input}
      />

      <Text>Patrimonio neto (€):</Text>
      <TextInput
        value={patrimonio}
        onChangeText={setPatrimonio}
        keyboardType="numeric"
        placeholder="Ingresa tu patrimonio neto"
        style={styles.input}
      />

      <Text>¿Has sido propietario de otra vivienda? (S/N):</Text>
      <TextInput
        value={propietario}
        onChangeText={setPropietario}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Tienes deudas en CIRBE? (S/N):</Text>
      <TextInput
        value={deudas}
        onChangeText={setDeudas}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Button title="Verificar" onPress={handleSubmit} />

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          {resultado.includes("¡Tienes derecho") && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InformeAvalHipoteca", {
                  edad,
                  menoresACargo,
                  residente,
                  ingresos,
                  patrimonio,
                  propietario,
                  deudas,
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
    backgroundColor: "#f0f4c3",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6a1b9a",
    marginBottom: 20,
    marginTop: 50,
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
    color: "#388e3c",
    textAlign: "center",
    fontWeight: "bold",
  },
  boton: {
    backgroundColor: "#8e24aa",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "40%",
    marginTop: 20,
    height: 40,
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

export default SimuladorAvalHipoteca;
