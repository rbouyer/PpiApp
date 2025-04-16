import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from './components/ButtonComponent';

import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { URL_API } from '../data/constants'

import {obtenerData, crearEntidad} from '../helpers/RestApiHelper.js'


const VisitaIdScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    //console.log('VisitaId formData: ' + JSON.stringify(formData));

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };


    const handleVisita = async () => {
        const idUsuario = formData.idUsuario;
        console.info('formData.idUsuario: ' + formData.idUsuario);
        console.info('formData.idVisita: ' + formData.idVisita);
    

        // Validación credenciales)
        if (formData.idVisita.trim() === '') {
            Alert.alert('Error', 'Debe ingresar ID de visita');
            return;
        }
        var visita = await obtenerData(URL_API + 'api/visita/id/' + formData.idVisita);

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

    
            handleInputChange('idPaciente', formData.idPaciente);
            navigation.navigate('PacienteIngreso', { data: formData });
        }

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
    };

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

                        <Text style={styles.label}>Ingrese ID de visita</Text>

                        <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            textAlign="right"
                            value={formData.pesoPaciente}
                            onChangeText={(value) => handleInputChange('idVisita', value)}
                        />

                        <Button
                            title="Iniciar Visita"
                            onPress={() => handleVisita()}
                        />

                    </View>

                </View>
            </ScrollView>
        </View>
    );

}

export default VisitaIdScreen;