import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import styles from './Styles';

import dataDropDown from '../data/dropdown.json';


const EnviaDataScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [formData, setFormData] = useState(data);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
      };
    
    const enviarFormData = () => {
        alert('Data Enviada');
      };
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Envio de Datos</Text>


        <View style={styles.inputRow}>
            <Button
                title="Volver"
                onPress={() => navigation.navigate('Braden', { data: formData })}
            />
            <Button title="Enviar datos" onPress={enviarFormData} />
        </View>

    </View>
    );
  }
 
  
  export default EnviaDataScreen;