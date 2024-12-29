import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useRoute, RouteProp } from '@react-navigation/native';
import AnuncioRecompensado from '../Anuncios/AnuncioRecompensado'; // Importa el componente del anuncio

// Definición de parámetros de la ruta
type RouteParams = {
  edad: string;
  ingresos: string;
  precioVivienda: string;
  esPropietario: string;
  poblacion: string;
  resultado: string;
};

const InformeAyudaAdquisicion: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { edad, ingresos, precioVivienda, esPropietario, poblacion, resultado } = route.params || {};
  
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
          <h2>Ayuda a la Adquisición de Vivienda</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>Edad:</strong> ${edad}</li>
            <li><strong>Ingresos anuales:</strong> ${ingresos} €</li>
            <li><strong>Precio de la vivienda:</strong> ${precioVivienda} €</li>
            <li><strong>Propietario o usufructuario de otra vivienda:</strong> ${esPropietario === 'S' ? 'Sí' : 'No'}</li>
            <li><strong>Población del municipio:</strong> ${poblacion}</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>La ayuda a la adquisición de vivienda está destinada a jóvenes que cumplen requisitos relacionados con la edad, ingresos y el precio de la vivienda. En este programa se busca facilitar el acceso a una vivienda propia en municipios pequeños.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Verifica los requisitos y plazos en la página oficial del organismo competente.</li>
            <li>Reúne documentos como DNI, contrato de compraventa y justificantes de ingresos.</li>
            <li>Accede al formulario en línea en la página oficial.</li>
            <li>Rellena el formulario y adjunta los documentos requeridos.</li>
            <li>Envía la solicitud y guarda el justificante para consultas futuras.</li>
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

export default InformeAyudaAdquisicion;
