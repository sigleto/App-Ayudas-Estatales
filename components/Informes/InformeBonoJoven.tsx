import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useRoute, RouteProp } from '@react-navigation/native';


type RouteParams = {
  edad: string;
  ingresos: string;
  alquiler: string;
  rentasTrabajo: string;
  resultado: string;
};

const InformeBonoJoven: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { edad, ingresos, alquiler, rentasTrabajo, resultado } = route.params || {};

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
          <h2>Bono Joven por Alquiler</h2>
          <p><strong>Datos proporcionados:</strong></p>
          <ul>
            <li><strong>Edad:</strong> ${edad}</li>
            <li><strong>Ingresos anuales:</strong> ${ingresos} €</li>
            <li><strong>Precio del alquiler:</strong> ${alquiler} €</li>
            <li><strong>Obtiene rentas del trabajo:</strong> ${rentasTrabajo === 'S' ? 'Sí' : 'No'}</li>
          </ul>
          <h3>Resultado de la simulación:</h3>
          <p class="highlight">${resultado}</p>
          <h3>Descripción:</h3>
          <p>El Bono Joven por Alquiler está destinado a jóvenes que cumplen una serie de requisitos relacionados con la edad, los ingresos y el precio del alquiler. Este bono busca facilitar el acceso a la vivienda para personas jóvenes.</p>
          <h3>Pasos para realizar la solicitud:</h3>
          <ol>
            <li>Consulta los requisitos y plazos en la página oficial del organismo competente.</li>
            <li>Reúne los documentos necesarios, como DNI, contrato de alquiler y justificantes de ingresos.</li>
            <li>Accede al formulario en línea a través de la página oficial.</li>
            <li>Rellena el formulario y adjunta los documentos requeridos.</li>
            <li>Envía la solicitud y guarda el resguardo para futuras consultas.</li>
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
      <TouchableOpacity onPress={generarPDF} style={styles.boton}>
        <Text style={styles.botonTexto}>Descargar Informe en PDF</Text>
      </TouchableOpacity>
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

export default InformeBonoJoven;
