import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Picker } from '@react-native-picker/picker';
import styles from './Styles';

import dataDropDown from '../data/dropdown.json';
import { ScrollView } from 'react-native-gesture-handler';

import {calculaAnos, calculaEdad} from '../helpers/DateHelper.js'
import {calculaIMC,} from '../helpers/GralHelper.js'

const PacienteIngresoScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [showDatePicker, setShowDatePicker] = useState(false);

    //alert(JSON.stringify(data, null, 2));

    //console.log(JSON.stringify(dataDropDown, null, 2));

    const [formData, setFormData] = useState(data);
 
    //alert(JSON.stringify(formData, null, 2));

    //console.log(JSON.stringify(formData, null, 2));
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };
 
    const handleInputMesesPostracionChange = (value) => {
      setFormData({ ...formData, "mesesPostracionPaciente": value });
      //setFormData({ ...formData, "anosPostracionPaciente": calculaAnos(value) });
  };
  
    const handleDateChange = (field, selectedDate) => {
      setFormData({ ...formData, [field]: selectedDate, 'edadPaciente': calculaEdad(selectedDate) });
      setShowDatePicker(false); // Close the picker
      //setFormData({ ...formData, 'edadPaciente': calculaEdad(selectedDate) });
    };
    
    return (
<View>
<Text style={styles.title}>Ingreso Paciente</Text>
<ScrollView >
  <View style={styles.container}>
        {/* Identificación */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Identificación</Text>

          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            textAlign="right"
            value={formData.idPaciente}
            onChangeText={(value) => handleInputChange('idPaciente', value)}
          />

          <Text style={styles.label}></Text>
          <Text style={styles.label}></Text>

        </View>

        {/* F.Nacimiento */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>F.Nacimiento</Text>

          <View style={{ flex: 1, marginHorizontal: 5 }}>
            <Button color='blue'
              title={format(formData.fechaNacimientoPaciente, 'dd-MM-yyyy')}
              onPress={() => setShowDatePicker(true)}
            />
            {showDatePicker && (<DateTimePicker
            value={formData.fechaNacimientoPaciente}
            maximumDate={new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
            onChange={(event, selectedDate) => handleDateChange('fechaNacimientoPaciente', selectedDate)}
            onEndEditing={(e) => handleInputChange('edadPaciente', calculaEdad(e.nativeEvent.text))}
            />)}
          </View>

          <Text style={styles.label}>Edad</Text>
          <Text style={styles.text}>{formData.edadPaciente}</Text>

        </View>

        
        {/* Sexo */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Sexo</Text>

          <Picker
            selectedValue={formData.sexoPaciente}
            style={{ flex: 1 }}
            onValueChange={(value) => handleInputChange('sexoPaciente', value)}
          >
            <Picker.Item label="Femenino" value="F" />
            <Picker.Item label="Masculino" value="M" />
            <Picker.Item label="Otro" value="O" />
          </Picker>

          <Text style={styles.label}></Text>
          <Text style={styles.label}></Text>

        </View>

        {/* Peso */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Peso [Kg]</Text>

          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            textAlign="right"
            value={formData.pesoPaciente}
            onChangeText={(value) => handleInputChange('pesoPaciente', value)}
            onEndEditing={(e) => handleInputChange('imcPaciente', calculaIMC(e.nativeEvent.text, formData.tallaPaciente))}
          />

          <Text style={styles.label}></Text>
          <Text style={styles.label}></Text>

        </View>

        {/* Talla */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Talla [Mtr]</Text>

          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            textAlign="right"
            value={formData.tallaPaciente}
            onChangeText={(value) => handleInputChange('tallaPaciente', value)}
            onEndEditing={(e) => handleInputChange('imcPaciente', calculaIMC(formData.pesoPaciente, e.nativeEvent.text))}
            />

          <Text style={styles.label}>IMC</Text>
          <Text style={styles.textResult}>{formData.imcPaciente}</Text>

        </View>

        {/* Tpo. Postración */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Tpo.postración (total, parcial, otra) [Meses]</Text>

          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            textAlign="right"
            value={formData.mesesPostracionPaciente}
            onChangeText={(value) => handleInputChange('mesesPostracionPaciente', value)}
            onEndEditing={(e) => handleInputChange('anosPostracionPaciente', calculaAnos(e.nativeEvent.text))}
            />

          <Text style={styles.label}>[Años]</Text>
          <Text style={styles.textResult}>{formData.anosPostracionPaciente}</Text>

        </View>

        {/* Diagnóstico */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Diagóstico de ingreso al programa PI/ACHS</Text>

          <TextInput
            style={[styles.textInput, {flex: 3}]}
            textAlign="left"
            value={formData.diagPaciente}
            onChangeText={(value) => handleInputChange('diagPaciente', value)}
          />

        </View>

        {/* Ingresos */}
        <View style={styles.inputRow}>

          <Text style={[styles.label, {flex: 2}]}>Por favor, indique a continuación  ¿cuál es el promedio aproximado de ingreso mensual de todos los integrantes de la vivienda?</Text>

          <Picker
            selectedValue={formData.ingresoPaciente}
            style={[styles.picker, { flex: 2 }]}
            onValueChange={(value) => handleInputChange('ingresoPaciente', value)}
          >
            { dataDropDown.ingresos.map((ingreso)=>
                  <Picker.Item label={ingreso.label} value={ingreso.value} key={ingreso.value} />
                )}
          </Picker>

        </View>

        {/* Estudios */}
        <View style={styles.inputRow}>

          <Text style={[styles.label, {flex: 2}]}>Por favor, detalle a continuación ¿cuál es el mayor nivel de estudios que ha obtenido el paciente? </Text>

          <Picker
            selectedValue={formData.estudioPaciente}
            style={[styles.picker, { flex: 2 }]}
            onValueChange={(value) => handleInputChange('estudioPaciente', value)}
          >
            { dataDropDown.estudios.map((estudio)=>
                  <Picker.Item label={estudio.label} value={estudio.value} key={estudio.value} />
                )}
          </Picker>

        </View>

        <Button
          title="Siguiente"
          onPress={() => navigation.navigate('PacienteResumen', { data: formData })}
        />
        <Text style={styles.label}></Text>
        <Text style={styles.label}></Text>

      </View>
    </ScrollView>
    </View>
    );
  }
 
  export default PacienteIngresoScreen;