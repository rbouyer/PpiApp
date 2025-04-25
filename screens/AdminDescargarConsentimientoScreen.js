import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';
import { URL_API } from '../data/constants'

import Button from './components/ButtonComponent';

import {obtenerData, actualizarEntidad} from '../helpers/RestApiHelper.js'

const AdminDescargarConsentimientoScreen = ({navigation, route}) => {
    const [formData, setFormData] = useState({
        paciente_id: null
    });
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState({
        pacientes: true
    });
    const [error, setError] = useState(null);
    const [downloading, setDownloading] = useState(false);
    const [fileName, setFileName] = useState(null);


    // Fetch all data on component mount
    useEffect(() => {
        const fetchData = async () => {
        try {
   
            const pacsResponse = await obtenerData(URL_API + 'api/paciente/consentimiento');
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
     

    const handleDownload = async () => {
      setDownloading(true);
  
      try {
        var pac = pacientes.find(value => value.id == formData.paciente_id);
        console.log('Paciente: ' + JSON.stringify(pac));
        const fileName = pac.nombre_archivo;
        const fileUri = FileSystem.documentDirectory + fileName;
  
        //grabar contenido de consentimiento en file system
        await FileSystem.writeAsStringAsync(fileUri, pac.consentimiento, {
            encoding: FileSystem.EncodingType.Base64,
        });
        console.log('Downloaded to:', fileUri);
  
        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(fileUri);
        } else {
          Alert.alert('Descarga realizada', `Documento grabado en: ${uri}`);
        }
      } catch (err) {
        console.error('Download error:', err);
        Alert.alert('Error', 'Fallo la descarga de documento. Detalles: ' + err.message);
      } finally {
        setDownloading(false);
      }
    };


      const nombreCompleto = (o) => {
        return o? `${o.nombre} ${o.apellido}`: '';
      }

      const getFileBase64 = async () => {
        try {
          const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true });
    
          if (result.type === 'cancel') return null;
    
          setFileName(result.name);
    
          const fileUri = result.assets?.[0]?.uri || result.uri;
    
          const base64 = await FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.Base64,
          });
    
          setDownloading(true);
    
          return base64;

        } catch (error) {
          console.error('Upload error:', error);
          Alert.alert('Error', error.message || 'Fallo traspaso de documento al servidor');
        } finally {
          setDownloading(false);
        }
        }

    return (
        <View>
            <Text style={styles.title}>Descargar documento consentimiento paciente</Text>
            <Text style={styles.label}>Descargar documento consentimiento paciente</Text>
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


                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('Admin', { data: formData })}
                        />
                        <Button title="Descargar Doc" ancho="200" onPress={handleDownload} disabled={downloading} />
                        {downloading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
                   </View>
                    
                    <Text style={styles.label}></Text>
                    <Text style={styles.label}></Text>

                </View>
            </ScrollView>
        </View>
    );

}

export default AdminDescargarConsentimientoScreen;
