import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native-gesture-handler';

import { format } from 'date-fns';
import styles from './Styles';

import dataDropDown from '../data/dropdown.json';
import {buscaEnArreglo} from '../helpers/GralHelper.js'

import Navigation from './components/NavigationComponent';


const PacienteResumenScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [formData, setFormData] = useState(data);

    //const textoIngreso = buscaEnArreglo(formData.ingresoPaciente, dataDropDown.ingresos);
    //const textoEstudio = buscaEnArreglo(formData.estudioPaciente, dataDropDown.estudios);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
      };
    
    const enviarFormData = () => {
        alert('Data Enviada');
      };
    
    return (
      <View>
        <Text style={styles.title}>Resumen Paciente</Text>

        <ScrollView>
        <View style={styles.container}>

          {/* Identificación */}
          <View style={styles.inputRow}>

            <Text style={styles.label}>Paciente ID</Text>
            <Text style={styles.textResult}>{formData.idPaciente}</Text>

            <Text style={styles.label}></Text>
            <Text style={styles.label}></Text>

          </View>

          {/* F.Nacimiento*/}
          <View style={styles.inputRow}>

            <Text style={styles.label}>F.Nacimiento</Text>
            <Text style={styles.textResult}>{format(formData.fechaNacimientoPaciente, 'dd-MM-yyyy')}</Text>

            <Text style={styles.label}>      Edad:</Text>
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

            <Text style={styles.label}>Talla [Mtr]</Text>
            <Text style={styles.textResult}>{formData.tallaPaciente}</Text>

            <Text style={styles.label}>      IMC:</Text>
            <Text style={styles.textResult}>{formData.imcPaciente}</Text>

          </View>

          {/* Postración */}
          <View style={styles.inputRow}>

            <Text style={styles.label}>Tpo.postración (total, parcial, otra) [Meses]</Text>
            <Text style={styles.textResult}>{formData.mesesPostracionPaciente}</Text>

            <Text style={styles.label}>      Años:</Text>
            <Text style={styles.textResult}>{formData.anosPostracionPaciente}</Text>

          </View>

          {/* Diagnóstico */}
          <View style={styles.inputRow}>

            <Text style={styles.label}>Diagnóstico de ingreso al programa PI/ACHS</Text>
            <Text style={[styles.textResult, {flex: 3,  textAlign: "left"}]}>{formData.diagPaciente}</Text>

          </View>

          {/* Ingreso */}
          <View style={styles.inputRow}>

            <Text style={[styles.label, {flex: 2}]}>Promedio aproximado de ingreso mensual de todos los integrantes de la vivienda</Text>
            <Text style={[styles.textResult, {flex: 2,  textAlign: "left"}]}>{buscaEnArreglo(formData.ingresoPaciente, dataDropDown.ingresos)}</Text>

          </View>

          {/* Estudio */}
          <View style={styles.inputRow}>

            <Text style={[styles.label, {flex: 2}]}>Mayor nivel de estudios que ha obtenido el paciente</Text>
            <Text style={[styles.textResult, {flex: 2,  textAlign: "left"}]}>{buscaEnArreglo(formData.estudioPaciente, dataDropDown.estudios)}</Text>

          </View>

          <Navigation 
              onPressPrev={() => navigation.navigate('PacienteIngreso', { data: formData })} 
              onPressNext={() => navigation.navigate('Examen', { data: formData })}
          >
          </Navigation>


      </View>
          
      </ScrollView>

    </View>
    );
  }
 
  
  export default PacienteResumenScreen;