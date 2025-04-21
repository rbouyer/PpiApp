import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';
import { URL_API } from '../data/constants'

import Button from './components/ButtonComponent';

import {obtenerData, crearEntidad} from '../helpers/RestApiHelper.js'

const AdminVisitaCreacionScreen = ({navigation, route}) => {
    const [formData, setFormData] = useState({
        id: null,
        paciente_id: null,
        usuario_id: null,
        direccion: '',
        estado: 'P'
    });

    const [usuarios, setUsuarios] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState({
        usuarios: true,
        pacientes: true
    });
    const [error, setError] = useState(null);

    // Al cambiar el estado de formData, se actuakia dirección de paciente
    useEffect(() => {
        // This will run after formData updates
        if(formData.paciente_id != null) assignDir(formData.paciente_id);
    }, [formData.paciente_id]);

    // Fetch all data on component mount
    useEffect(() => {
        const fetchData = async () => {
        try {
            const usrsResponse = await obtenerData(URL_API  + 'api/usuario');
            console.log(usrsResponse);
            // Validate the response is an array
            if (!Array.isArray(usrsResponse)) {
                throw new Error('Invalid API response format usuarios - expected array');
            }
  
            const pacsResponse = await obtenerData(URL_API + 'api/paciente');
            console.log(pacsResponse);
            // Validate the response is an array
            if (!Array.isArray(pacsResponse)) {
                throw new Error('Invalid API response format pacientes - expected array');
            }

            setUsuarios(usrsResponse);
            setLoading(prev => ({...prev, 'usuarios': false}));

            setPacientes(pacsResponse);
            setLoading(prev => ({...prev, 'pacientes': false}));

        } catch (err) {
            setError(err.message);
            setLoading({ usuarios: false, pacientes: false });
            Alert.alert('Error', 'No pudo obtener data del servidor');
        }
        };

        fetchData();
    }, []);

    const isLoading = loading.usuarios || loading.pacientes;

    if (isLoading) {
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Obteniendo data del servidor...</Text>
          </View>
        );
    }
    
    if (error) {
        return (
          <View style={styles.container}>
            <Text style={styles.error}>Error: {error}</Text>
          </View>
        );
    }
    
    
      const handleInputChange = (name, value) => {
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const assignDir = async  (paciente_id) => {
        var pac = pacientes.find(value => value.id == paciente_id);
        handleInputChange('direccion', pac.direccion);
      }

     
      const handleSubmit = async () => {
        console.log('handleSubmit'+ JSON.stringify(formData));
        if(formData != null && formData.id != null){
            console.log('Reenvio denegado');
            Alert.alert('Error', 'No se permite el reenvio de data que ya habia sido enviada al servidor');
        } else {
            // Validaciones
            if(formData.usuario_id == null)
                Alert.alert('Error', 'Debe seleccionar usuario');
            else if(formData.paciente_id == null)
                Alert.alert('Error', 'Debe seleccionar paciente');
            else if(formData.direccion == '' )
                Alert.alert('Error', 'Debe ingresar dirección');
            else {
                console.log('Envio exitoso');
                // Here you would typically send the data to an API
                const nuevaVisita = await crearEntidad(URL_API + "api/visita", formData);

                if(nuevaVisita != null) setFormData(nuevaVisita);
            }
        }
      };

      const nombreCompleto = (o) => {
        return o? `${o.nombre} ${o.apellido}`: '';
      }

    return (
        <View>
            <Text style={styles.title}>Creación Visita</Text>
            <Text style={styles.label}>Creación nueva visita</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Tipo Dato</Text>
                        <Text style={styles.label}>Ingreso Dato</Text>

                    </View>

                    {/* Selección Usuario */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Usuario enfermera asignada:</Text>
                        <Picker
                            selectedValue={formData.usuario_id}
                            onValueChange={(value) => 
                                handleInputChange('usuario_id', value)
                            }
                            style={styles.picker}
                            >
                            <Picker.Item label="Seleccione un usuario..." value={null} />
                            {usuarios.map(user => (
                                <Picker.Item key={`user-${user.id}`} label={nombreCompleto(user)} value={user.id} />
                            ))}
                        </Picker>
                    </View>

                    {/* Selección Paciente */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Paciente asignado:</Text>
                        <Picker
                            selectedValue={formData.paciente_id}
                            onValueChange={(value) => handleInputChange('paciente_id', value)
                            }
                            style={styles.picker}
                            >
                            <Picker.Item label="Seleccione un paciente..." value={null} />
                            {pacientes.map(pac => (
                                <Picker.Item key={`pac-${pac.id}`} label={nombreCompleto(pac)} value={pac.id} />
                            ))}
                        </Picker>
                    </View>

                    {/* Dirección */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Dirección:</Text>
                        <TextInput
                            style={styles.textInput}
                            value={formData.direccion}
                            onChangeText={(text) => handleInputChange('direccion', text)}
                            placeholder="Ingrese dirección paciente"
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

export default AdminVisitaCreacionScreen;
