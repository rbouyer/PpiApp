import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { RadioButton } from 'react-native-paper';

import PatologiaMedicamentoComponent from './components/PatologiaMedicamentoComponent';

const PatologiaMedicamentoScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View>
            <Text style={styles.title}>Patologias y Medicamentos</Text>
            <ScrollView>
                <Text style={styles.label}>Alguna vez un profesional de salud le ha indicado que usted tiene</Text>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Patología</Text>
                        <Text style={styles.label}>SI</Text>
                        <Text style={styles.label}>NO</Text>
                        <Text style={styles.label}>Nro medicamentos día</Text>
                    </View>

                    {/* 
    tieneArtritis: false, nroMedArtritis: 0, tieneDiabetes: false, nroMedDiabetes: 0, tieneDisplidemia: false, nroMedDisplidemia: 0, tieneCardio: false, nroMedcardio: 0,
    tieneEPOC: false, nroMedEPOC: 0, tieneHipArterial: false, nroMedHipArterial: 0, tieneInUrinaria: false, nroMedInUrinaria: 0, tieneInfarto: false, nroMedInfarto: 0,
    tieneInsufCardiaca: false, nroMedInsufCardiaca: 0, tieneOsteoporosis: false, nroMedOsteoporosis: 0, tieneHepatico: false, nroMedHepatico: 0, tieneResInsulina: false, nroMedResInsulina: 0,
    tieneSecuelaACV: false, nroMedSecuelaACV: 0, tieneAudicionReducida: false, tieneVisionReducida: false*/}
                    {/* Artritis Reumatoidea: tieneArtritis, nroMedArtritis */}
                    <PatologiaMedicamentoComponent 
                        patologia='Artritis Reumatoidea' 
                        tienePatologia = {formData.tieneArtritis} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneArtritis': val })}} 
                        nroMedPatologia = {formData.nroMedArtritis} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedArtritis': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Diabetes: tieneDiabetes, nroMedDiabetes */}
                    <PatologiaMedicamentoComponent 
                        patologia='Diabetes' 
                        tienePatologia = {formData.tieneDiabetes} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneDiabetes': val })}} 
                        nroMedPatologia = {formData.nroMedDiabetes} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedDiabetes': val })}}
                    ></PatologiaMedicamentoComponent>


                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('Examen', { data: formData })}
                        />
                        <Button 
                            title="Siguiente"
                            onPress={() => navigation.navigate('EnviaData', { data: formData })}
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    );

}

export default PatologiaMedicamentoScreen;