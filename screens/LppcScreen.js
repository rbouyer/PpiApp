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

import {buscaEnArreglo} from '../helpers/GralHelper.js';

const LppScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    const repetitions = +buscaEnArreglo(formData.nroLPPC, dataDropDown.lppOC);

    //console.log('nro LPPC: ' + repetitions);
    //console.log('nro LPPC: ' + formData.nroLPPC);

    // State to store data for each iteration
    const [lpp, setLpp] = useState(formData.lppc == null? Array.from({ length: repetitions }, () => ({ selUbicacionLppc: '', 
                                                                                selLadoLppc: '', 
                                                                                estaAsocDispositivoLppc: false, 
                                                                                descDispositivoLppc: '', 
                                                                                selCategoriaLppc: '', 
                                                                                enTratamientoLppc: false, 
                                                                                estaNotificadaLppc: false,
                                                                                errors: {} })): formData.lppc);

    if(formData.lppc == null) 
        setFormData({ ...formData, 'lppc': lpp });
    // else
    //     setLpp(formData.lppc);


    // Function to handle input change
    const handleInputChange = (index, field, value) => {
        const updatedData = [...lpp];
        updatedData[index][field] = value;
        updatedData[index].errors[field] = '';
        setLpp(updatedData);
    };
    
    return (
        <View>
            <Text style={styles.title}>Ingrese las características LPPC</Text>
            <ScrollView>
                <View>

                    {lpp.map((entry, index) => (
                        <View key={index} style={[styles.container, {justifyContent: 'left', alignItems: 'left'}]}>
                            <Text style={[styles.title, {color: 'red'}]}>LPPC {index + 1}</Text>

                            {/* selUbicacionLppc, selLadoLppc, estaAsocDispositivoLppc, descDispositivoLppc, selCategoriaLppc enTratamientoLppc, estaNotificadaLppc */}
                             <View style={styles.inputRow}>
                                <Text style={[styles.label]}>{index + 1}.01 - Localización de LPPC {index + 1}</Text>

                                <Selector
                                    lista = {dataDropDown.ubicacionLppc} 
                                    seleccion = {entry.selUbicacionLppc} 
                                    setSeleccion = {(val) => {handleInputChange(index, 'selUbicacionLppc', val )}} 
                                />
                                <Selector
                                    lista = {dataDropDown.ladoLppc} 
                                    seleccion = {entry.selLadoLppc} 
                                    setSeleccion = {(val) => {handleInputChange(index, 'selLadoLppc', val )}} 
                                />
                            </View>

                           <Text style={[styles.labelBold]}>Pregunta</Text>

                            <View style={styles.inputRow}>
                                <LppcRBComponent 
                                    patologia={(index + 1) + '.02 - ¿LPPC - ' + (index + 1) + ' este asociado a dispositivo medico ?'} 
                                    tienePatologia = {entry.estaAsocDispositivoLppc} 
                                    setTienePatologia = {(val) => {handleInputChange( index, 'estaAsocDispositivoLppc', val )}} 
                                    nroMedPatologia = {null} 
                                    setNroMedPatologia = {null}
                                ></LppcRBComponent>

                            </View>

                            <View style={styles.inputRow}>
                                <Text style={[styles.label]}>{index + 1}.03 - ¿ Qué tipo de dispositivo medico? </Text>

                                <TextInput
                                    style={[styles.textInput]}
                                    textAlign="left"
                                    value={entry.descDispositivoLppc}
                                    onChangeText={(val) => {handleInputChange(index, 'descDispositivoLppc', val )}}
                                />
                            </View>

                            <Text style={[styles.labelBold]}>Categoría</Text>
                            <Text style={[styles.label]}></Text>

                            <View style={styles.inputRow}>
                                <Text style={[styles.label]}>{index + 1}.04 - ¿Cuál es la categoría o estadio de la LPPC - {index + 1}?</Text>

                                <Selector
                                    lista = {dataDropDown.categoriaLppc} 
                                    seleccion = {entry.selCategoriaLppc} 
                                    setSeleccion = {(val) => {handleInputChange(index, 'selCategoriaLppc', val )}} 
                                />
                                <Button 
                                    title="Ver imagenes"
                                    onPress={() => navigation.navigate('ClasificacionLesion', { data: formData })}
                                />

                            </View>

                            <Text style={[styles.labelBold]}>Pregunta</Text>

                            <View style={styles.inputRow}>
                                <LppcRBComponent 
                                    patologia={(index + 1) + '.05 - ¿La LPPC - ' + (index + 1) + ' se encuentra en tratamiento de acuerdo con clasificación evaluar en Ficha clínica del paciente?'} 
                                    tienePatologia = {entry.enTratamientoLppc} 
                                    setTienePatologia = {(val) => {handleInputChange(index, 'enTratamientoLppc', val )}} 
                                    nroMedPatologia = {null} 
                                    setNroMedPatologia = {null}
                                ></LppcRBComponent>
                            </View>

                            <View style={styles.inputRow}>
                                <LppcRBComponent 
                                    patologia={(index + 1) + '.06 - ¿La LPPC - ' + (index + 1) + ' se encuentra notificada al programa PI ACHS?'}
                                    tienePatologia = {entry.estaNotificadaLppc} 
                                    setTienePatologia = {(val) => {handleInputChange(index, 'estaNotificadaLppc', val )}} 
                                    nroMedPatologia = {null} 
                                    setNroMedPatologia = {null}
                                ></LppcRBComponent>
                            </View>


                        </View>
                    ))}


                    <Navigation 
                        onPressPrev={() => navigation.navigate('Lesion', { data: formData })} 
                        onPressNext={() => navigation.navigate('ExamenFisico', { data: formData })}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default LppScreen;