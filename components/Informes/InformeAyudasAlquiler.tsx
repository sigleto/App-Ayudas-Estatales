import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useRoute, RouteProp } from '@react-navigation/native';
import AnuncioRecompensado from '../Anuncios/AnuncioRecompensado'; // Importa el componente del anuncio

type RouteParams = {
  ingresos: string;
  esFamiliaNumerosa: string;
  gradoDiscapacidad: string;
  rentaAlquiler: string;
  edad: string;
  resultado: string;
};

const InformeAyudasAlquiler: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const {
    ingresos,
    esFamiliaNumerosa,
    gradoDiscapacidad,
    rentaAlquiler,
    edad,
    resultado,
  } = route.params || {};
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
            h1 { color: #2a9d8f; }
            h2, h3 { color: #444; }
            p { line-height: 1.5; }
            .highlight { font-weight: bold; color: #c13855; }
          </style>
        </head>
        <body>
          <h1>Informe de Simulación</h1>
          <h2>Ayuda al Alquiler</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>Ingresos mensuales:</strong> ${ingresos} €</li>
            <li><strong>Familia numerosa:</strong> ${esFamiliaNumerosa === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>Grado de discapacidad:</strong> ${gradoDiscapacidad}%</li>
            <li><strong>Renta mensual del alquiler:</strong> ${rentaAlquiler} €</li>
            <li><strong>Edad:</strong> ${edad} años</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>La Ayuda al Alquiler es un apoyo económico destinado a facilitar el acceso a la vivienda a personas y familias que cumplan ciertos requisitos económicos, familiares y personales.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Consulta los requisitos y plazos en la página oficial de tu comunidad autónoma.</li>
            <li>Reúne los documentos necesarios, como contrato de alquiler, justificantes de ingresos y certificado de empadronamiento.</li>
            <li>Accede al formulario en línea o acude a la oficina correspondiente para completar la solicitud.</li>
            <li>Adjunta los documentos requeridos y envía la solicitud.</li>
            <li>Espera la resolución oficial y mantente atento a posibles comunicaciones.</li>
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

export default InformeAyudasAlquiler;
