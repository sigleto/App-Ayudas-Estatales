import React from "react";
import { ScrollView, View, Text, StyleSheet, Linking } from "react-native";

const KitDigital = () => (
  <ScrollView style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.title}>Kit Digital 2026</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.text}>
          Subvenciones dirigidas a autónomos y pymes para impulsar su
          digitalización, mejorar procesos internos, aumentar su competitividad
          y adoptar tecnologías avanzadas, incluyendo herramientas de
          Inteligencia Artificial y automatización.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Segmentos y Ayudas (2026)</Text>
        <Text style={styles.text}>
          • Segmento I (10–49 empleados): Hasta 12.000 €
        </Text>
        <Text style={styles.text}>
          • Segmento II (3–9 empleados): Hasta 6.000 €
        </Text>
        <Text style={styles.text}>
          • Segmento III (0–2 empleados): Hasta 3.000 € (actualizado)
        </Text>
        <Text style={styles.text}>
          *Los segmentos IV y V (medianas empresas) ya no están activos en 2026.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Requisitos Principales</Text>
        <Text style={styles.text}>• Ser pyme, micropyme o autónomo</Text>
        <Text style={styles.text}>• Antigüedad mínima de 6 meses</Text>
        <Text style={styles.text}>
          • Estar al corriente de obligaciones tributarias y con la Seguridad
          Social
        </Text>
        <Text style={styles.text}>
          • No estar en situación de empresa en crisis
        </Text>
        <Text style={styles.text}>
          • No superar los límites de ayudas del régimen de minimis
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plazos (vigentes en 2026)</Text>
        <Text style={styles.text}>
          • Segmento III: Convocatoria abierta hasta el 31 de diciembre de 2026
        </Text>
        <Text style={styles.text}>
          • Segmentos I y II: Convocatorias activas mientras existan fondos
        </Text>
        <Text style={styles.text}>
          *El programa continúa ampliándose gracias a la financiación Next
          Generation EU.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
        <Text style={styles.text}>
          La solicitud se realiza a través de la plataforma{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://www.acelerapyme.gob.es/kit-digital")
            }
          >
            Acelera Pyme – Kit Digital
          </Text>
          . Es necesario completar el test de autodiagnóstico y presentar la
          documentación obligatoria.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Novedades 2026</Text>
        <Text style={styles.text}>
          • Aumento del bono digital para autónomos (hasta 3.000 €)
        </Text>
        <Text style={styles.text}>
          • Nuevas soluciones de Inteligencia Artificial y automatización
        </Text>
        <Text style={styles.text}>
          • Posibilidad de sustituir soluciones ya instaladas por versiones más
          avanzadas
        </Text>
        <Text style={styles.text}>
          • Tramitación más rápida y seguimiento electrónico completo
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Normativa</Text>
        <Text style={styles.text}>
          Programa financiado por los fondos Next Generation EU dentro del Plan
          de Recuperación, Transformación y Resiliencia. Gestionado por Red.es.
        </Text>
      </View>
    </View>
  </ScrollView>
);

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

export default KitDigital;
