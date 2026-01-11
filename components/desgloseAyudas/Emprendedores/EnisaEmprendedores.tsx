import React from "react";
import { ScrollView, View, Text, StyleSheet, Linking } from "react-native";

const EnisaEmprendedores = () => {
  const openGuide = () => {
    Linking.openURL(
      "https://www.enisa.es/es/financia-tu-empresa/lineas-de-financiacion/d/emprendedores"
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Línea ENISA – Emprendedores (2026)</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Préstamos participativos dirigidos a startups y pymes de reciente
            constitución que necesiten financiación para acometer inversiones en
            las fases iniciales de su proyecto empresarial. La línea
            Emprendedores forma parte de las líneas permanentes gestionadas por
            ENISA dentro del mecanismo FEPYME.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos principales</Text>
          <Text style={styles.text}>
            - Ser una pyme conforme a la definición de la UE. {"\n"}- Tener
            personalidad jurídica propia. {"\n"}- Haber sido constituida en los
            últimos 24 meses. {"\n"}- Desarrollar la actividad principal y tener
            domicilio social en España. {"\n"}- Modelo de negocio innovador o
            con clara ventaja competitiva. {"\n"}- Cofinanciar las necesidades
            financieras del proyecto. {"\n"}- Fondos propios equivalentes al
            préstamo solicitado. {"\n"}- Estructura financiera equilibrada y
            viabilidad técnica y económica. {"\n"}- Cuentas del último ejercicio
            depositadas en el registro público correspondiente. {"\n"}- No ser
            de los sectores inmobiliario o financiero.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Importe y condiciones</Text>
          <Text style={styles.text}>
            • Importe: desde 25.000 € hasta 300.000 € aproximadamente (según
            evaluación). {"\n"}• Plazo de amortización y períodos de carencia
            flexibles adaptados al proyecto. {"\n"}• Préstamos participativos
            sin necesidad de avales o garantías adicionales al plan de negocio y
            gestión profesional.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de solicitud</Text>
          <Text style={styles.text}>
            La solicitud se realiza de forma online en la web oficial de ENISA,
            dentro de la sección de financiación de empresas, adjuntando plan de
            negocio y documentación económica y legal requerida. Puedes ver toda
            la información actualizada en la web oficial:{" "}
            <Text style={styles.link} onPress={openGuide}>
              Página oficial de ENISA – Línea Emprendedores
            </Text>
            .
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            Regulado por las bases del Ministerio de Industria y Turismo y
            gestionado por ENISA dentro de su marco de préstamos participativos.
            La disponibilidad de fondos en 2026 se enmarca en el mecanismo
            FEPYME de financiación continua.
          </Text>
        </View>
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

export default EnisaEmprendedores;
