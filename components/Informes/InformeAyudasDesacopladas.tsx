import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useRoute, RouteProp } from '@react-navigation/native';
import AnuncioRecompensado from '../Anuncios/AnuncioRecompensado'; // Importa el componente del anuncio

type RouteParams = {
  hectareas: string;
  cultivo: string;
  sostenibilidad: string;
  agricultorActivo: string;
  cumpleNormativa: string;
  ubicacion: string;
  resultado: string;
};

const InformeAyudasDesacopladas: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { hectareas, cultivo, sostenibilidad, agricultorActivo, cumpleNormativa, ubicacion, resultado } = route.params || {};
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
            h1 { color: #6a1b9a; }
            h2, h3 { color: #444; }
            p { line-height: 1.5; }
            .highlight { font-weight: bold; color: #388e3c; }
          </style>
        </head>
        <body>
          <h1>Informe de Simulación</h1>
          <h2>Ayudas Desacopladas de la PAC</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>Número de hectáreas:</strong> ${hectareas}</li>
            <li><strong>Tipo de cultivo:</strong> ${cultivo}</li>
            <li><strong>¿Cumples criterios de sostenibilidad?</strong> ${sostenibilidad === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>¿Eres agricultor activo registrado?</strong> ${agricultorActivo === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>¿Cumples la normativa PAC vigente?</strong> ${cumpleNormativa === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>Ubicación de las tierras:</strong> ${ubicacion}</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>Las ayudas desacopladas de la PAC están diseñadas para apoyar a los agricultores que cumplen criterios relacionados con el tipo de cultivo, sostenibilidad, y ubicación de las tierras, entre otros.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Consulta los requisitos detallados en la página oficial de tu comunidad autónoma.</li>
            <li>Reúne documentos como certificaciones de hectáreas, justificantes de agricultor activo y cumplimiento normativo.</li>
            <li>Accede al formulario en línea disponible en la web del organismo correspondiente.</li>
            <li>Completa el formulario, adjunta los documentos requeridos y envíalo.</li>
            <li>Guarda el justificante de la solicitud para futuros seguimientos.</li>
          </ol>
          <p>Nota: Este informe tiene un propósito informativo y no garantiza la concesión de las ayudas. Verifica siempre con las autoridades competentes.</p>
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
  title: { fontSize: 24, fontWeight: 'bold', color: '#6a1b9a', textAlign: 'center', marginBottom: 20 },
  resultado: { fontSize: 18, color: '#333', textAlign: 'center', marginVertical: 20 },
  boton: { backgroundColor: '#8e24aa', padding: 15, borderRadius: 5, marginTop: 20 },
  botonTexto: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default InformeAyudasDesacopladas;
