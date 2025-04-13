import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';

const AdminPacienteCreacionScreen = ({navigation, route}) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        identificador: '',
        direccion: '',
        fechaNacimiento: new Date(),
        genero: ''
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
    
      const handleSubmit = () => {
        // Here you would typically send the data to an API
        console.log('Form submitted:', {
          ...formData,
          identificador: parseInt(formData.identificador), // Convert to integer
          fechaNacimiento: formData.fechaNacimiento.toISOString().split('T')[0] // Format date as YYYY-MM-DD
        });
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
                        <Text style={styles.label}>Nombre:</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.nombre}
                            onChangeText={(text) => handleInputChange('nombre', text)}
                            placeholder="Ingrese nombre paciente"
                        />
                    </View>

                    {/* Apellido */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Apellido:</Text>
                        <TextInput
                            style={styles.input}
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
                        <Text style={styles.label}>Fecha de Nacimiento:</Text>
                        <Button 
                            title={`Seleccionar fecha: ${formData.fechaNacimiento.toLocaleDateString()}`} 
                            onPress={() => setShowDatePicker(true)} 
                        />
                        {showDatePicker && (
                            <DateTimePicker
                            value={formData.fechaNacimiento}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                            />
                        )}
                    </View>

                    {/* Identificador */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Identificador (número):</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.identificador}
                            onChangeText={(text) => handleInputChange('identificador', text)}
                            placeholder="Ingrese identificador numerico paciente"
                            keyboardType="numeric"
                        />
                    </View>

                    {/* Dirección */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Dirección:</Text>
                        <TextInput
                            style={styles.input}
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

                </View>
            </ScrollView>
        </View>
    );

}

export default AdminPacienteCreacionScreen;