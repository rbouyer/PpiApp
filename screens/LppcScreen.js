import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

import LppcRBComponent from './components/PatologiaMedicamentoComponent';

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

                    <Text style={[styles.label]}>Ubicación</Text>

                    {/* selUbicacionLppc, selLadoLppc, estaAsocDispositivoLppc, descDispositivoLppc, selCategoriaLppc enTratamientoLppc, estaNotificadaLppc */}
                    <View style={styles.inputRow}>
                        <Text style={[styles.label]}>01 - Localización de LPPC M</Text>

                        <Picker
                            selectedValue={formData.selUbicacionLppc}
                            style={[styles.picker]}
                            onValueChange={(val) => {setFormData({ ...formData, 'selUbicacionLppc': val })}}
                        >
                            { dataDropDown.ubicacionLppc.map((ingreso)=>
                                <Picker.Item label={ingreso.label} value={ingreso.value} key={ingreso.value} />
                                )}
                        </Picker>
                        <Picker
                            selectedValue={formData.selLadoLppc}
                            style={[styles.picker]}
                            onValueChange={(val) => {setFormData({ ...formData, 'selLadoLppc': val })}}
                        >
                            { dataDropDown.ladoLppc.map((ingreso)=>
                                <Picker.Item label={ingreso.label} value={ingreso.value} key={ingreso.value} />
                                )}
                        </Picker>
                    </View>

                    <Text style={[styles.label]}>Pregunta</Text>

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

                    <Text style={[styles.label]}>Categoría</Text>

                    <View style={styles.inputRow}>
                        <Text style={[styles.label]}>04 - ¿Cuál es la categoría o estadio de la LPPC - M?</Text>

                        <Picker
                            selectedValue={formData.selCategoriaLppc}
                            style={[styles.picker, { flex: 2 }]}
                            onValueChange={(val) => {setFormData({ ...formData, 'selCategoriaLppc': val })}}
                        >
                            { dataDropDown.categoriaLppc.map((ingreso)=>
                                <Picker.Item label={ingreso.label} value={ingreso.value} key={ingreso.value} />
                                )}
                        </Picker>
                        <Button 
                            title="Ver imagenes"
                            onPress={() => navigation.navigate('ClasificacionLesion', { data: formData })}
                        />

                    </View>

                    <Text style={[styles.label]}>Pregunta</Text>

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


                    <View style={styles.inputRow}>
                        {/* <Button
                            title="Cancelar"
                            onPress={alert('¿Esta seguro que desea cancelar el ingreso de las características LPPC?')}
                        /> */}
                        <Button 
                            title="Volver"
                            onPress={() => navigation.navigate('Lesion', { data: formData })}
                        />
                        <Button 
                            title="Siguiente"
                            onPress={() => navigation.navigate('ExamenFisico', { data: formData })}
                        />
                    </View>
                    <Text style={styles.label}></Text>
                    <Text style={styles.label}></Text>

                </View>
            </ScrollView>
        </View>
    );

}

export default TemplateScreen;