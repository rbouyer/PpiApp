import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';

import {obtenerData} from '../helpers/RestApiHelper.js'

const AdminPacienteCreacionScreen = ({navigation, route}) => {
    const [formData, setFormData] = useState({
        id: null,
        paciente_id: null,
        usuario_id: null,
        direccion: null,
        estado: 'P'
    });

    const [usuarios, setUsuarios] = useState([]);
    const [pacientes, sePacientes] = useState([]);
    const [loading, setLoading] = useState({
        usuarios: true,
        pacientes: true
    });
    const [error, setError] = useState(null);
    
    // Fetch all data on component mount
    useEffect(() => {
        const fetchData = async () => {
        try {
            const usrsResponse = obtenerData('https://ppiapi.akasoft.cl/api/usuario');
            const pacsResponse = obtenerData('https://ppiapi.akasoft.cl/api/paciente');

            setUsuarios(usrsResponse);
            setLoading(prev => ({...prev, usuarios: false}));

            setPacientes(pacsResponse);
            setLoading(prev => ({...prev, pacientes: false}));


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
                                <Picker.Item key={`user-${user.id}`} label={user.nombre} value={user.id} />
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
                                <Picker.Item key={`pac-${pac.id}`} label={pac.nombre} value={pac.id} />
                            ))}
                        </Picker>
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