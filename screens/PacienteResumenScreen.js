import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';


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
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>

          <Text style={{ flex: 1, fontSize: 16 }}>Identificación</Text>
          <Text style={{ flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1, textAlign: "right", backgroundColor: 'yellow' }}>{formData.idPaciente}</Text>

          <Text style={{ flex: 1, fontSize: 16 }}></Text>
          <Text style={{ flex: 1, fontSize: 16 }}></Text>

        </View>

        {/* F.Nacimiento*/}
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>

          <Text style={{ flex: 1, fontSize: 16 }}>F.Nacimiento</Text>
          <Text style={{ flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1, backgroundColor: 'yellow'  }}>{format(formData.fechaNacimientoPaciente, 'dd-MM-yyyy')}</Text>

          <Text style={{ flex: 1, fontSize: 16 }}>Edad</Text>
          <Text style={{ flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1, textAlign: "right", backgroundColor: 'yellow'  }}>{formData.edadPaciente}</Text>

        </View>

        {/* Sexo */}
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>

          <Text style={{ flex: 1, fontSize: 16 }}>Sexo</Text>
          <Text style={{ flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1, textAlign: "left", backgroundColor: 'yellow' }}>{formData.sexoPaciente}</Text>

          <Text style={{ flex: 1, fontSize: 16 }}></Text>
          <Text style={{ flex: 1, fontSize: 16 }}></Text>

        </View>

        {/* Peso */}
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>

          <Text style={{ flex: 1, fontSize: 16 }}>Peso [Kg]</Text>
          <Text style={{ flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1, textAlign: "right", backgroundColor: 'yellow' }}>{formData.pesoPaciente}</Text>

          <Text style={{ flex: 1, fontSize: 16 }}></Text>
          <Text style={{ flex: 1, fontSize: 16 }}></Text>

        </View>

        {/* Talla */}
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>

          <Text style={{ flex: 1, fontSize: 16 }}>Peso [Kg]</Text>
          <Text style={{ flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1, textAlign: "right", backgroundColor: 'yellow' }}>{formData.tallaPaciente}</Text>

          <Text style={{ flex: 1, fontSize: 16 }}>IMC</Text>
          <Text style={{ flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1, textAlign: "right", backgroundColor: 'yellow'  }}>{formData.imcPaciente}</Text>

        </View>

        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>
            <Button
                title="Volver"
                onPress={() => navigation.navigate('PacienteIngreso', { data: formData })}
            />
            <Button title="Enviar datos" onPress={enviarFormData} />
        </View>

    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      padding: 10,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: '#fff',
    },
  });
  
  export default PacienteResumenScreen;