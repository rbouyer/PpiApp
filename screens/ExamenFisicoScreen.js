import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { RadioButton } from 'react-native-paper';

import PatologiaMedicamentoComponent from './components/PatologiaMedicamentoComponent';
import Navigation from './components/NavigationComponent';

const ExamenFisicoScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View>
            <Text style={styles.title}>Examen Fisico</Text>
            <ScrollView>
                <Text style={styles.label}>Registre (Luego del examen fisico del paciente)</Text>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.labelBold}>Item</Text>
                        <Text style={styles.labelBold}>Sistolica</Text>
                        <Text style={styles.labelBold}>Diastolica</Text>
                    </View>

                    {/* 
                       sistolicaPresionSentada1: null, sistolicaPresionSentada2: null, sistolicaPresionParada1: null, sistolicaPresionParada2: null, sistolicaPulso: null, presentaBajaPeso: null 
                    */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>01 - Presion Arterial Sentada(o)</Text>
                        <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                textAlign="right"
                                value={formData.sistolicaPresionSentada1}
                                onChangeText={(value) => handleInputChange('sistolicaPresionSentada1', value)}
                             />
                        <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                textAlign="right"
                                value={formData.sistolicaPresionSentada2}
                                onChangeText={(value) => handleInputChange('sistolicaPresionSentada2', value)}
                             />

                     </View>

                     <View style={styles.inputRow}>
                        <Text style={styles.label}>02 - Presion Arterial Parada(o)</Text>
                        <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                textAlign="right"
                                value={formData.sistolicaPresionParada1}
                                onChangeText={(value) => handleInputChange('sistolicaPresionParada1', value)}
                             />
                        <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                textAlign="right"
                                value={formData.sistolicaPresionParada2}
                                onChangeText={(value) => handleInputChange('sistolicaPresionParada2', value)}
                             />

                     </View>
 
                     <View style={styles.inputRow}>
                        <Text style={styles.label}>03 - Pulso (Latidos Por Minuto)</Text>
                        <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                textAlign="right"
                                value={formData.sistolicaPulso}
                                onChangeText={(value) => handleInputChange('sistolicaPulso', value)}
                             />
                        <Text style={styles.label}></Text>

                     </View>
                    {/* presentaBajaPeso */}
                    <PatologiaMedicamentoComponent 
                        patologia='04 - ¿El paciente ha presentado Baja de peso involuntariamente en los últimos 6 meses?
' 
                        tienePatologia = {formData.presentaBajaPeso} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaBajaPeso': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>


                    <Navigation 
                        onPressPrev={() => navigation.navigate('Lesion', { data: formData })} 
                        onPressNext={() => navigation.navigate('Barthel', { data: formData })}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default ExamenFisicoScreen;