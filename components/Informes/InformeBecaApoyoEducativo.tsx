import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useRoute, RouteProp } from '@react-navigation/native';
import AnuncioRecompensado from '../Anuncios/AnuncioRecompensado'; // Importa el componente del anuncio

type RouteParams = {
  edad: string;
  escolarizado: string;
  certificado: string;
  ingresos: string;
  resultado: string;
};

const InformeBecaApoyoEducativo: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { edad, escolarizado, certificado, ingresos, resultado } = route.params || {};
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
            .highlight { font-weight: bold; color: #c13855; }
          </style>
        </head>
        <body>
          <h1>Informe de Simulación</h1>
          <h2>Beca de Apoyo Educativo</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>Edad del estudiante:</strong> ${edad} años</li>
            <li><strong>¿Está escolarizado en un centro adecuado?</strong> ${escolarizado === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>¿Cuenta con el certificado requerido?</strong> ${certificado === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>Ingresos familiares:</strong> ${ingresos} €</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>La beca de apoyo educativo está diseñada para ayudar a familias con hijos en edad escolar que cumplen ciertos requisitos, como estar escolarizados, poseer los certificados requeridos y tener ingresos familiares por debajo de un umbral establecido. Este informe tiene carácter orientativo.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Consulta los requisitos en la página oficial del organismo correspondiente.</li>
            <li>Prepara documentos como identificación, certificados y declaración de ingresos.</li>
            <li>Accede a la plataforma en línea del organismo o dirígete a las oficinas correspondientes.</li>
            <li>Llena el formulario y adjunta los documentos solicitados.</li>
            <li>Presenta la solicitud y conserva el comprobante para seguimiento.</li>
          </ol>
          <p>Nota: Este informe es informativo y no garantiza la concesión de la beca. Verifica siempre los detalles oficiales.</p>
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
  container: { padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0077b6', textAlign: 'center', marginBottom: 20 },
  resultado: { fontSize: 18, color: '#333', textAlign: 'center', marginVertical: 20 },
  boton: { backgroundColor: '#c13855', padding: 15, borderRadius: 5, marginTop: 20 },
  botonTexto: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default InformeBecaApoyoEducativo;
