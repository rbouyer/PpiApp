import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { RadioButton } from 'react-native-paper';

import PatologiaMedicamentoComponent from './components/PatologiaMedicamentoComponent';

const LesionScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View>
            <Text style={styles.title}>Ubicación Lesión</Text>
            <ScrollView>
                <Text style={styles.label}>Seleccione en cada pregunta la alternativa que indica el paciente y/o su familiar : </Text>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Pregunta</Text>
                        <Text style={styles.label}>SI</Text>
                        <Text style={styles.label}>NO</Text>
                    </View>

                    {/* 
                        tieneArtritis, nroMedArtritis 
                    */}
 
                    {/* Audición reducida: tieneAudicionReducida */}
                    <PatologiaMedicamentoComponent 
                        patologia='Audición reducida' 
                        tienePatologia = {formData.tieneAudicionReducida} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneAudicionReducida': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Visión reducida: tieneVisionReducida */}
                    <PatologiaMedicamentoComponent 
                        patologia='Visión reducida' 
                        tienePatologia = {formData.tieneVisionReducida} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneVisionReducida': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>


                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('Piel', { data: formData })}
                        />
                        <Button 
                            title="Siguiente"
                            onPress={() => navigation.navigate('EnviaData', { data: formData })}
                        />
                    </View>
                    <Text style={styles.label}></Text>
                    <Text style={styles.label}></Text>

                </View>
            </ScrollView>
        </View>
    );

}

export default LesionScreen;