import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useRoute, RouteProp } from '@react-navigation/native';

// Definición de parámetros de la ruta
type RouteParams = {
  edad: string;
  menoresACargo: string;
  residente: string;
  ingresos: string;
  patrimonio: string;
  propietario: string;
  deudas: string;
  resultado: string;
};

const InformeAvalHipoteca: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { edad, menoresACargo, residente, ingresos, patrimonio, propietario, deudas, resultado } = route.params || {};

  const generarPDF = async () => {
    try {
      const contenidoHTML = `
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #6a1b9a; }
            h2, h3 { color: #444; }
            p { line-height: 1.5; }
            .highlight { font-weight: bold; color: #388e3c; }
          </style>
        </head>
        <body>
          <h1>Informe de Simulación</h1>
          <h2>Aval del 20% de Hipoteca</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>Edad:</strong> ${edad}</li>
            <li><strong>¿Tienes menores a cargo?</strong> ${menoresACargo === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>¿Residente legal en España desde hace al menos 2 años?</strong> ${residente === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>Ingresos anuales:</strong> ${ingresos} €</li>
            <li><strong>Patrimonio neto:</strong> ${patrimonio} €</li>
            <li><strong>¿Has sido propietario de otra vivienda?</strong> ${propietario === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>¿Tienes deudas en CIRBE?</strong> ${deudas === 'S' ? 'Sí' : 'No'}</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>El aval del 20% de hipoteca está destinado a jóvenes y familias que cumplen criterios relacionados con la edad, ingresos, patrimonio y otras condiciones. Facilita el acceso a una financiación más favorable.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Consulta los requisitos detallados en la página oficial del organismo correspondiente.</li>
            <li>Reúne documentos como identificación oficial, declaración de la renta, y certificaciones patrimoniales.</li>
            <li>Accede al formulario en línea disponible en la web del organismo.</li>
            <li>Completa el formulario, adjunta los documentos requeridos y envíalo.</li>
            <li>Guarda el justificante de la solicitud para futuros seguimientos.</li>
          </ol>
          <p>Nota: Este informe tiene un propósito informativo y no garantiza la concesión del aval. Verifica siempre con las autoridades competentes.</p>
        </body>
        </html>
      `;

      const { uri } = await Print.printToFileAsync({ html: contenidoHTML });
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      } else {
        Alert.alert('No se puede compartir el archivo en este dispositivo.');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al generar el informe.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe del Simulador</Text>
      <Text style={styles.resultado}>{resultado}</Text>
      <TouchableOpacity onPress={generarPDF} style={styles.boton}>
        <Text style={styles.botonTexto}>Descargar Informe en PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#6a1b9a', textAlign: 'center', marginBottom: 20 },
  resultado: { fontSize: 18, color: '#333', textAlign: 'center', marginVertical: 20 },
  boton: { backgroundColor: '#8e24aa', padding: 15, borderRadius: 5, marginTop: 20 },
  botonTexto: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default InformeAvalHipoteca;
