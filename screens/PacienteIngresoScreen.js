import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Picker } from '@react-native-picker/picker';


const PacienteIngresoScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [showDatePicker, setShowDatePicker] = useState(false);

    //alert(JSON.stringify(data, null, 2));

    console.log(JSON.stringify(data, null, 2));

    const [formData, setFormData] = useState(data);
 
    //alert(JSON.stringify(formData, null, 2));

    console.log(JSON.stringify(formData, null, 2));
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
      };
    
      const handleDateChange = (field, selectedDate) => {
        setFormData({ ...formData, [field]: selectedDate });
        setShowDatePicker(false); // Close the picker
      };
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ingreso Paciente</Text>

        {/* Identificación */}
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>

          <Text style={{ flex: 1, fontSize: 16 }}>Identificación</Text>

          <TextInput
            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5, marginHorizontal: 5, }}
            keyboardType="numeric"
            textAlign="right"
            value={formData.idPaciente}
            onChangeText={(value) => handleInputChange('idPaciente', value)}
          />

          <Text style={{ flex: 1, fontSize: 16 }}></Text>
          <Text style={{ flex: 1, fontSize: 16 }}></Text>

        </View>

        {/* F.Nacimiento */}
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>

          <Text style={{ flex: 1, fontSize: 16 }}>F.Nacimiento</Text>

          <View style={{ flex: 1, marginHorizontal: 5 }}>
            <Button style={{ backgroundColor: 'yellow' }}
              title={format(formData.fechaNacimientoPaciente, 'dd-MM-yyyy')}
              onPress={() => setShowDatePicker(true)}
            />
            {showDatePicker && (<DateTimePicker
            value={formData.fechaNacimientoPaciente}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
            onChange={(event, selectedDate) => handleDateChange('fechaNacimientoPaciente', selectedDate)}
            />)}
          </View>

          <Text style={{ flex: 1, fontSize: 16 }}>Edad</Text>
          <Text style={{ flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1,  textAlign: "right", backgroundColor: 'yellow' }}>{formData.edadPaciente}</Text>

        </View>

        
        {/* Sexo */}
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>

          <Text style={{ flex: 1, fontSize: 16 }}>Sexo</Text>

          <Picker
            selectedValue={formData.sexoPaciente}
            style={{ flex: 1 }}
            onValueChange={(value) => handleInputChange('sexoPaciente', value)}
          >
            <Picker.Item label="Femenino" value="F" />
            <Picker.Item label="Masculino" value="M" />
            <Picker.Item label="Otro" value="O" />
          </Picker>

          <Text style={{ flex: 1, fontSize: 16 }}></Text>
          <Text style={{ flex: 1, fontSize: 16 }}></Text>

        </View>

        {/* Peso */}
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>

          <Text style={{ flex: 1, fontSize: 16 }}>Peso [Kg]</Text>

          <TextInput
            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5, marginHorizontal: 5, }}
            keyboardType="numeric"
            textAlign="right"
            value={formData.pesoPaciente}
            onChangeText={(value) => handleInputChange('pesoPaciente', value)}
          />

          <Text style={{ flex: 1, fontSize: 16 }}></Text>
          <Text style={{ flex: 1, fontSize: 16 }}></Text>

        </View>

        {/* Talla */}
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }}>

          <Text style={{ flex: 1, fontSize: 16 }}>Talla [Mtr]</Text>

          <TextInput
            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5, marginHorizontal: 5, }}
            keyboardType="numeric"
            textAlign="right"
            value={formData.tallaPaciente}
            onChangeText={(value) => handleInputChange('tallaPaciente', value)}
          />

          <Text style={{ flex: 1, fontSize: 16 }}>IMC</Text>
          <Text style={{ flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1,  textAlign: "right", backgroundColor: 'yellow' }}>{formData.imcPaciente}</Text>

        </View>

    <Button
        title="Siguiente"
        onPress={() => navigation.navigate('PacienteResumen', { data: formData })}
      />
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
  
  export default PacienteIngresoScreen;