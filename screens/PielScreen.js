import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { RadioButton } from 'react-native-paper';

import PatologiaMedicamentoComponent from './components/PatologiaMedicamentoComponent';
import Navigation from './components/NavigationComponent';

import {handleNextScreen} from '../helpers/GralHelper.js';


const PielScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View>
            <Text style={styles.title}>Mantención Piel</Text>
            <ScrollView>
                <Text style={styles.label}>¿Como mantienen la piel del paciente? Seleccione la o las alternativas siguientes</Text>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.labelBold}>Pregunta</Text>
                        <Text style={styles.labelBold}></Text>
                        <Text style={styles.labelBold}>SI/NO</Text>
                    </View>

                    {/* 
                        usoCrema: false, usoLinovera: false, usoColonia: false, usoHipoglos: false, usoOtraSolucion: false, usoBanoDiario: false, usoNada: 
                    */}
 
                    {/* Crema: usoCrema */}
                    <PatologiaMedicamentoComponent 
                        patologia='01  - ¿Uso de cremas?' 
                        tienePatologia = {formData.usoCrema} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'usoCrema': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Linovera: usoLinovera */}
                    <PatologiaMedicamentoComponent 
                        patologia='02 - ¿Uso de Linovera?' 
                        tienePatologia = {formData.usoLinovera} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'usoLinovera': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Colonia: usoColonia */}
                    <PatologiaMedicamentoComponent 
                        patologia='03 - Fricción con alcohol o colonias' 
                        tienePatologia = {formData.usoColonia} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'usoColonia': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Hipoglos: usoHipoglos */}
                    <PatologiaMedicamentoComponent 
                        patologia='04 - Uso de hipoglós' 
                        tienePatologia = {formData.usoHipoglos} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'usoHipoglos': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Otra: usoOtraSolucion */}
                    <PatologiaMedicamentoComponent 
                        patologia='05 -Otra solución' 
                        tienePatologia = {formData.usoOtraSolucion} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'usoOtraSolucion': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* BanoDiario: usoBanoDiario */}
                    <PatologiaMedicamentoComponent 
                        patologia='06 - Baño Diario' 
                        tienePatologia = {formData.usoBanoDiario} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'usoBanoDiario': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Nada: usoNada */}
                    <PatologiaMedicamentoComponent 
                        patologia='07 - No hace nada' 
                        tienePatologia = {formData.usoNada} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'usoNada': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>


                    <Navigation 
                        onPressPrev={() => navigation.navigate('Braden', { data: formData })} 
                        //onPressNext={() => navigation.navigate('Lesion', { data: formData })}
                        onPressNext={() => handleNextScreen(navigation, 'Lesion', {data: formData})}
                    >
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default PielScreen;