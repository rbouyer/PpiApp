import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import styles from './Styles';


const PacienteResumenScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [formData, setFormData] = useState(data);
    
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
      };
    
    const enviarFormData = () => {
        alert('Data Enviada');
      };
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Resumen Paciente</Text>

        {/* Identificación */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Identificación</Text>
          <Text style={styles.textResult}>{formData.idPaciente}</Text>

          <Text style={styles.label}></Text>
          <Text style={styles.label}></Text>

        </View>

        {/* F.Nacimiento*/}
        <View style={styles.inputRow}>

          <Text style={styles.label}>F.Nacimiento</Text>
          <Text style={styles.textResult}>{format(formData.fechaNacimientoPaciente, 'dd-MM-yyyy')}</Text>

          <Text style={styles.label}>Edad</Text>
          <Text style={styles.textResult}>{formData.edadPaciente}</Text>

        </View>

        {/* Sexo */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Sexo</Text>
          <Text style={styles.textResult}>{formData.sexoPaciente}</Text>

          <Text style={styles.label}></Text>
          <Text style={styles.label}></Text>

        </View>

        {/* Peso */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Peso [Kg]</Text>
          <Text style={styles.textResult}>{formData.pesoPaciente}</Text>

          <Text style={styles.label}></Text>
          <Text style={styles.label}></Text>

        </View>

        {/* Talla */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Peso [Kg]</Text>
          <Text style={styles.textResult}>{formData.tallaPaciente}</Text>

          <Text style={styles.label}>IMC</Text>
          <Text style={styles.textResult}>{formData.imcPaciente}</Text>

        </View>

        <View style={styles.inputRow}>
            <Button
                title="Volver"
                onPress={() => navigation.navigate('PacienteIngreso', { data: formData })}
            />
            <Button title="Enviar datos" onPress={enviarFormData} />
        </View>

    </View>
    );
  }
 
  
  export default PacienteResumenScreen;