import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

import LppcRBComponent from './components/PatologiaMedicamentoComponent';
import Navigation from './components/NavigationComponent';
import Selector from './components/SelectorComponent';
import Button from './components/ButtonComponent';

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';


const TemplateScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    return (
        <View>
            <Text style={styles.title}>Características LPPC</Text>
            <Text style={styles.label}>Ingrese las características LPPC</Text>
            <ScrollView>
                <View style={styles.container}>

                    <Text style={[styles.labelBold]}>Ubicación</Text>

                    {/* selUbicacionLppc, selLadoLppc, estaAsocDispositivoLppc, descDispositivoLppc, selCategoriaLppc enTratamientoLppc, estaNotificadaLppc */}
                    <View style={styles.inputRow}>
                        <Text style={[styles.label]}>01 - Localización de LPPC M</Text>

                        <Selector
                            lista = {dataDropDown.ubicacionLppc} 
                            seleccion = {formData.selUbicacionLppc} 
                            setSeleccion = {(val) => {setFormData({ ...formData, 'selUbicacionLppc': val })}} 
                        />
                        <Selector
                            lista = {dataDropDown.ladoLppc} 
                            seleccion = {formData.selLadoLppc} 
                            setSeleccion = {(val) => {setFormData({ ...formData, 'selLadoLppc': val })}} 
                        />
                    </View>

                    <Text style={styles.labelBold}>Pregunta</Text>

                    <View style={styles.inputRow}>
                        <LppcRBComponent 
                            patologia='02 - ¿LPPC - M este asociado a dispositivo medico ?' 
                            tienePatologia = {formData.estaAsocDispositivoLppc} 
                            setTienePatologia = {(val) => {setFormData({ ...formData, 'estaAsocDispositivoLppc': val })}} 
                            nroMedPatologia = {null} 
                            setNroMedPatologia = {null}
                        ></LppcRBComponent>

                    </View>

                    <View style={styles.inputRow}>
                        <Text style={[styles.label]}>03 - ¿ Qué tipo de dispositivo medico? </Text>

                        <TextInput
                            style={[styles.textInput]}
                            textAlign="left"
                            value={formData.descDispositivoLppc}
                            onChangeText={(val) => {setFormData({ ...formData, 'descDispositivoLppc': val })}}
                        />
                    </View>

                    <Text style={[styles.labelBold]}>Categoría</Text>
                    <Text style={[styles.label]}></Text>

                    <View style={styles.inputRow}>
                        <Text style={[styles.label]}>04 - ¿Cuál es la categoría o estadio de la LPPC - M?</Text>

                        <Selector
                            lista = {dataDropDown.categoriaLppc} 
                            seleccion = {formData.selCategoriaLppc} 
                            setSeleccion = {(val) => {setFormData({ ...formData, 'selCategoriaLppc': val })}} 
                        />
                        <Button 
                            title="Ver imagenes"
                            onPress={() => navigation.navigate('ClasificacionLesion', { data: formData })}
                        />

                    </View>

                    <Text style={[styles.labelBold]}>Pregunta</Text>

                    <View style={styles.inputRow}>
                        <LppcRBComponent 
                            patologia='05 - ¿La LPPC - M se encuentra en tratamiento de acuerdo con clasificación evaluar en Ficha clínica del paciente?' 
                            tienePatologia = {formData.enTratamientoLppc} 
                            setTienePatologia = {(val) => {setFormData({ ...formData, 'enTratamientoLppc': val })}} 
                            nroMedPatologia = {null} 
                            setNroMedPatologia = {null}
                        ></LppcRBComponent>
                    </View>

                    <View style={styles.inputRow}>
                        <LppcRBComponent 
                            patologia='06 - ¿La LPPC - M se encuentra notificada al programa PI ACHS?' 
                            tienePatologia = {formData.estaNotificadaLppc} 
                            setTienePatologia = {(val) => {setFormData({ ...formData, 'estaNotificadaLppc': val })}} 
                            nroMedPatologia = {null} 
                            setNroMedPatologia = {null}
                        ></LppcRBComponent>
                    </View>


                    <Navigation 
                        onPressPrev={() => navigation.navigate('Lesion', { data: formData })} 
                        onPressNext={() => navigation.navigate('ExamenFisico', { data: formData })}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default TemplateScreen;