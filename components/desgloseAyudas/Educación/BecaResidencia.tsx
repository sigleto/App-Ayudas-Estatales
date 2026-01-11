import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorBecaResidencia: undefined;
  // Agrega aquí otras rutas si las tienes
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BecaResidencia: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Beca de Residencia</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          La Beca de Residencia es una ayuda económica destinada a estudiantes
          que deben residir fuera de su domicilio familiar para cursar estudios
          postobligatorios o universitarios. Su objetivo es compensar parte de
          los gastos derivados del alojamiento durante el curso académico.
        </Text>

        <Text style={styles.subtitle}>Requisitos Generales</Text>
        <Text style={styles.content}>
          • Estar matriculado en estudios postobligatorios o universitarios en
          modalidad presencial.{"\n"}• Tener residencia habitual distinta al
          domicilio familiar durante el curso académico.{"\n"}• Estar
          matriculado en un curso completo o en el mínimo de créditos exigidos.
          {"\n"}• Cumplir los requisitos económicos y académicos establecidos en
          la convocatoria vigente.{"\n"}• En el caso de estudiantes con
          discapacidad, se aplican condiciones más favorables conforme a la
          normativa.
        </Text>

        <Text style={styles.subtitle}>Cuantía</Text>
        <Text style={styles.content}>
          La cuantía de la beca se fija anualmente en la convocatoria oficial y
          puede variar en función de la renta familiar, la situación personal
          del estudiante y la disponibilidad presupuestaria.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          1. Acceder a la{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://sede.educacion.gob.es/portada.html")
            }
          >
            Sede Electrónica del Ministerio de Educación
          </Text>
          .{"\n"}
          2. Rellenar el formulario de solicitud dentro del plazo establecido en
          la convocatoria anual.{"\n"}
          3. Aportar la documentación acreditativa de la residencia durante el
          curso, si es requerida.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Incluida dentro del régimen general de becas estatales, reguladas por
          el Real Decreto 1721/2007 y por las convocatorias anuales del
          Ministerio de Educación.
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres comprobar si podrías cumplir los requisitos según tu
          situación personal?
        </Text>

        <Button
          title="Ir al simulador"
          onPress={() => navigation.navigate("SimuladorBecaResidencia")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f4f8",
  },
  card: {
    backgroundColor: "#f9f1b9",
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
    color: "#2a9d8f",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1f5ef8",
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    fontSize: 20,
    lineHeight: 26,
    color: "#6c757d",
    textAlign: "justify",
  },
  link: {
    color: "#2a9d8f",
    textDecorationLine: "underline",
  },
});

export default BecaResidencia;
