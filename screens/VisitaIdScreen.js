import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from './components/ButtonComponent';

import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { URL_API } from '../data/constants'

import {obtenerData} from '../helpers/RestApiHelper.js'
import {calculaEdad} from '../helpers/DateHelper.js';

import { initFormData } from '../data/object.js';

import { loadObjectState } from '../helpers/FSHelper.js';

const VisitaIdScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    //console.log('VisitaId formData: ' + JSON.stringify(formData));

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };


    const handleVisita = async () => {
        const idUsuario = formData.idUsuario;
        
        // Validation
        if (formData.idVisita.trim() === '') {
            Alert.alert('Error', 'Debe ingresar ID de visita');
            return;
        }
    
        try {
            // 1. Fetch visita data
            const visita = await obtenerData(`${URL_API}api/visita/id/${formData.idVisita}`);
            
            if (!visita) {
                Alert.alert('Error', 'ID visita invalido');
                return;
            }
    
            // 2. Validate visita
            if (parseInt(visita.usuario_id) !== idUsuario) {
                Alert.alert('Error', 'ID visita no autorizado');
                return;
            }
    
            if (visita.estado !== 'P') {
                Alert.alert('Error', 'Visita ya enviada, sin permiso para modificación');
                return;
            }
    
            // 3. Fetch paciente data
            const paciente = await obtenerData(`${URL_API}api/paciente/id/${visita.paciente_id}`);
            
            // 4. Update state
            setFormData(prev => ({
                ...prev,
                idPaciente: visita.paciente_id,
                fechaNacimientoPaciente: paciente.fecha_nacimiento,
                edadPaciente: paciente.fecha_nacimiento ? calculaEdad(new Date(paciente.fecha_nacimiento)) : 0
            }));

            const updatedFormData = {...formData,
                idPaciente: visita.paciente_id,
                fechaNacimientoPaciente: paciente.fecha_nacimiento,
                edadPaciente: paciente.fecha_nacimiento ? calculaEdad(new Date(paciente.fecha_nacimiento)) : 0}
            setFormData(updatedFormData);

            // 5. Navigate only after successful data loading
            navigation.navigate('PacienteIngreso', { data: updatedFormData });
    
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Ocurrió un error al cargar los datos');
        }
    };


    const handleVisitaLocal = async () => {
        console.info('handleVisitaLocal: formData.idVisita: ' + formData.idVisita);
        var dataLocal = await loadObjectState(formData.idVisita);
        console.info('handleVisitaLocal: dataLocal: ' + JSON.stringify(dataLocal, null, 2));
        navigation.navigate('PacienteIngreso', dataLocal);
   }

/*     useEffect( () =>  {
        const fetchData = async() => {
            const visita = await obtenerData(URL_API + 'api/visita/id/' + formData.idVisita);
            const paciente = await obtenerData(URL_API + 'api/paciente/id/' + visita.paciente_id);
            const idUsuario = visita.usuario_id;
    
            if(visita != null) console.log('visita: ' + JSON.stringify(visita));
    
            if(visita == null){
                Alert.alert('Error', 'ID visita invalido');
            } else if(parseInt(visita.usuario_id) != idUsuario){
                console.info('formData.idUsuario: ' + idUsuario);
                console.info('visita.usuario_id: ' + visita.usuario_id);
               Alert.alert('Error', 'ID visita no autorizado');
            } else if (visita.estado !== 'P') {
                Alert.alert('Error', 'Visita ya enviada, sin permiso para ingreso');
            } else {
                console.log('Visita: ' + JSON.stringify(visita));
                console.info('formData.idUsuario: ' + idUsuario);
                console.info('visita.usuario_id: ' + visita.usuario_id);
                console.info('visita.ficha_id: ' + visita.ficha_id);
                console.info('visita.estado: ' + visita.estado);
    
        
                //handleInputChange('idPaciente', formData.idPaciente);
                setFormData(prev => ({ ...prev,  'idPaciente': prev.idPaciente, 'fechaNacimientoPaciente': paciente.fecha_nacimiento, 'edadPaciente': paciente.fecha_nacimiento!=null? calculaEdad(new Date(paciente.fecha_nacimiento)): 0} ));
            }
        }
        // Only run if idVisita has a value
        if (formData.idVisita) {
            fetchData();
        }
    }, [formData.idVisita]); */

/* 
        getVisitaFromApi(formData, setFormData).then(visita => {
            console.log('Visita: ' + JSON.stringify(visita));

            console.info('formData.idUsuario: ' + idUsuario);

            console.info('visita.usuario_id: ' + visita.usuario_id);
            console.info('visita.ficha_id: ' + visita.ficha_id);
            console.info('visita.estado: ' + visita.estado);
        
            if(visita == null){
                Alert.alert('Error', 'ID visita invalido');
            } else if(visita.usuario_id !== idUsuario){
                Alert.alert('Error', 'ID visita no autorizado');
            } else if (visita.estado !== 'P') {
                Alert.alert('Error', 'Visita ya enviada, sin permiso para ingreso');
            } else {
                navigation.navigate('PacienteIngreso', { data: formData });
            }
        });
 */    

/*
    const getVisitaFromApi = (formData, setFormData) => {
        return fetch(URL_API + 'api/visita/id/' + formData.idVisita)
            .then(response => response.json())
            .then(json => {
                return json.status? json.data: null;
            })
            .catch(error => {
                console.error(error);
            });
    };
 */    
    return (
        <View>
            <Text style={styles.title}>Visita</Text>
            <Text style={styles.label}>Ingreso ID Visita</Text>
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Ingrese ID de nueva visita</Text>

                        <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            textAlign="right"
                            value={formData.idVisita}
                            onChangeText={(value) => handleInputChange('idVisita', value)}
                        />

                        <Button
                            title="Iniciar Visita"
                            ancho="200"
                            onPress={() => handleVisita()}
                        />

                    </View>

                    <View style={styles.inputRow}>

                        <Text style={styles.label}>ID visita ingresada en este equipo</Text>

                        <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            textAlign="right"
                            value={formData.idVisita}
                            onChangeText={(value) => handleInputChange('idVisita', value)}
                        />

                        <Button
                            title="Editar Visita"
                            ancho="200"
                            onPress={() => handleVisitaLocal()}
                        />

                    </View>
  
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Salir de la aplicación</Text>

                        <Button
                            title="Salir"
                            ancho="200"
                            onPress={() => navigation.navigate('Login', { data: {...initFormData} })}
                        />

                    </View>

                </View>
            </ScrollView>
        </View>
    );

}

export default VisitaIdScreen;