import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Selector from './components/SelectorComponent';
import Button from './components/ButtonComponent';

import {obtenerData, crearEntidad} from '../helpers/RestApiHelper.js'

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';
import { URL_API } from '../data/constants'

const AdminUsuarioCreacionScreen = ({navigation, route}) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        password2: '',
        role: 'user',
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
    
      const handleSubmit = async () => {
        // Validaciones
        if(formData.email == '' || formData.email.trim() == '')
            Alert.alert('Error', 'Debe ingresar email');
        else if(formData.nombre == '' || formData.apellido == '')
            Alert.alert('Error', 'Debe ingresar nombre y apellido');
        else if(formData.password == '' || formData.password != formData.password2)
            Alert.alert('Error', 'Debe ingresar contraseña y repetirla en campo de reingreso');
        else {
            // Here you would typically send the data to an API
            try {
                const nuevoUsuario = await crearEntidad(URL_API + "api/usuario", formData);
            } catch (error){
                Alert.alert('Error servidor', 'Detalle: ' + error.message);
            }
        }
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

                    {/* Email */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType="email-address"
                            value={formData.email}
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Ingrese correo electrónico de usuario"
                        />
                    </View>

                    {/* Nombre */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Nombre</Text>
                        <TextInput
                            style={styles.textInput}
                            value={formData.nombre}
                            onChangeText={(text) => handleInputChange('nombre', text)}
                            placeholder="Ingrese nombre usuario"
                        />
                    </View>

                    {/* Apellido */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Apellido</Text>
                        <TextInput
                            style={styles.textInput}
                            value={formData.apellido}
                            onChangeText={(text) => handleInputChange('apellido', text)}
                            placeholder="Ingrese apellido usuario"
                        />
                    </View>

                    {/* Role */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Tipo de usuario</Text>

                        <Selector
                                        lista = {dataDropDown.role} 
                                        seleccion = {formData.role} 
                                        setSeleccion = {(value) => handleInputChange('role', value)} 
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            value={formData.identificador}
                            onChangeText={(text) => handleInputChange('password', text)}
                            placeholder="Ingrese contraseña usuario"
                        />
                    </View>

                    {/* Password 2 */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Reingrese Contraseña</Text>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            value={formData.identificador}
                            onChangeText={(text) => handleInputChange('password2', text)}
                            placeholder="Reingrese contraseña usuario"
                        />
                    </View>



                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
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

export default AdminUsuarioCreacionScreen;