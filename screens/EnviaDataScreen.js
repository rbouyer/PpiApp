import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import styles from './Styles';

import dataDropDown from '../data/dropdown.json';

import Navigation from './components/NavigationComponent';


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
      <View >
        <Text style={styles.title}>Envio de Datos</Text>
        <View style={styles.container}>


{/*         <View style={styles.inputRow}>
            <Button
                title="Volver"
                onPress={() => navigation.navigate('Zarit', { data: formData })}
            />
            <Button title="Enviar datos" onPress={enviarFormData} />
        </View>
 */}        
          <Navigation 
              onPressPrev={() => navigation.navigate('Zarit', { data: formData })} 
              onPressNext={() => navigation.navigate('Zarit', { data: formData })}>
          </Navigation>
        </View>

    </View>
    );
  }
 
  
  export default EnviaDataScreen;