import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import AnuncioRecompensado from '../Anuncios/AnuncioRecompensado';
import { useRoute, RouteProp } from '@react-navigation/native';

type RouteParams = {
  discapacidad: string;
  seguroSocial: string;
  sistemaSocial: string;
  resultado: string;
};

const InformeAsistenciaSanitaria: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { discapacidad, seguroSocial, sistemaSocial, resultado } = route.params || {};
  const [recompensaGanada, setRecompensaGanada] = useState(false);

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
            h1 { color: #2a9d8f; }
            h2, h3 { color: #444; }
            p { line-height: 1.5; }
            .highlight { font-weight: bold; color: #c13855; }
          </style>
        </head>
        <body>
          <h1>Informe de Simulación</h1>
          <h2>Asistencia Sanitaria</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>Grado de discapacidad:</strong> ${discapacidad}%</li>
            <li><strong>Seguro social:</strong> ${seguroSocial === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>Incluido en el sistema de Seguridad Social:</strong> ${sistemaSocial === 'S' ? 'Sí' : 'No'}</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>La asistencia sanitaria se otorga a personas que cumplen ciertos requisitos de discapacidad y situación social, garantizando acceso a servicios médicos esenciales.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Reúne los documentos necesarios (certificado de discapacidad, identificación, etc.).</li>
            <li>Consulta con el centro de salud o administración pública correspondiente.</li>
            <li>Completa el formulario de solicitud según las indicaciones proporcionadas.</li>
            <li>Entrega los documentos requeridos y espera la resolución.</li>
          </ol>
          <p>Nota: Este informe es meramente informativo y no sustituye la consulta oficial.</p>
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
  title: { fontSize: 24, fontWeight: 'bold', color: '#2a9d8f', textAlign: 'center', marginBottom: 20 },
  resultado: { fontSize: 18, color: '#333', textAlign: 'center', marginVertical: 20 },
  boton: { backgroundColor: '#c13855', padding: 15, borderRadius: 5, marginTop: 20 },
  botonTexto: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default InformeAsistenciaSanitaria;
