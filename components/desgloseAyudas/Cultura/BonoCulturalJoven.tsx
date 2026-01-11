import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  SimuladorBonoCultural: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BonoCulturalJoven: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bono Cultural Joven</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          El Bono Cultural Joven es una ayuda directa destinada a jóvenes que
          cumplen 18 años durante el año de la convocatoria. Consiste en una
          tarjeta prepago con un importe total de 400 €, cuyo objetivo es
          facilitar el acceso a productos y actividades culturales.
        </Text>

        <Text style={styles.subtitle}>Objetivos del programa</Text>
        <Text style={styles.content}>
          • Fomentar el acceso a la cultura y la creación de hábitos de consumo
          cultural entre la juventud.{"\n"}• Apoyar y dinamizar el sector
          cultural en todo el territorio nacional.
        </Text>

        <Text style={styles.subtitle}>¿En qué se puede gastar?</Text>
        <Text style={styles.content}>
          • 200 € para artes en vivo, patrimonio cultural y artes audiovisuales.
          {"\n"}• 100 € para productos culturales en soporte físico.{"\n"}• 100
          € para consumo digital o en línea.
        </Text>

        <Text style={styles.subtitle}>Funcionamiento</Text>
        <Text style={styles.content}>
          El Bono Cultural Joven se concede en forma de tarjeta prepago virtual,
          válida durante 12 meses desde su activación. Puede utilizarse
          únicamente en las empresas y entidades culturales adheridas al
          programa.
        </Text>
        <Text style={styles.content}>
          Las compras deben ajustarse a las categorías autorizadas y es
          obligatorio conservar o subir los justificantes de gasto según
          indiquen las condiciones de la convocatoria vigente.
        </Text>

        <Text style={styles.content}>
          Puedes consultar las entidades adheridas y la información oficial en
          la{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://www.cultura.gob.es/destacados/bono-cultural-joven.html"
              )
            }
          >
            web oficial del Bono Cultural Joven
          </Text>
          .
        </Text>

        <Text style={styles.subtitle}>Aspectos importantes</Text>
        <Text style={styles.content}>
          • No se permite la compra de libros de texto, material educativo
          reglado, equipos electrónicos ni productos de gastronomía.{"\n"}• Si
          el saldo no es suficiente, puede completarse el pago con otros medios.
          {"\n"}• El bono no permite la devolución del importe en dinero.
        </Text>

        <Text style={styles.subtitle}>Plazos y convocatoria</Text>
        <Text style={styles.content}>
          La convocatoria del Bono Cultural Joven se publica anualmente. Los
          plazos de solicitud, requisitos y condiciones concretas pueden variar
          cada año y deben consultarse en la convocatoria vigente.
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si puedes beneficiarte del Bono Cultural Joven? Prueba
          nuestro simulador:
        </Text>

        <Button
          title="Ir al simulador"
          onPress={() => navigation.navigate("SimuladorBonoCultural")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  card: {
    backgroundColor: "#fff7e6",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4a90e2",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#e67e22",
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    fontSize: 20,
    lineHeight: 26,
    color: "#2c3e50",
    textAlign: "justify",
  },
  link: {
    color: "#2a9d8f",
    textDecorationLine: "underline",
  },
});

export default BonoCulturalJoven;
