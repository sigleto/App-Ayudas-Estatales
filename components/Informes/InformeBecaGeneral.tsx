import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useRoute, RouteProp } from '@react-navigation/native';
import AnuncioRecompensado from '../Anuncios/AnuncioRecompensado';

type RouteParams = {
  edad: string;
  ciudadania: string;
  nivelEstudios: string;
  notaMedia: string;
  ingresos: string;
  resultado: string;
};

const InformeBecaGeneral: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { edad, ciudadania, nivelEstudios, notaMedia, ingresos, resultado } = route.params || {};
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
          <h2>Beca General MEC 2024/2025</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>Edad:</strong> ${edad}</li>
            <li><strong>Ciudadanía española o de la UE:</strong> ${ciudadania === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>Nivel de estudios:</strong> ${nivelEstudios}</li>
            <li><strong>Nota media:</strong> ${notaMedia}</li>
            <li><strong>Ingresos familiares anuales:</strong> ${ingresos} €</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>La Beca General MEC 2024/2025 está destinada a estudiantes de enseñanzas postobligatorias que cumplan una serie de requisitos académicos, económicos y personales, con el objetivo de facilitar el acceso a la educación superior.</p>
          <h3>Requisitos generales:</h3>
          <ul>
            <li>Tener nacionalidad española o de un estado miembro de la Unión Europea.</li>
            <li>No poseer un título igual o superior al de los estudios para los que se solicita la beca.</li>
            <li>Cumplir con los requisitos económicos y académicos establecidos.</li>
          </ul>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Consulta los requisitos específicos y plazos en la página oficial del Ministerio de Educación.</li>
            <li>Reúne los documentos necesarios (DNI, matrícula, declaración de la renta familiar, etc.).</li>
            <li>Accede al formulario en línea a través de la Sede Electrónica del Ministerio.</li>
            <li>Rellena el formulario y adjunta los documentos requeridos.</li>
            <li>Envía la solicitud y guarda el resguardo para futuras consultas.</li>
          </ol>
          <p>Nota: Este informe es meramente informativo y no sustituye la consulta oficial. Los requisitos y condiciones pueden variar, por lo que se recomienda verificar la información en fuentes oficiales.</p>
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

export default InformeBecaGeneral;
