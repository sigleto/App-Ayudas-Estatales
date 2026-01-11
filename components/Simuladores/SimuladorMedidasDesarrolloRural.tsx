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

const SimuladorDesarrolloRural: React.FC = () => {
  const [ubicacion, setUbicacion] = useState<string>(""); // Rural, semiurbana
  const [tipoActividad, setTipoActividad] = useState<string>(""); // Agricultura, ganadería, emprendimiento rural
  const [empleoGenerado, setEmpleoGenerado] = useState<string>(""); // Número de empleos generados
  const [impactoAmbiental, setImpactoAmbiental] = useState<string>("N"); // S o N
  const [infraestructura, setInfraestructura] = useState<string>("N"); // S o N
  const [innovacion, setInnovacion] = useState<string>("N"); // S o N
  const [formacion, setFormacion] = useState<string>("N"); // S o N
  const [resultado, setResultado] = useState<string>("");
  const navegacion = useNavigation();

  const handleSubmit = () => {
    const empleoNum = parseInt(empleoGenerado);

    // Validaciones de entrada
    if (
      !ubicacion ||
      !tipoActividad ||
      isNaN(empleoNum) ||
      !impactoAmbiental ||
      !infraestructura ||
      !innovacion ||
      !formacion
    ) {
      setResultado("Por favor, completa todos los campos correctamente.");
      return;
    }

    if (
      !["S", "N"].includes(impactoAmbiental.toUpperCase()) ||
      !["S", "N"].includes(infraestructura.toUpperCase()) ||
      !["S", "N"].includes(innovacion.toUpperCase()) ||
      !["S", "N"].includes(formacion.toUpperCase())
    ) {
      setResultado("Las respuestas deben ser S o N.");
      return;
    }

    // Criterios de elegibilidad
    const esUbicacionRural = ["rural", "semiurbana"].includes(
      ubicacion.toLowerCase()
    );
    const actividadValida = [
      "agricultura",
      "ganadería",
      "emprendimiento rural",
    ].includes(tipoActividad.toLowerCase());
    const generaEmpleo = empleoNum > 0;
    const compromisoAmbiental = impactoAmbiental.toUpperCase() === "S";
    const mejoraInfraestructuras = infraestructura.toUpperCase() === "S";
    const incluyeInnovacion = innovacion.toUpperCase() === "S";
    const fomentaFormacion = formacion.toUpperCase() === "S";

    if (
      esUbicacionRural &&
      actividadValida &&
      generaEmpleo &&
      compromisoAmbiental &&
      mejoraInfraestructuras &&
      incluyeInnovacion &&
      fomentaFormacion
    ) {
      setResultado(
        "¡Puedes solicitar medidas de desarrollo rural de la PAC! Consulta con tu comunidad autónoma para conocer los pasos específicos."
      );
    } else {
      setResultado(
        "No cumples todos los requisitos para las medidas de desarrollo rural de la PAC. Por favor, revisa los criterios o consulta con tu comunidad autónoma."
      );
    }
  };

  React.useEffect(() => {
    Alert.alert(
      "Aviso importante",
      "Este simulador es una herramienta orientativa y no contempla necesariamente todos los requisitos específicos aplicables. Consulta siempre con tu comunidad autónoma.",
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
      <Text style={styles.title}>
        Simulador Medidas de Desarrollo Rural de la PAC
      </Text>

      <Text>Ubicación de tu proyecto (rural/semiurbana):</Text>
      <TextInput
        value={ubicacion}
        onChangeText={setUbicacion}
        placeholder="Rural o semiurbana"
        style={styles.input}
      />

      <Text>
        Tipo de actividad (agricultura, ganadería, emprendimiento rural):
      </Text>
      <TextInput
        value={tipoActividad}
        onChangeText={setTipoActividad}
        placeholder="Ingresa tu actividad"
        style={styles.input}
      />

      <Text>Número de empleos generados:</Text>
      <TextInput
        value={empleoGenerado}
        onChangeText={setEmpleoGenerado}
        keyboardType="numeric"
        placeholder="Ingresa el número de empleos"
        style={styles.input}
      />

      <Text>¿Tu proyecto tiene impacto ambiental positivo? (S/N):</Text>
      <TextInput
        value={impactoAmbiental}
        onChangeText={setImpactoAmbiental}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Mejora las infraestructuras rurales? (S/N):</Text>
      <TextInput
        value={infraestructura}
        onChangeText={setInfraestructura}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Introduce innovación tecnológica o de procesos? (S/N):</Text>
      <TextInput
        value={innovacion}
        onChangeText={setInnovacion}
        placeholder="S o N"
        style={styles.input}
        maxLength={1}
      />

      <Text>¿Fomenta formación o capacitación de los involucrados? (S/N):</Text>
      <TextInput
        value={formacion}
        onChangeText={setFormacion}
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
    backgroundColor: "#e3f2fd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e88e5",
    marginBottom: 20,
    marginTop: 118,
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
    backgroundColor: "#1565c0",
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

export default SimuladorDesarrolloRural;
