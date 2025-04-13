import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';

import Button from './components/ButtonComponent';

import {obtenerData, crearEntidad} from '../helpers/RestApiHelper.js'

const AdminVisitaCreacionScreen = ({navigation, route}) => {
    const [formData, setFormData] = useState({
        id: null,
        paciente_id: null,
        usuario_id: null,
        direccion: null,
        estado: 'P'
    });

    const [usuarios, setUsuarios] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState({
        usuarios: true,
        pacientes: true
    });
    const [error, setError] = useState(null);

    // Fetch all data on component mount
    useEffect(() => {
        const fetchData = async () => {
        try {
            const usrsResponse = await obtenerData('https://ppiapi.akasoft.cl/api/usuario');
            console.log(usrsResponse);
            // Validate the response is an array
            if (!Array.isArray(usrsResponse)) {
                throw new Error('Invalid API response format usuarios - expected array');
            }
  
            const pacsResponse = await obtenerData('https://ppiapi.akasoft.cl/api/paciente');
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
            setLoading({ users: false, cars: false, persons: false });
            Alert.alert('Error', 'Failed to fetch data');
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
     
      const handleSubmit = async () => {
        // Here you would typically send the data to an API
        const nuevaVisita = await crearEntidad("https://ppiapi.akasoft.cl/api/visita", formData);

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
                        <Text style={styles.label}>Usuario asignado:</Text>
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
                            onValueChange={(value) => 
                                handleInputChange('paciente_id', value)
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

export default AdminVisitaCreacionScreen;