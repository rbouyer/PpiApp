import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { RadioButton } from 'react-native-paper';

import PatologiaMedicamentoComponent from './components/PatologiaMedicamentoComponent';

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
                        <Text style={styles.label}>Pregunta</Text>
                        <Text style={styles.label}>SI</Text>
                        <Text style={styles.label}>NO</Text>
                    </View>

                    {/* 
                        usoCrema: false, usoLinovera: false, usoColonia: false, usoHipoglos: false, usoOtraSolucion: false, usoBanoDiario: false, usoNada: 
                    */}
 
                    {/* Crema: usoCrema */}
                    <PatologiaMedicamentoComponent 
                        patologia='04 - ¿El paciente ha presentado Baja de peso involuntariamente en los últimos 6 meses?
' 
                        tienePatologia = {formData.usoCrema} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'usoCrema': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>


                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('Braden', { data: formData })}
                        />
                        <Button 
                            title="Siguiente"
                            onPress={() => navigation.navigate('Lesion', { data: formData })}
                        />
                    </View>
                    <Text style={styles.label}></Text>
                    <Text style={styles.label}></Text>

                </View>
            </ScrollView>
        </View>
    );

}

export default ExamenFisicoScreen;