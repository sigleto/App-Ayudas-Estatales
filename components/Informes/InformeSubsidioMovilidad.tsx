import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import AnuncioRecompensado from '../Anuncios/AnuncioRecompensado';
import { useRoute, RouteProp } from '@react-navigation/native';

type RouteParams = {
  edad: string;
  discapacidad: string;
  ingresos: string;
  usaTransporteColectivo: string;
  puedeSalirDeCasa: string;
  resultado: string;
};

const InformeSubsidioMovilidad: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { 
    edad, 
    discapacidad, 
    ingresos, 
    usaTransporteColectivo, 
    puedeSalirDeCasa, 
    resultado 
  } = route.params || {};

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
          <h2>Subsidio de Movilidad</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>Edad:</strong> ${edad}</li>
            <li><strong>Grado de discapacidad:</strong> ${discapacidad}%</li>
            <li><strong>Ingresos anuales:</strong> ${ingresos} €</li>
            <li><strong>¿Dificultad para usar transporte colectivo?</strong> ${usaTransporteColectivo === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>¿Puede salir de casa?</strong> ${puedeSalirDeCasa === 'S' ? 'Sí' : 'No'}</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>El subsidio de movilidad está dirigido a personas con dificultades para desplazarse y que cumplen ciertos requisitos económicos y de discapacidad.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Consulta las bases legales en el organismo oficial correspondiente.</li>
            <li>Reúne la documentación requerida (DNI, certificado médico, declaración de ingresos, etc.).</li>
            <li>Presenta la solicitud en tu oficina local de servicios sociales.</li>
            <li>Espera la resolución del organismo competente.</li>
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
    <ScrollView contentContainerStyle={styles.container}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2a9d8f', textAlign: 'center', marginBottom: 20 },
  resultado: { fontSize: 18, color: '#333', textAlign: 'center', marginVertical: 20 },
  boton: { backgroundColor: '#c13855', padding: 15, borderRadius: 5, marginTop: 20 },
  botonTexto: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default InformeSubsidioMovilidad;
