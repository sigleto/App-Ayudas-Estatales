import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

const SubsidiosPorDesempleo = () => {
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Error al abrir el enlace:", err)
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Subsidios por Desempleo</Text>

        {/* Descripción */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Los subsidios por desempleo son ayudas económicas destinadas a las
            personas que han agotado su prestación contributiva o no tienen
            derecho a ella. Su objetivo es cubrir necesidades básicas mientras
            el beneficiario busca empleo.
          </Text>
        </View>

        {/* Requisitos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          <Text style={styles.text}>
            Para acceder a estas ayudas se deben cumplir requisitos generales,
            como:
          </Text>
          <Text style={styles.text}>
            • Haber agotado la prestación contributiva (si corresponde).
          </Text>
          <Text style={styles.text}>
            • Cumplir el umbral de renta establecido por la normativa vigente.
          </Text>
          <Text style={styles.text}>
            • Estar inscrito como demandante de empleo.
          </Text>
          <Text style={styles.text}>
            • Cumplir condiciones específicas según el tipo de subsidio;
            consulta siempre la normativa vigente.
          </Text>

          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/subsidio-agotamiento-prestacion-contributiva.html"
              )
            }
          >
            <Text style={styles.link}>
              Subsidio de desempleo por agotamiento de la prestación
              contributiva
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/subsidio-cotizaciones-insuficientes-he-trabajado-menos-de-un-anyo.html"
              )
            }
          >
            <Text style={styles.link}>
              Subsidio de cotizaciones insuficientes - He trabajado menos de un
              año
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/tengo-mas-de-52.html"
              )
            }
          >
            <Text style={styles.link}>
              Subsidio para personas de más de 52 años
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/subsidio-de-emigrante-retornado.html"
              )
            }
          >
            <Text style={styles.link}>
              Subsidio para personas emigrantes retornadas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/victimas-violencia-genero-o-sexual.html"
              )
            }
          >
            <Text style={styles.link}>
              Subsidio para víctimas de violencia de género o sexual
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/subsidio-agrario.html"
              )
            }
          >
            <Text style={styles.link}>
              Subsidio agrario para trabajadores en Andalucía y Extremadura
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/renta-agraria.html"
              )
            }
          >
            <Text style={styles.link}>
              Renta agraria para trabajadores en Andalucía y Extremadura
            </Text>
          </TouchableOpacity>
        </View>

        {/* Cuantías */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuantías de los Subsidios</Text>
          <Text style={styles.text}>
            Las cuantías de los subsidios se calculan según la normativa vigente
            y pueden variar en función de la duración del subsidio y la
            situación del beneficiario. Consulta siempre la información
            actualizada en el portal del SEPE.
          </Text>
        </View>

        {/* Complemento de Apoyo al Empleo */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Complemento de Apoyo al Empleo (CAE)
          </Text>
          <Text style={styles.text}>
            El CAE complementa los ingresos cuando se compatibiliza un subsidio
            por desempleo con un empleo a tiempo parcial. Las cuantías y
            condiciones se determinan según la normativa vigente.
          </Text>
        </View>

        {/* Proceso de solicitud */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de solicitud</Text>
          <Text style={styles.text}>
            • Inscribirse como demandante de empleo en el SEPE.{"\n"}• Presentar
            la solicitud del subsidio en la sede electrónica del SEPE o de forma
            presencial con cita previa.{"\n"}• Aportar la documentación
            requerida: DNI, justificantes de ingresos y, si corresponde, libro
            de familia.
          </Text>
        </View>

        {/* Normativa */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            La normativa de los subsidios por desempleo se encuentra regulada en
            el Real Decreto Legislativo 8/2015 y sus disposiciones
            complementarias. Consulta siempre la legislación y normativa vigente
            en el portal del SEPE.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f4f8", // Fondo suave
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
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1f5ef8",
    marginBottom: 8,
  },
  text: {
    fontSize: 20,
    lineHeight: 26,
    color: "#6c757d",
    textAlign: "justify",
  },
  link: {
    fontSize: 16,
    color: "#007bff",
    textDecorationLine: "underline",
    marginBottom: 5,
  },
});

export default SubsidiosPorDesempleo;
