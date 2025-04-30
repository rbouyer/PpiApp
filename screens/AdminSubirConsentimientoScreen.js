import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';
import { URL_API } from '../data/constants'

import Button from './components/ButtonComponent';

import {obtenerData, actualizarEntidad} from '../helpers/RestApiHelper.js'

const AdminSubirConsentimientoScreen = ({navigation, route}) => {
    const [formData, setFormData] = useState({
        paciente_id: null,
        consentimiento: false
    });
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState({
        pacientes: true
    });
    const [error, setError] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [fileName, setFileName] = useState(null);
  
    // Al cambiar el estado de formData, se actuakia dirección de paciente
    useEffect(() => {
        // This will run after formData updates
        if(formData.paciente_id != null) assignConsentimiento(formData.paciente_id);
    }, [formData.paciente_id]);

    // Fetch all data on component mount
    useEffect(() => {
        const fetchData = async () => {
        try {
   
            const pacsResponse = await obtenerData(URL_API + 'api/paciente');
            //console.log(pacsResponse);
            // Validate the response is an array
            if (!Array.isArray(pacsResponse)) {
                throw new Error('Invalid API response format pacientes - expected array');
            }

            setPacientes(pacsResponse);
            setLoading(prev => ({...prev, 'pacientes': false}));

        } catch (err) {
            setError(err.message);
            setLoading({ pacientes: false });
            Alert.alert('Error', 'No pudo obtener data del servidor');
        }
        };

        fetchData();
    }, []);

    const isLoading = loading.pacientes;

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

      const assignConsentimiento = async  (paciente_id) => {
        var pac = pacientes.find(value => value.id == paciente_id);
        handleInputChange('consentimiento', pac.consentimiento == null || pac.consentimiento == '' ? 'SIN doc consentimiento' : 'CON doc consentimiento');
      }

     
      const handleSubmit = async () => {
        try {
            console.log('handleSubmit' + JSON.stringify(formData));
            if (formData != null && formData.id != null) {
                console.log('Reenvio denegado');
                Alert.alert('Error', 'No se permite el reenvio de data que ya habia sido enviada al servidor');
            } else {
                console.log('handleSubmit formData: ' + formData.paciente_id);
                // Validaciones
                if (formData.paciente_id == null) {
                    Alert.alert('Error', 'Debe seleccionar paciente');
                } else {
                    console.log('handleSubmit seleccion de archivo');
                    var base64 = await getFileBase64();
                    if(base64 != null) {
                        console.log('handleSubmit base64: ' + base64.substring(0, 20) + '...');
                        console.log('Iniciando Envio...');
                        var pac = pacientes.find(value => value.id == formData.paciente_id);
                        //console.log('Paciente: ' + JSON.stringify(pac));
                        pac.consentimiento = base64;
                        pac.nombre_archivo = fileName;
                        const pacUpd = await actualizarEntidad(URL_API + "api/paciente", pac);
                        console.log('Envio exitoso');
                        
                        // Se vuelve a menu principal
                        navigation.navigate('Admin', { data: {} });
                    }
                }
            }
        } catch (error) {
            console.error('Error en handleSubmit:', error);
            Alert.alert('Error', 'Ocurrió un error al traspasar documento al servidor: ' + error.message);
        }
      };

      const nombreCompleto = (o) => {
        return o? `${o.nombre} ${o.apellido}`: '';
      }

      const getFileBase64 = async () => {
        try {
          const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true });
          console.log('File selected result:', JSON.stringify(result));
    
          if (result.type === 'cancel') return null;
    
          console.log('File name selected:', result.assets[0].name);
          setFileName(result.assets[0].name);
    
          const fileUri = result.assets?.[0]?.uri || result.uri;
    
          const base64 = await FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.Base64,
          });
    
          setUploading(true);
    
          return base64;

        } catch (error) {
          console.error('Upload error:', error);
          Alert.alert('Error', error.message || 'Fallo traspaso de documento al servidor');
        } finally {
          setUploading(false);
        }
        }

    return (
        <View>
            <Text style={styles.title}>Subir documento consentimiento paciente</Text>
            <Text style={styles.label}>Subir documento consentimiento paciente</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Tipo Dato</Text>
                        <Text style={styles.label}>Ingreso Dato</Text>

                    </View>

                    {/* Selección Paciente */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Paciente:</Text>
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
                        <Text style={styles.label}>Tiene consentimiento:</Text>
                        <TextInput
                            style={styles.textResult}
                            value={formData.consentimiento}
                            readOnly={true}
                         />
                    </View>



                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('Admin', { data: formData })}
                        />
                        <Button 
                            title="Subir Doc"
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

export default AdminSubirConsentimientoScreen;
