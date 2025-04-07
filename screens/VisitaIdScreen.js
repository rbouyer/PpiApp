import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from './components/ButtonComponent';

import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

const VisitaIdScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };


    const handleVisita = (formData, setFormData) => {
        console.info('formData.idVisita: ' + formData.idVisita);
    

        // Validación credenciales)
        if (formData.idVisita.trim() === '') {
            Alert.alert('Error', 'Debe ingresar ID de visita');
            return;
        }

        getVisitaFromApi(formData, setFormData).then(visita => {
            console.log('Visita: ' + JSON.stringify(visita));

            console.info('visita.usuario_id: ' + visita.usuario_id);
            console.info('visita.ficha_id: ' + visita.ficha_id);
            console.info('visita.estado: ' + visita.estado);
        
            if(visita == null){
                Alert.alert('Error', 'ID visita invalido');
            } else if(visita.usuario_id !== formData.idUsuario){
                Alert.alert('Error', 'ID visita no autorizado');
            } else if (visita.estado !== 'P') {
                Alert.alert('Error', 'Visita ya enviada, sin permiso para ingreso');
            } else {
                navigation.navigate('Examen', { data: formData });
            }
        });
    };

    const getVisitaFromApi = (formData, setFormData) => {
        return fetch('https://ppiapi.akasoft.cl/api/visita/id/' + formData.idVisita)
            .then(response => response.json())
            .then(json => {
                return json.status? json.data: null;
            })
            .catch(error => {
                console.error(error);
            });
    };
    
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
                            onPress={() => handleVisita(formData, setFormData)}
                        />

                    </View>

                </View>
            </ScrollView>
        </View>
    );

}

export default VisitaIdScreen;