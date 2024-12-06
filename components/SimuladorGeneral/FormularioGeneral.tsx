import React, { useState, useEffect } from "react";
import { categories } from "./RequisitosGeneral";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation,CommonActions} from '@react-navigation/native';




const FormularioGeneral: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);
  const [selectedAyuda, setSelectedAyuda] = useState<number | undefined>(undefined);
  const navigation = useNavigation();
 
  const handleSubmit = () => {
    if (selectedCategory !== undefined && selectedAyuda !== undefined) {
      const ayuda = categories[selectedCategory].ayudas[selectedAyuda];
      
      console.log (ayuda.simulador)
      navigation.dispatch(
        CommonActions.navigate({
          name: ayuda.simulador[0],
          params: {} // Puedes agregar parámetros aquí si es necesario
        })
      );
    } else {
      // Manejar el caso cuando no se ha seleccionado una categoría o una ayuda
      Alert.alert('Error', 'Por favor, selecciona una categoría y una ayuda antes de continuar.');
    }
  };
  
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Solicitud de Ayudas</Text>

      <Text style={styles.label}>Categoría:</Text>
      
      <Picker
  selectedValue={selectedCategory}
  onValueChange={(value: number) => {
    console.log("Categoría seleccionada:", value); // Log añadido
    setSelectedCategory(value);
    setSelectedAyuda(undefined);
  }}
  style={styles.picker}
>
  <Picker.Item label="Selecciona categoría" value={undefined} />
  {categories.map((cat, index) => (
    <Picker.Item key={index} label={cat.category} value={index} />
  ))}
</Picker>


      {selectedCategory !== undefined && (
        <>
          <Text style={styles.label}>Ayuda:</Text>
          <Picker
            selectedValue={selectedAyuda}
            onValueChange={(value: number | undefined) => 
          { console.log("Categoría seleccionada:", value); 
                setSelectedAyuda(value)}}
            style={styles.picker}
          >
            <Picker.Item label="Selecciona ayuda" value={undefined}  />
            {categories[selectedCategory].ayudas.map((ayuda, index) => (
              <Picker.Item key={index} label={ayuda.name} value={index} />
            ))}
          </Picker>
        </>
      )}

      <Button title="Enviar"  onPress={handleSubmit}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 40 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  label: { fontSize:20, marginVertical: 5,color:"#c8851e" },
  picker: { marginBottom:80,marginVertical: 10, height: 50, width: "100%" },


});

export default FormularioGeneral;
