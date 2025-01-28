import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Importa Picker desde el paquete correcto
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AnuncioInt from "../Anuncios/AnuncioIntersticial";

type RootStackParamList = {
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorRenovables: React.FC = () => {
  const [datos, setDatos] = useState({
    tipoInstalacion: "",
    potencia: "",
    ingresos: "",
  });
  const [resultado, setResultado] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    Alert.alert(
      "Información importante",
      "Este simulador proporciona una estimación basada en los criterios generales del programa. Para conocer la ayuda exacta, consulta la convocatoria oficial.",
      [{ text: "Entendido" }]
    );
  }, []);

  const manejarCambio = (nombre: string, valor: string) => {
    setDatos({
      ...datos,
      [nombre]: valor,
    });
  };

  const calcularAyuda = () => {
    const { tipoInstalacion, potencia, ingresos } = datos;
    if (!tipoInstalacion || !potencia || !ingresos) {
      setResultado("Por favor, completa todos los campos.");
      return;
    }

    let ayuda = 0;
    const potenciaNum = Number(potencia);
    const ingresosNum = Number(ingresos);

    if (isNaN(potenciaNum) || isNaN(ingresosNum)) {
      setResultado("Introduce valores numéricos válidos.");
      return;
    }

    switch (tipoInstalacion) {
      case "solar":
        ayuda = potenciaNum * 500;
        break;
      case "biogas":
        ayuda = potenciaNum * 700;
        break;
      case "calor-frio":
        ayuda = potenciaNum * 600;
        break;
      default:
        setResultado("Selecciona un tipo de instalación válido.");
        return;
    }

    if (ingresosNum < 25000) {
      ayuda *= 1.2; // Aumento de la ayuda si los ingresos son menores a 25,000 €
    }

    setResultado(`La ayuda estimada es de €${ayuda.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <AnuncioInt />
      <Text style={styles.title}>Simulador de Ayudas Renovables</Text>
      <Text style={styles.description}>
        Introduce los datos de tu instalación para estimar la ayuda disponible.
      </Text>

      <Text style={styles.label}>Tipo de Instalación:</Text>
      <Picker
        selectedValue={datos.tipoInstalacion}
        onValueChange={(itemValue: string) =>
          manejarCambio("tipoInstalacion", itemValue)
        } // Aquí especificamos el tipo de itemValue
        style={styles.input}
      >
        <Picker.Item label="Seleccione..." value="" />
        <Picker.Item label="Energía Solar Fotovoltaica" value="solar" />
        <Picker.Item label="Biogás" value="biogas" />
        <Picker.Item label="Redes de Calor y Frío" value="calor-frio" />
      </Picker>

      <Text style={styles.label}>Potencia Instalada (kW):</Text>
      <TextInput
        style={styles.input}
        value={datos.potencia}
        onChangeText={(value) => manejarCambio("potencia", value)}
        keyboardType="numeric"
        placeholder="Ejemplo: 50"
      />

      <Text style={styles.label}>Ingresos Anuales (€):</Text>
      <TextInput
        style={styles.input}
        value={datos.ingresos}
        onChangeText={(value) => manejarCambio("ingresos", value)}
        keyboardType="numeric"
        placeholder="Ejemplo: 30000"
      />

      <Button title="Calcular ayuda" onPress={calcularAyuda} />

      {resultado && <Text style={styles.result}>{resultado}</Text>}

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.boton}
      >
        <Text style={styles.letra}>VOLVER</Text>
      </TouchableOpacity>
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
  description: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
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
});

export default SimuladorRenovables;
