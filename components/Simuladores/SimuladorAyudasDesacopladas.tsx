import React, { useState } from "react";
import {
  Share,
  ScrollView,
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
  InformeAyudasDesacopladas: {
    hectareas: string;
    cultivo: string;
    sostenibilidad: string;
    agricultorActivo: string;
    cumpleNormativa: string;
    ubicacion: string;
    puntosSostenibilidad: string;
    practicasRegenerativas: string;
    formacionContinua: string;
    agriculturaPrecision: string;
    resultado: string;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorAyudasDesacopladas: React.FC = () => {
  const [hectareas, setHectareas] = useState<string>("");
  const [cultivo, setCultivo] = useState<string>("");
  const [sostenibilidad, setSostenibilidad] = useState<string>("N");
  const [agricultorActivo, setAgricultorActivo] = useState<string>("N");
  const [cumpleNormativa, setCumpleNormativa] = useState<string>("N");
  const [ubicacion, setUbicacion] = useState<string>("");
  const [puntosSostenibilidad, setPuntosSostenibilidad] = useState<string>("");
  const [practicasRegenerativas, setPracticasRegenerativas] =
    useState<string>("N");
  const [formacionContinua, setFormacionContinua] = useState<string>("N");
  const [agriculturaPrecision, setAgriculturaPrecision] = useState<string>("N");
  const [resultado, setResultado] = useState<string>("");
  const navigation = useNavigation<NavigationProp>();

  const handleSubmit = () => {
    const hectareasNum = parseFloat(hectareas);
    const puntosNum = parseInt(puntosSostenibilidad);

    // Validaciones de entrada
    if (
      isNaN(hectareasNum) ||
      !cultivo ||
      !sostenibilidad ||
      !agricultorActivo ||
      !cumpleNormativa ||
      !ubicacion ||
      isNaN(puntosNum) ||
      !practicasRegenerativas ||
      !formacionContinua ||
      !agriculturaPrecision
    ) {
      setResultado("Por favor, completa todos los campos correctamente.");
      return;
    }

    // Criterios de elegibilidad actualizados para 2025
    const tieneHectareas = hectareasNum > 0;
    const cumpleCultivo = [
      "trigo",
      "maíz",
      "cebada",
      "girasol",
      "legumbres",
      "hortalizas",
    ].includes(cultivo.toLowerCase());
    const criteriosSostenibilidad = sostenibilidad.toUpperCase() === "S";
    const esAgricultorActivo = agricultorActivo.toUpperCase() === "S";
    const respetaNormativa = cumpleNormativa.toUpperCase() === "S";
    const esUbicacionValida = [
      "montaña",
      "regadío",
      "secano",
      "zona desfavorecida",
    ].includes(ubicacion.toLowerCase());
    const cumplePuntosSostenibilidad = puntosNum >= 7;
    const aplicaPracticasRegenerativas =
      practicasRegenerativas.toUpperCase() === "S";
    const realizaFormacionContinua = formacionContinua.toUpperCase() === "S";
    const usaAgriculturaPrecision = agriculturaPrecision.toUpperCase() === "S";

    if (
      tieneHectareas &&
      cumpleCultivo &&
      criteriosSostenibilidad &&
      esAgricultorActivo &&
      respetaNormativa &&
      esUbicacionValida &&
      cumplePuntosSostenibilidad &&
      aplicaPracticasRegenerativas &&
      realizaFormacionContinua &&
      usaAgriculturaPrecision
    ) {
      setResultado(
        "¡Cumples los requisitos para solicitar las ayudas desacopladas de la PAC 2025! Asegúrate de presentar la solicitud a través del nuevo portal digital unificado."
      );
    } else {
      setResultado(
        "No cumples todos los requisitos actualizados para las ayudas desacopladas de la PAC 2025. Por favor, revisa los nuevos criterios o consulta con tu comunidad autónoma."
      );
    }
  };
  React.useEffect(() => {
    Alert.alert(
      "Aviso importante",
      "Este simulador es una herramienta orientativa actualizada para 2025. Consulta siempre la información oficial más reciente.",
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
      <TouchableOpacity onPress={shareApp} style={styles.shareIcon}>
        <MaterialCommunityIcons
          name="share-variant"
          size={24}
          color="#007BFF"
        />
      </TouchableOpacity>
      <Text style={styles.title}>
        Simulador Ayudas Desacopladas de la PAC 2025
      </Text>

      <Text>Número de hectáreas:</Text>
      <TextInput
        value={hectareas}
        onChangeText={setHectareas}
        keyboardType="numeric"
        placeholder="Ingresa el número de hectáreas"
        style={styles.input}
      />

      <Text>Tipo de cultivo (trigo, maíz, legumbres, etc.):</Text>
      <TextInput
        value={cultivo}
        onChangeText={setCultivo}
        placeholder="Ingresa el tipo de cultivo"
        style={styles.input}
      />

      <Text>¿Cumples criterios de sostenibilidad? (S/N):</Text>
      <TextInput
        value={sostenibilidad}
        onChangeText={setSostenibilidad}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Eres agricultor activo registrado? (S/N):</Text>
      <TextInput
        value={agricultorActivo}
        onChangeText={setAgricultorActivo}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Cumples la normativa PAC vigente? (S/N):</Text>
      <TextInput
        value={cumpleNormativa}
        onChangeText={setCumpleNormativa}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>
        Ubicación de las tierras (montaña, regadío, secano, zona desfavorecida):
      </Text>
      <TextInput
        value={ubicacion}
        onChangeText={setUbicacion}
        placeholder="Ingresa la ubicación"
        style={styles.input}
      />

      <Text>Puntos de sostenibilidad (0-10):</Text>
      <TextInput
        value={puntosSostenibilidad}
        onChangeText={setPuntosSostenibilidad}
        keyboardType="numeric"
        placeholder="Ingresa los puntos de sostenibilidad"
        style={styles.input}
      />

      <Text>¿Aplicas prácticas de agricultura regenerativa? (S/N):</Text>
      <TextInput
        value={practicasRegenerativas}
        onChangeText={setPracticasRegenerativas}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Participas en programas de formación continua? (S/N):</Text>
      <TextInput
        value={formacionContinua}
        onChangeText={setFormacionContinua}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Implementas técnicas de agricultura de precisión? (S/N):</Text>
      <TextInput
        value={agriculturaPrecision}
        onChangeText={setAgriculturaPrecision}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Button title="Verificar Elegibilidad 2025" onPress={handleSubmit} />

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          {resultado.includes("¡Cumples los requisitos") && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InformeAyudasDesacopladas", {
                  hectareas,
                  cultivo,
                  sostenibilidad,
                  agricultorActivo,
                  cumpleNormativa,
                  ubicacion,
                  puntosSostenibilidad,
                  practicasRegenerativas,
                  formacionContinua,
                  agriculturaPrecision,
                  resultado,
                })
              }
              style={styles.boton}
            >
              <Text style={styles.letras}>GENERAR INFORME DETALLADO 2025</Text>
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

// Los estilos se mantienen igual que en tu código original

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

export default SimuladorAyudasDesacopladas;
