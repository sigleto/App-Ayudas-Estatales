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

type RootStackParamList = {
  SimuladorBecaGeneral: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BecaGeneral: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Beca General del Ministerio de Educación
        </Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          La Beca General del Ministerio de Educación y Formación Profesional
          está dirigida a estudiantes de enseñanzas postobligatorias, como
          bachillerato, formación profesional, enseñanzas artísticas y
          deportivas, idiomas y estudios universitarios.
        </Text>

        <Text style={styles.subtitle}>Requisitos Generales</Text>
        <Text style={styles.content}>
          • Tener nacionalidad española o de un Estado miembro de la Unión
          Europea, o cumplir los requisitos legales de residencia.{"\n"}• No
          estar en posesión de un título del mismo nivel o superior al de los
          estudios para los que se solicita la beca.{"\n"}• Estar matriculado en
          un curso completo o en el número mínimo de créditos exigidos.{"\n"}•
          Cumplir los requisitos económicos y académicos establecidos en la
          convocatoria vigente.
        </Text>

        <Text style={styles.subtitle}>Requisitos Académicos</Text>
        <Text style={styles.content}>
          Los requisitos académicos varían según el nivel de estudios y el curso
          en el que se matricule el estudiante. Se valoran, entre otros
          aspectos, la nota media del curso anterior y el porcentaje de créditos
          superados en enseñanzas universitarias, conforme a lo establecido en
          la convocatoria anual.
        </Text>

        <Text style={styles.subtitle}>Cuantías</Text>
        <Text style={styles.content}>
          La beca puede incluir distintos componentes, como cuantía fija,
          cuantía ligada a la renta, cuantía ligada a la residencia durante el
          curso y cuantía variable. Los importes exactos se determinan cada año
          en función del presupuesto y de la situación del solicitante.
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
          2. Rellenar el formulario de solicitud con los datos personales y
          académicos.{"\n"}
          3. Presentar la solicitud dentro del plazo indicado en la convocatoria
          anual.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulada por el Real Decreto 1721/2007 y por las convocatorias anuales
          de becas del Ministerio de Educación y Formación Profesional.
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si puedes cumplir los requisitos según tu situación
          personal y académica?
        </Text>

        <Button
          title="Ir al simulador"
          onPress={() => navigation.navigate("SimuladorBecaGeneral")}
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
  bold: {
    fontWeight: "bold",
  },
});

export default BecaGeneral;
