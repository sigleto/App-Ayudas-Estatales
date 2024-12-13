import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useRoute, RouteProp } from '@react-navigation/native';
import AnuncioRecompensado from '../Anuncios/AnuncioRecompensado'; // Importa el componente del anuncio

// Definición de parámetros de la ruta 
type RouteParams = {
  matriculado: string;
  residenciaLejana: string;
  estudiosPresenciales: string;
  ingresos: string;
  resultado: string;
};

const InformeBecaResidencia: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { matriculado, residenciaLejana, estudiosPresenciales, ingresos, resultado } = route.params || {};
  const [recompensaGanada, setRecompensaGanada] = useState(false); // Estado para la recompensa

  const manejarRecompensa = (reward: { type: string; amount: number }) => {
    console.log(`Recompensa obtenida: ${reward.type}, cantidad: ${reward.amount}`);
    setRecompensaGanada(true);
  };

  const generarPDF = async () => {
    try {
      const contenidoHTML = `
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #0077b6; }
            h2, h3 { color: #444; }
            p { line-height: 1.5; }
            .highlight { font-weight: bold; color: #388e3c; }
          </style>
        </head>
        <body>
          <h1>Informe de Simulación</h1>
          <h2>Beca de Residencia</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>¿Estás matriculado en estudios postobligatorios o universitarios?</strong> ${matriculado === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>¿Tu residencia habitual está lejos del centro de estudios?</strong> ${residenciaLejana === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>¿Estás cursando estudios presenciales?</strong> ${estudiosPresenciales === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>Ingresos familiares:</strong> ${ingresos} €</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>La Beca de Residencia está destinada a estudiantes que deben trasladarse lejos de su residencia habitual para cursar estudios presenciales. Esta beca considera factores como la matriculación, distancia de residencia, tipo de estudios e ingresos familiares.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Consulta los requisitos detallados en la página oficial del organismo correspondiente.</li>
            <li>Reúne documentos como comprobante de matrícula, declaración de la renta y justificantes de residencia.</li>
            <li>Accede al formulario en línea disponible en la web oficial.</li>
            <li>Completa el formulario, adjunta los documentos requeridos y envíalo.</li>
            <li>Guarda el justificante de la solicitud para futuros seguimientos.</li>
          </ol>
          <p>Nota: Este informe tiene un propósito informativo y no garantiza la concesión de la beca. Verifica siempre con las autoridades competentes.</p>
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
      {!recompensaGanada && (
        <AnuncioRecompensado onRewardEarned={manejarRecompensa} />
      )}
      {recompensaGanada && (
        <TouchableOpacity onPress={generarPDF} style={styles.boton}>
          <Text style={styles.botonTexto}>Descargar Informe en PDF</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0077b6', textAlign: 'center', marginBottom: 20 },
  resultado: { fontSize: 18, color: '#333', textAlign: 'center', marginVertical: 20 },
  boton: { backgroundColor: '#0077b6', padding: 15, borderRadius: 5, marginTop: 20 },
  botonTexto: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default InformeBecaResidencia;
