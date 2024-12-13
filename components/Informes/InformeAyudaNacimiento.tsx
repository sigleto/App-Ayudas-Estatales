import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useRoute, RouteProp } from '@react-navigation/native';
import AnuncioRecompensado from '../Anuncios/AnuncioRecompensado'; // Importa el componente del anuncio

// Definición de parámetros de la ruta
type RouteParams = {
  residencia: string;
  ingresos: string;
  convivencia: string;
  otraPrestacion: string;
  resultado: string;
};

const InformeAyudaNacimiento: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { residencia, ingresos, convivencia, otraPrestacion, resultado } = route.params || {};
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
          <h2>Ayuda por Nacimiento o Adopción</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>¿Reside legalmente en España?</strong> ${residencia === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>Ingresos anuales:</strong> ${ingresos} €</li>
            <li><strong>¿Convive con otra persona beneficiaria?</strong> ${convivencia === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>¿Derecho a otras prestaciones similares?</strong> ${otraPrestacion === 'S' ? 'Sí' : 'No'}</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>La ayuda por nacimiento o adopción busca apoyar económicamente a las familias que cumplen ciertos criterios, como residencia legal, límites de ingresos y situación familiar. Este informe tiene carácter orientativo.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Consulta los requisitos en la página oficial del organismo correspondiente.</li>
            <li>Reúne documentos como identificación oficial y declaración de la renta.</li>
            <li>Completa el formulario en línea o en oficinas habilitadas.</li>
            <li>Adjunta los documentos requeridos y presenta la solicitud.</li>
            <li>Guarda el justificante de la solicitud para seguimiento.</li>
          </ol>
          <p>Nota: Este informe es informativo y no garantiza la concesión de la ayuda. Consulta siempre fuentes oficiales para confirmar tu situación.</p>
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

export default InformeAyudaNacimiento;
