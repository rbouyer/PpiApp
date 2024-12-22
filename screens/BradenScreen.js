import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

import BradenComponent from './components/BradenComponent';
import Navigation from './components/NavigationComponent';

import dataDropDown from '../data/dropdown.json';


const BradenScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const calcularPtje = () => {
        var res = 0;

        res += !isNaN(formData.ptjePercepcion)? formData.ptjePercepcion: 0;
        res += !isNaN(formData.ptjeHumedad)? formData.ptjeHumedad: 0;
        res += !isNaN(formData.ptjeActividad)? formData.ptjeActividad: 0;
        res += !isNaN(formData.ptjeMovilidad)? formData.ptjeMovilidad: 0;
        res += !isNaN(formData.ptjeNutricion)? formData.ptjeNutricion: 0;
        res += !isNaN(formData.ptjeFuerza)? formData.ptjeFuerza: 0;

        return res;
    }

    const obtenerRiesgo = () => {
        var res = '';
        var totPtje = calcularPtje();

        if(totPtje <= 12)
            res = 'Riesgo Alto';
        else if(totPtje <= 15)
            res = 'Riesgo Moderado';
        else
            res = 'Riesgo Bajo';

        return res;
    }

    return (
        <View>
            <Text style={styles.title}>Riesgo Braden</Text>
            <ScrollView>
            <Text style={styles.label}>¿Cuál es el nivel de riesgo de LPPC que el paciente tiene hoy?  (Escala de Riesgo Braden?)</Text>
            <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.labelBold}>Criterio</Text>
                        <Text style={styles.labelBold}>Nivel</Text>
                        <Text style={styles.labelBold}>Puntaje Item</Text>
                    </View>

                    {/* 
                        selPercepcion: '', ptjePercepcion: null, selHumedad: '', ptjeHumedad: null, selActividad: '', ptjeActividad: null, selMovilidad: '', ptjeMovilidad: null,
                        selNutricion: '', ptjeNutricion: null, selFuerza: '', ptjeFuerza */}

                    {/* Percepcion: selPercepcion, ptjePercepcion */}
                    <BradenComponent 
                        braden='01 - Persepcion Sensorial' 
                        lista = {dataDropDown.percepcion} 
                        seleccion = {formData.selPercepcion} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selPercepcion': valSel, 'ptjePercepcion': valPtje })}} 
                        puntaje = {formData.ptjePercepcion} 
                    ></BradenComponent>

                    {/* Humedad: selHumedad, ptjeHumedad */}
                    <BradenComponent 
                        braden='02 - Humedad' 
                        lista = {dataDropDown.humedad} 
                        seleccion = {formData.selHumedad} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selHumedad': valSel, 'ptjeHumedad': valPtje })}} 
                        puntaje = {formData.ptjeHumedad} 
                    ></BradenComponent>

                    {/* Actividad: selActividad: '', ptjeActividad */}
                    <BradenComponent 
                        braden='03 - Actividad' 
                        lista = {dataDropDown.actividad} 
                        seleccion = {formData.selActividad} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selActividad': valSel, 'ptjeActividad': valPtje })}} 
                        puntaje = {formData.ptjeActividad} 
                    ></BradenComponent>

                    {/* Movilidad: selMovilidad, ptjeMovilidad */}
                    <BradenComponent 
                        braden='04 - Movilidad' 
                        lista = {dataDropDown.movilidad} 
                        seleccion = {formData.selMovilidad} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selMovilidad': valSel, 'ptjeMovilidad': valPtje })}} 
                        puntaje = {formData.ptjeMovilidad} 
                    ></BradenComponent>

                    {/* Nutricion: selNutricion: '', ptjeNutricion */}
                    <BradenComponent 
                        braden='05 - Nutricion' 
                        lista = {dataDropDown.nutricion} 
                        seleccion = {formData.selNutricion} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selNutricion': valSel, 'ptjeNutricion': valPtje })}} 
                        puntaje = {formData.ptjeNutricion} 
                    ></BradenComponent>

                    {/* FzaFricion: selFuerza: '', ptjeFuerza */}
                    <BradenComponent 
                        braden='06 - Fuerza de Friccion y Cizalla' 
                        lista = {dataDropDown.fzaFriccion} 
                        seleccion = {formData.selFuerza} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selFuerza': valSel, 'ptjeFuerza': valPtje })}} 
                        puntaje = {formData.ptjeFuerza} 
                    ></BradenComponent>

                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Ptje.Braden</Text>
                        <Text style={styles.textResult}>{calcularPtje()}</Text>
                        <Text style={styles.label}>Riesgo Braden</Text>
                        <Text style={styles.textResult}>{obtenerRiesgo()}</Text>
                    </View>

                    <Navigation 
                        onPressPrev={() => navigation.navigate('Alimento', { data: formData })} 
                        onPressNext={() => navigation.navigate('Piel', { data: formData })}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default BradenScreen;