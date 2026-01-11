import React, { useState } from "react";
import {
  Share,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnuncioInt from "../Anuncios/AnuncioIntersticial";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //

const SimuladorMedidasSectoriales: React.FC = () => {
  const [sector, setSector] = useState<string>(""); // Ejemplo: vino, frutas, hortalizas, lácteos
  const [produccionAnual, setProduccionAnual] = useState<string>(""); // Producción en toneladas o litros
  const [impactoAmbiental, setImpactoAmbiental] = useState<string>("N"); // S o N
  const [calidadProducto, setCalidadProducto] = useState<string>("N"); // S o N
  const [innovacion, setInnovacion] = useState<string>("N"); // S o N
  const [organizacion, setOrganizacion] = useState<string>("N"); // S o N
  const [planMejora, setPlanMejora] = useState<string>("N"); // S o N
  const [resultado, setResultado] = useState<string>("");
  const navegacion = useNavigation();

  const handleSubmit = () => {
    const produccionNum = parseFloat(produccionAnual);

    // Validaciones de entrada
    if (
      !sector ||
      isNaN(produccionNum) ||
      !impactoAmbiental ||
      !calidadProducto ||
      !innovacion ||
      !organizacion ||
      !planMejora
    ) {
      setResultado("Por favor, completa todos los campos correctamente.");
      return;
    }

    if (
      !["S", "N"].includes(impactoAmbiental.toUpperCase()) ||
      !["S", "N"].includes(calidadProducto.toUpperCase()) ||
      !["S", "N"].includes(innovacion.toUpperCase()) ||
      !["S", "N"].includes(organizacion.toUpperCase()) ||
      !["S", "N"].includes(planMejora.toUpperCase())
    ) {
      setResultado("Las respuestas deben ser S o N.");
      return;
    }

    // Criterios de elegibilidad
    const esSectorElegible = [
      "vino",
      "frutas",
      "hortalizas",
      "lácteos",
      "oliva",
      "apicultura",
    ].includes(sector.toLowerCase());
    const produccionValida = produccionNum > 0;
    const compromisoAmbiental = impactoAmbiental.toUpperCase() === "S";
    const enfoqueCalidad = calidadProducto.toUpperCase() === "S";
    const incluyeInnovacion = innovacion.toUpperCase() === "S";
    const parteDeOrganizacion = organizacion.toUpperCase() === "S";
    const incluyePlanMejora = planMejora.toUpperCase() === "S";

    if (
      esSectorElegible &&
      produccionValida &&
      compromisoAmbiental &&
      enfoqueCalidad &&
      incluyeInnovacion &&
      parteDeOrganizacion &&
      incluyePlanMejora
    ) {
      setResultado(
        "¡Puedes solicitar medidas sectoriales de la PAC! Contacta con tu organización sectorial o comunidad autónoma para más detalles."
      );
    } else {
      setResultado(
        "No cumples todos los requisitos para las medidas sectoriales de la PAC. Revisa los criterios o consulta con una organización sectorial."
      );
    }
  };

  React.useEffect(() => {
    Alert.alert(
      "Aviso importante",
      "Este simulador es una herramienta orientativa y no contempla necesariamente todos los requisitos específicos aplicables. Consulta siempre con tu organización sectorial.",
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
    <ScrollView style={styles.container}>
      <AnuncioInt />
      <TouchableOpacity onPress={shareApp} style={styles.shareIcon}>
        <MaterialCommunityIcons
          name="share-variant"
          size={24}
          color="#007BFF"
        />
      </TouchableOpacity>
      <Text style={styles.title}>Simulador Medidas Sectoriales de la PAC</Text>

      <Text>Sector de producción (ejemplo: vino, frutas, lácteos):</Text>
      <TextInput
        value={sector}
        onChangeText={setSector}
        placeholder="Ingresa tu sector"
        style={styles.input}
      />

      <Text>Producción anual (en toneladas o litros):</Text>
      <TextInput
        value={produccionAnual}
        onChangeText={setProduccionAnual}
        keyboardType="numeric"
        placeholder="Ingresa la cantidad producida"
        style={styles.input}
      />

      <Text>¿Tu actividad tiene impacto ambiental positivo? (S/N):</Text>
      <TextInput
        value={impactoAmbiental}
        onChangeText={setImpactoAmbiental}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Cumples estándares de calidad certificados? (S/N):</Text>
      <TextInput
        value={calidadProducto}
        onChangeText={setCalidadProducto}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Incluyes innovación tecnológica o de procesos? (S/N):</Text>
      <TextInput
        value={innovacion}
        onChangeText={setInnovacion}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>
        ¿Formas parte de una organización sectorial reconocida? (S/N):
      </Text>
      <TextInput
        value={organizacion}
        onChangeText={setOrganizacion}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Tienes un plan de mejora o inversión en marcha? (S/N):</Text>
      <TextInput
        value={planMejora}
        onChangeText={setPlanMejora}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Button title="Verificar" onPress={handleSubmit} />

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
    backgroundColor: "#e8f5e9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#388e3c",
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
    color: "#2e7d32",
    textAlign: "center",
    fontWeight: "bold",
  },
  boton: {
    backgroundColor: "#1b5e20",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "40%",
    marginTop: 20,
    height: 40,
  },
  letra: { fontSize: 16, color: "white", fontWeight: "bold" },
  shareIcon: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});

export default SimuladorMedidasSectoriales;
