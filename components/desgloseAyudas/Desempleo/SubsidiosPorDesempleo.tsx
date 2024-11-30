import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const SubsidiosPorDesempleo = () => {
  // Función para manejar los clics en los enlaces
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Error al abrir el enlace:", err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Subsidios por Desempleo</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Los subsidios por desempleo son ayudas económicas destinadas a las personas que han agotado su prestación contributiva por desempleo o no tienen derecho a ella. Estas ayudas tienen como objetivo cubrir las necesidades básicas mientras el beneficiario busca empleo.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          <Text style={styles.text}>
            - Haber agotado la prestación contributiva por desempleo (si corresponde).{"\n"}
            - No superar el umbral de renta establecido (75% del SMI).{"\n"}
            - Estar inscrito como demandante de empleo.{"\n"}
            - Cumplir condiciones específicas según el tipo de subsidio:
          </Text>

          <TouchableOpacity onPress={() => openLink('https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/subsidio-agotamiento-prestacion-contributiva.html')}>
            <Text style={styles.link}>Subsidio de desempleo por agotamiento de la prestación contributiva</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/subsidio-cotizaciones-insuficientes-he-trabajado-menos-de-un-anyo.html')}>
            <Text style={styles.link}>Subsidio de cotizaciones insuficientes - He trabajado menos de un año</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/tengo-mas-de-52.html')}>
            <Text style={styles.link}>Subsidio para personas de más de 52 años</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/subsidio-de-emigrante-retornado.html')}>
            <Text style={styles.link}>Subsidio para personas emigrantes retornadas</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/victimas-violencia-genero-o-sexual.html')}>
            <Text style={styles.link}>Subsidio para personas víctimas de violencia de género o sexual</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/subsidio-agrario.html')}>
            <Text style={styles.link}>Subsidio agrario para personas trabajadoras residentes en Andalucía y Extremadura</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo/renta-agraria.html')}>
            <Text style={styles.link}>Renta agraria para personas trabajadoras en Andalucía y Extremadura</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de solicitud</Text>
          <Text style={styles.text}>
            - Inscribirse como demandante de empleo en el Servicio Público de Empleo Estatal (SEPE).{"\n"}
            - Presentar la solicitud de subsidio en la sede electrónica del SEPE o de forma presencial con cita previa.{"\n"}
            - Aportar la documentación requerida: DNI, justificantes de ingresos y, si corresponde, libro de familia.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            - Real Decreto Legislativo 8/2015, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social.{"\n"}
            - Orden ESS/393/2018 que regula los procedimientos de solicitud y concesión.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8', // Fondo suave
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2a9d8f',
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#264653',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: '#6c757d',
    textAlign: 'justify',
  },
  link: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});

export default SubsidiosPorDesempleo;
