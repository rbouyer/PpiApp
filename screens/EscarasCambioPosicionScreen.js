import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { RadioButton } from 'react-native-paper';

import EscarasCambioPosicionComponent from './components/MovilidadContencionComponent';
import EscarasCambioPosicionSelComponent from './components/AlimentacionComponent';
import Navigation from './components/NavigationComponent';

import dataDropDown from '../data/dropdown.json';

import {handleNextScreen} from '../helpers/GralHelper.js';



const EscarasCambioPosicionScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View>
            <Text style={styles.title}>Escaras y Cambio Posición</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* 
                        diagnosticoEscaras, 
                        utilizaColchonAE, 
                        funcionaColchonAE, 
                        funciona24HrsColchonAE, 
                        cambiaFamiliarPosicionColchonAE,
                        selCambioPosicionColchonAE,
                        indicaMedicoCambioPos, 
                        cuidaPielPrevenirLPPC, descripcionCuidadoPielPrevenirLPPC, 
                        cuidaAdecuadamentePielPrevenirLPPC    
                    */}


                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.labelBold}>Pregunta</Text>
                        <Text style={[styles.labelBold, {textAlign: "center"}]}>Respuesta</Text>
                    </View>

                    <View style={styles.inputRow}>
                        <Text style={[styles.label]}>Diagnóstico médico actual:</Text>
                       
                        <TextInput
                            style={[styles.textInput]}
                            textAlign="left"
                            value={formData.diagnosticoEscaras}
                            onChangeText={(val) => {handleInputChange(index, 'diagnosticoEscaras', val )}}
                        />
                    </View>

                    <EscarasCambioPosicionComponent 
                        movilidad='01 - ¿El paciente se encuentra utilizando colchón antiescara?' 
                        tieneMovilidad = {formData.utilizaColchonAE} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'utilizaColchonAE': val })}} 
                    ></EscarasCambioPosicionComponent>

                    <EscarasCambioPosicionComponent 
                        movilidad='02 - ¿El colchón antiescaras se encuentra funcionando?' 
                        tieneMovilidad = {formData.funcionaColchonAE} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'funcionaColchonAE': val })}} 
                    ></EscarasCambioPosicionComponent>

                    <EscarasCambioPosicionComponent 
                        movilidad='03 - ¿El colchón antiescaras funciona las 24 hrs al día?' 
                        tieneMovilidad = {formData.funciona24HrsColchonAE} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'funciona24HrsColchonAE': val })}} 
                    ></EscarasCambioPosicionComponent>

                    <EscarasCambioPosicionComponent 
                        movilidad='04 - ¿Su familiar lo cambia de posición?' 
                        tieneMovilidad = {formData.cambiaFamiliarPosicionColchonAE} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'cambiaFamiliarPosicionColchonAE': val })}} 
                    ></EscarasCambioPosicionComponent>


                    <EscarasCambioPosicionSelComponent 
                        alimento='05 - ¿Qué tan frecuente es que cumpla las indicaciones de cambio de posición?' 
                        lista = {dataDropDown.cambioPosicionColchonAE}
                        seleccion = {formData.selCambioPosicionColchonAE} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selCambioPosicionColchonAE': val })}} 
                    ></EscarasCambioPosicionSelComponent>


                    <EscarasCambioPosicionComponent 
                        movilidad='06 -  ¿El medico indicó cambio de posición ?' 
                        tieneMovilidad = {formData.indicaMedicoCambioPos} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'indicaMedicoCambioPos': val })}} 
                    ></EscarasCambioPosicionComponent>

                    <View style={styles.inputRow}>
                        <Text style={styles.labelBold}>Datos de ficha clínica</Text>
                        <Text style={[styles.labelBold, {textAlign: "center"}]}>Respuesta</Text>
                    </View>

                    <EscarasCambioPosicionComponent 
                        movilidad='07.1 - ¿Cuida (o le cuidan) su piel para para prevenir LPPC?' 
                        tieneMovilidad = {formData.cuidaPielPrevenirLPPC} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'cuidaPielPrevenirLPPC': val })}} 
                    ></EscarasCambioPosicionComponent>

                    <View style={styles.inputRow}>
                        <Text style={[styles.label]}>07.2 - ¿Cómo usted cuida (o le cuidan) su piel para para prevenir LPPC?</Text>
                        
                        <TextInput
                            style={[styles.textInput]}
                            textAlign="left"
                            value={formData.descripcionCuidadoPielPrevenirLPPC}
                            onChangeText={(val) => {handleInputChange(index, 'descripcionCuidadoPielPrevenirLPPC', val )}}
                        />
                    </View>

                    <EscarasCambioPosicionComponent 
                        movilidad='08 - ¿La “forma de cuidar la piel del paciente”, es la adecuada para prevenir LPP?' 
                        tieneMovilidad = {formData.cuidaAdecuadamentePielPrevenirLPPC} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'cuidaAdecuadamentePielPrevenirLPPC': val })}} 
                    ></EscarasCambioPosicionComponent>


                    <Navigation 
                        onPressPrev={() => navigation.navigate('MovilidadContencion', { data: formData })} 
                        //onPressNext={() => navigation.navigate('Alimento', { data: formData })}
                        onPressNext={() => handleNextScreen(navigation, 'Alimento', {data: formData})}
                    >
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default EscarasCambioPosicionScreen;