import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from './components/ButtonComponent';

import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { URL_API } from '../data/constants';

import {obtenerData, crearEntidad} from '../helpers/RestApiHelper.js'

const AdminScreen = ({navigation, route}) => {
    const { data } = route.params;
    const visitasEnv = obtenerData(URL_API + "api/visita/estado/E");

    const [formData, setFormData] = useState(data);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };


    const handleVisita = async (formData, setFormData) => {
        console.info('formData.idVisita: ' + formData.idVisita);
    
        // Validación credenciales)
        if (formData.idVisita === '' || formData.idVisita == 0) {
            Alert.alert('Error', 'Debe ingresar ID de visita');
            return;
        }

        var visita = await obtenerData(URL_API + 'api/visita/id/' + formData.idVisita);

        if(visita == null) {
            Alert.alert('Error', 'ID de visita invalido');
            return;
        }

        console.log('Visita: ' + JSON.stringify(visita));

        console.info('visita.usuario_id: ' + visita.usuario_id);
        console.info('visita.ficha_id: ' + visita.ficha_id);
        console.info('visita.estado: ' + visita.estado);
    
        if(visita == null){
            Alert.alert('Error', 'ID visita invalido');
        } else if (visita.estado === 'P') {
            Alert.alert('Error', 'Visita no recibida, sin datos');
        } else {
            //Cargar ficha
            console.log('Cargar ficha');
            var ficha = await obtenerData(URL_API + 'api/ficha/id/' + visita.ficha_id);
            console.log('Ficha: ' + JSON.stringify(ficha));
            console.log('Data: ' + JSON.stringify(ficha.data));

            if(ficha != null) {
                var idVisita = formData.idVisita, idUsuario = formData.idUsuario;
                //setFormData(ficha.data);

                //console.log('FormData: ' + JSON.stringify(formData));

                handleInputChange('idVisita', idVisita);
                handleInputChange('idUsuario', idUsuario);
                navigation.navigate('PacienteIngreso', { data: ficha.data });
            }
        }

         
        // getVisitaFromApi(formData, setFormData).then(visita => {
        //     console.log('Visita: ' + JSON.stringify(visita));

        //     console.info('visita.usuario_id: ' + visita.usuario_id);
        //     console.info('visita.ficha_id: ' + visita.ficha_id);
        //     console.info('visita.estado: ' + visita.estado);
        
        //     if(visita == null){
        //         Alert.alert('Error', 'ID visita invalido');
        //     } else if (visita.estado === 'P') {
        //         Alert.alert('Error', 'Visita no recibida, sin datos');
        //     } else {
        //         //Cargar ficha
        //         console.log('Cargar ficha');
        //         var ficha = await obtenerData(URL_API + 'api/ficha/id/' + visita.ficha_id);
        //         console.log('Ficha: ' + JSON.stringify(ficha));
        //         if(ficha != null) setFormData(ficha.data.data)
        //         navigation.navigate('PacienteIngreso', { data: formData });
        //     }
        // });

    };

    // const getVisitaFromApi = (formData, setFormData) => {
    //     return fetch(URL_API + 'api/visita/id/' + formData.idVisita)
    //         .then(response => response.json())
    //         .then(json => {
    //             return json.status? json.data: null;
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // };
     
    
    return (
        <View>
            <Text style={styles.title}>Administración Sistema</Text>
            <Text style={styles.label}>seleccione la acción deseada</Text>
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Ingresar nuevo usuario</Text>

                        <Button
                            title="Crear Usuario"
                            ancho="200"
                            onPress={() => navigation.navigate('AdminUsuarioCreacion', { data: formData })}
                        />

                    </View>

                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Ingresar nuevo paciente</Text>

                        <Button
                            title="Crear Paciente"
                            ancho="200"
                            onPress={() => navigation.navigate('AdminPacienteCreacion', { data: formData })}
                        />

                    </View>

                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Ingresar nueva visita</Text>

                        <Button
                            title="Crear Visita"
                            ancho="200"
                            onPress={() => navigation.navigate('AdminVisitaCreacion', { data: formData })}
                        />

                    </View>

                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Ingrese ID de visita</Text>

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
                            onPress={() => handleVisita(formData, setFormData)}
                        />

                    </View>

                </View>
            </ScrollView>
        </View>
    );

}

export default AdminScreen;