import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import AnuncioRecompensado from '../Anuncios/AnuncioRecompensado';
import { useRoute, RouteProp } from '@react-navigation/native';

type RouteParams = {
  edad: string;
  discapacidad: string;
  residencia: string;
  ingresos: string;
  resultado: string;
};

const InformePrestacionHijoDiscapacidad: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { edad, discapacidad, residencia, ingresos, resultado } = route.params || {};
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
            h1 { color: #0077b6; }
            h2, h3 { color: #444; }
            p { line-height: 1.5; }
            .highlight { font-weight: bold; color: #28a745; }
          </style>
        </head>
        <body>
          <h1>Informe de Simulación</h1>
          <h2>Prestación por Hijo con Discapacidad</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>Edad del hijo:</strong> ${edad} años</li>
            <li><strong>Porcentaje de discapacidad:</strong> ${discapacidad}%</li>
            <li><strong>Residencia legal en España:</strong> ${residencia === 'S' ? 'Sí' : 'No'}</li>
            ${parseInt(edad, 10) < 18 ? `<li><strong>Ingresos anuales:</strong> ${ingresos} €</li>` : ''}
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>Esta prestación está destinada a apoyar económicamente a familias con hijos que tienen una discapacidad reconocida, cumpliendo ciertos requisitos legales y económicos.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Reúne los documentos necesarios (DNI, certificado de discapacidad, etc.).</li>
            <li>Consulta con el organismo oficial correspondiente (Seguridad Social o Servicios Sociales).</li>
            <li>Solicita y completa el formulario de solicitud.</li>
            <li>Adjunta los documentos requeridos y presenta la solicitud.</li>
            <li>Espera la resolución oficial.</li>
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
  title: { fontSize: 24, fontWeight: 'bold', color: '#0077b6', textAlign: 'center', marginBottom: 20 },
  resultado: { fontSize: 18, color: '#333', textAlign: 'center', marginVertical: 20 },
  boton: { backgroundColor: '#28a745', padding: 15, borderRadius: 5, marginTop: 20 },
  botonTexto: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default InformePrestacionHijoDiscapacidad;
