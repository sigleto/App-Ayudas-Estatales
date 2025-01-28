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
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AnuncioInt from "../Anuncios/AnuncioIntersticial";

type RootStackParamList = {
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SimuladorMovesIII: React.FC = () => {
  const [tipo, setTipo] = useState<string>("");
  const [precio, setPrecio] = useState<string>("");
  const [empresa, setEmpresa] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    Alert.alert(
      "Aviso importante",
      "Este simulador es solo una herramienta orientativa. Consulta la normativa oficial para conocer los detalles exactos de la ayuda.",
      [{ text: "Entendido" }]
    );
  }, []);

  const calcularAyuda = () => {
    const precioNum = parseFloat(precio);
    if (isNaN(precioNum) || precioNum <= 0) {
      setResultado("Por favor, introduce un precio válido.");
      return;
    }

    const tipoUpper = tipo.toUpperCase();
    const empresaUpper = empresa.toUpperCase();

    let ayuda = 0;
    let mensaje = "";

    if (tipoUpper === "COCHE") {
      ayuda = precioNum > 45000 ? 0 : 7000;
      mensaje = ayuda
        ? `Puedes recibir una ayuda de ${ayuda}€ por la compra del vehículo eléctrico.`
        : "No cumples los requisitos para recibir ayuda, ya que el precio del vehículo supera el límite permitido.";
    } else if (tipoUpper === "MOTO") {
      ayuda = 1300;
      mensaje = `Puedes recibir una ayuda de ${ayuda}€ por la compra de tu moto eléctrica.`;
    } else if (tipoUpper === "RECARGA") {
      ayuda = empresaUpper === "S" ? 80 : 70; // Empresas pueden recibir hasta 80%
      mensaje = `Puedes recibir una ayuda del ${ayuda}% del coste total de la instalación.`;
    } else {
      mensaje = "Por favor, introduce un tipo válido (COCHE, MOTO o RECARGA).";
    }

    setResultado(mensaje);
  };

  return (
    <View style={styles.container}>
      <AnuncioInt />
      <Text style={styles.title}>Simulador MOVES III</Text>

      <Text>¿Qué quieres financiar? (COCHE, MOTO, RECARGA):</Text>
      <TextInput
        value={tipo}
        onChangeText={setTipo}
        placeholder="Ejemplo: COCHE"
        style={styles.input}
      />

      <Text>Introduce el precio del vehículo o la instalación (€):</Text>
      <TextInput
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
        placeholder="Ejemplo: 30000"
        style={styles.input}
      />

      {tipo.toUpperCase() === "RECARGA" && (
        <>
          <Text>¿Eres empresa? (S/N):</Text>
          <TextInput
            value={empresa}
            onChangeText={setEmpresa}
            maxLength={1}
            placeholder="S o N"
            style={styles.input}
          />
        </>
      )}

      <Button title="Calcular ayuda" onPress={calcularAyuda} />

      {resultado && (
        <>
          <Text style={styles.result}>{resultado}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
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
});

export default SimuladorMovesIII;
