import React from "react";
import { ScrollView, View, Text, StyleSheet, Linking } from "react-native";

const LineasICO = () => (
  <ScrollView style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.title}>Líneas ICO 2026</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.text}>
          Financiación oficial a través del Instituto de Crédito Oficial (ICO),
          dirigida a autónomos, pymes y empresas de mayor tamaño. Las líneas se
          enfocan en inversión, liquidez, expansión internacional,
          digitalización, transición ecológica y emprendimiento innovador.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Líneas destacadas en 2026</Text>
        <Text style={styles.text}>
          • ICO Empresas y Emprendedores (inversión y circulante)
        </Text>
        <Text style={styles.text}>• ICO Internacional / Exportadores</Text>
        <Text style={styles.text}>
          • ICO-Garantía UE 2024–2031 (fondos europeos, incluye IA,
          digitalización, sostenibilidad)
        </Text>
        <Text style={styles.text}>
          • ICO Sostenibilidad y Eficiencia Energética
        </Text>
        <Text style={styles.text}>• ICO Innovación y Emprendimiento</Text>
        <Text style={styles.text}>
          • AXIS – Capital Riesgo (Fond-ICO Next Tech y Fond-ICO Global)
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recursos Disponibles (2026)</Text>
        <Text style={styles.text}>
          • Más de 35.000 millones € disponibles entre todas las líneas ICO
        </Text>
        <Text style={styles.text}>
          • Hasta 22.000 millones € gestionados en ICO-Garantía UE (2024–2031)
        </Text>
        <Text style={styles.text}>
          • Fondos específicos para digitalización, IA y transición verde
        </Text>
        <Text style={styles.text}>
          • AXIS (capital riesgo): más de 4.000 millones € para escalado
          empresarial
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Modalidades de Financiación</Text>
        <Text style={styles.text}>• Préstamos a tipo fijo o variable</Text>
        <Text style={styles.text}>• Leasing y renting</Text>
        <Text style={styles.text}>• Líneas de crédito</Text>
        <Text style={styles.text}>
          • Financiación directa ICO (proyectos de gran tamaño)
        </Text>
        <Text style={styles.text}>
          • Garantías UE para reducir riesgo y mejorar condiciones
        </Text>
        <Text style={styles.text}>• Capital riesgo a través de AXIS</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plazos y Condiciones</Text>
        <Text style={styles.text}>
          • Amortización: Entre 1 y 20 años según línea y finalidad
        </Text>
        <Text style={styles.text}>• Carencia opcional en muchos productos</Text>
        <Text style={styles.text}>
          • Tramitación bancaria con condiciones ICO + margen de la entidad
        </Text>
        <Text style={styles.text}>
          • Compromiso de sostenibilidad: objetivo del 40% de financiación verde
          2022–2027
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
        <Text style={styles.text}>
          La solicitud se realiza a través de bancos y entidades financieras
          colaboradoras. El ICO publica la relación actualizada en su web
          oficial. La entidad estudia la viabilidad y aplica las condiciones
          establecidas por el ICO.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Normativa</Text>
        <Text style={styles.text}>
          Las líneas ICO 2026 se enmarcan dentro del marco financiero del ICO y
          del programa europeo InvestEU, así como del Plan de Recuperación,
          Transformación y Resiliencia de España y del plan ICO-Garantía UE
          (2024–2031).
        </Text>
      </View>
    </View>
  </ScrollView>
);

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
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});

export default LineasICO;
