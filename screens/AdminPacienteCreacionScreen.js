import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Selector from './components/SelectorComponent';
import Button from './components/ButtonComponent';

import {obtenerData, crearEntidad} from '../helpers/RestApiHelper.js'

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';

const AdminPacienteCreacionScreen = ({navigation, route}) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        identificador: '',
        direccion: '',
        fechaNacimiento: new Date(),
        genero: '',
        diagnostico: '',
        fullName: function() {
            return `${this.nombre} ${this.apellido}`;
          }
      });
    
      const [showDatePicker, setShowDatePicker] = useState(false);
    
      const handleInputChange = (name, value) => {
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
          handleInputChange('fechaNacimiento', selectedDate);
        }
      };
    
      const handleSubmit = async () => {
        // Here you would typically send the data to an API
        const nuevoPaciente = await crearEntidad("https://ppiapi.akasoft.cl/api/paciente", formData);
      };

      

    return (
        <View>
            <Text style={styles.title}>Creación Paciente</Text>
            <Text style={styles.label}>Creación nuevo paciente</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Tipo Dato</Text>
                        <Text style={styles.label}>Ingreso Dato</Text>

                    </View>

                    {/* Nombre */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Nombre</Text>
                        <TextInput
                            style={styles.textInput}
                            value={formData.nombre}
                            onChangeText={(text) => handleInputChange('nombre', text)}
                            placeholder="Ingrese nombre paciente"
                        />
                    </View>

                    {/* Apellido */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Apellido</Text>
                        <TextInput
                            style={styles.textInput}
                            value={formData.apellido}
                            onChangeText={(text) => handleInputChange('apellido', text)}
                            placeholder="Ingrese apellido paciente"
                        />
                    </View>

                    {/* Genero */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Sexo</Text>

                        <Selector
                                        lista = {dataDropDown.sexo} 
                                        seleccion = {formData.genero} 
                                        setSeleccion = {(value) => handleInputChange('genero', value)} 
                        />
                    </View>

                    {/* Fecha Nacimiento */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Fecha de Nacimiento</Text>
                        <Button 
                            title={`${formData.fechaNacimiento.toLocaleDateString()}`} 
                            onPress={() => setShowDatePicker(true)} 
                            ancho="300"
                            color='blue'
                        />
                        {showDatePicker && (
                            <DateTimePicker
                            value={formData.fechaNacimiento}
                            maximumDate={new Date()}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={handleDateChange}
                            />
                        )}
                    </View>

                    {/* Identificador */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Identificador (número)</Text>
                        <TextInput
                            style={styles.textInput}
                            value={formData.identificador}
                            onChangeText={(text) => handleInputChange('identificador', text)}
                            placeholder="Ingrese identificador numerico paciente"
                            keyboardType="numeric"
                        />
                    </View>

                    {/* Diagnostico */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Diagnostico</Text>
                        <TextInput
                            style={styles.textInput}
                            value={formData.diagnostico}
                            onChangeText={(text) => handleInputChange('diagnostico', text)}
                            placeholder="Ingrese diagnostico paciente"
                        />
                    </View>

                    {/* Dirección */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Dirección</Text>
                        <TextInput
                            style={styles.textInput}
                            value={formData.direccion}
                            onChangeText={(text) => handleInputChange('direccion', text)}
                            placeholder="Ingrese dirección paciente"
                        />
                    </View>



                    <View style={styles.inputRow}>
                        <Button
                            title="Cancelar"
                            onPress={() => navigation.navigate('Admin', { data: formData })}
                        />
                        <Button 
                            title="Enviar"
                            onPress={() => handleSubmit()}
                        />
                    </View>

                    <Text style={styles.label}></Text>
                    <Text style={styles.label}></Text>

                </View>
            </ScrollView>
        </View>
    );

}

export default AdminPacienteCreacionScreen;