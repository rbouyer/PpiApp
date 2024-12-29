import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import Button from './components/ButtonComponent';
import Selector from './components/SelectorComponent';
import SelectorSimple from './components/SelectorSimpleComponent';

import dataDropDown from '../data/dropdown.json';

import {calculaAnos, calculaEdad, formatearFecha} from '../helpers/DateHelper.js';
import {calculaIMC,} from '../helpers/GralHelper.js';

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

          <View>
            <Button
              title={formatearFecha(formData.fechaNacimientoPaciente)}
              onPress={() => setShowDatePicker(true)}
              color='blue'
            />
            {showDatePicker && (<DateTimePicker
            value={formData.fechaNacimientoPaciente? formData.fechaNacimientoPaciente: new Date()}
            maximumDate={new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
            onChange={(event, selectedDate) => handleDateChange('fechaNacimientoPaciente', selectedDate)}
            onEndEditing={(e) => handleInputChange('edadPaciente', calculaEdad(e.nativeEvent.text))}
            />)}
          </View>

          <Text style={styles.label}>      Edad:</Text>
          <Text style={styles.textResult}>{formData.edadPaciente}</Text>

        </View>

        
        {/* Sexo */}
        <View style={styles.inputRow}>

          <Text style={styles.label}>Sexo</Text>

          <Selector
                        lista = {dataDropDown.sexo} 
                        seleccion = {formData.sexoPaciente} 
                        setSeleccion = {(value) => handleInputChange('sexoPaciente', value)} 
          />

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

          <Text style={styles.label}>IMC:</Text>
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

          <Text style={styles.label}>Años:</Text>
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
        <SelectorSimple
                        descripcion='Por favor, indique a continuación  ¿cuál es el promedio aproximado de ingreso mensual de todos los integrantes de la vivienda?' 
                        lista = {dataDropDown.ingresos} 
                        seleccion = {formData.ingresoPaciente} 
                        setSeleccion = {(value) => handleInputChange('ingresoPaciente', value)} 
        />

        {/* Estudios */}
        <SelectorSimple
                        descripcion='Por favor, detalle a continuación ¿cuál es el mayor nivel de estudios que ha obtenido el paciente? ' 
                        lista = {dataDropDown.estudios} 
                        seleccion = {formData.estudioPaciente} 
                        setSeleccion = {(value) => handleInputChange('estudioPaciente', value)} 
        />

        <View style={styles.inputRow}>
          <Button
            title="Siguiente"
            onPress={() => navigation.navigate('PacienteResumen', { data: formData })}
          />
        </View>
        <Text style={styles.label}></Text>
        <Text style={styles.label}></Text>

      </View>
    </ScrollView>
    </View>
    );
  }
 
  export default PacienteIngresoScreen;