import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { RadioButton } from 'react-native-paper';

import MovilidadContencionComponent from './components/MovilidadContencionComponent';

const MovilidadContencionScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View>
            <Text style={styles.title}>Movilidad y Contencion</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Movilidad y Contención</Text>
                        <Text style={styles.label}>SI</Text>
                        <Text style={styles.label}>NO</Text>
                        <Text style={styles.label}>Indique</Text>
                    </View>

                    {/* 
                        tieneTraccion, descTraccion, tieneInmovilidad, descInmovilidad, tieneContencion: false, descContencion: '', 
                        tieneTipoContencion: false, tipoContencion: '' */}

                    {/* Tracción: tieneTraccion, descTraccion */}
                    <MovilidadContencionComponent 
                        movilidad='01 - Uso de tracción transesquelética u otros dispositivos que impidan movilidad' 
                        tieneMovilidad = {formData.tieneTraccion} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'tieneTraccion': val })}} 
                        descMovilidad = {formData.descTraccion} 
                        setDescMovilidad = {(val) => {setFormData({ ...formData, 'descTraccion': val })}}
                    ></MovilidadContencionComponent>

                    {/* Inmovilidad: tieneInmovilidad, descInmovilidad */}
                    <MovilidadContencionComponent 
                        movilidad='02 - ¿Tiene actualmente indicación médica de NO movilizar?' 
                        tieneMovilidad = {formData.tieneInmovilidad} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'tieneInmovilidad': val })}} 
                        descMovilidad = {formData.descInmovilidad} 
                        setDescMovilidad = {(val) => {setFormData({ ...formData, 'descInmovilidad': val })}}
                    ></MovilidadContencionComponent>

                    {/* Contención: tieneContencion, descContencion */}
                    <MovilidadContencionComponent 
                        movilidad='03 - ¿Paciente estuvo o está actualmente con contenciones físicas?' 
                        tieneMovilidad = {formData.tieneContencion} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'tieneContencion': val })}} 
                        descMovilidad = {formData.descContencion} 
                        setDescMovilidad = {(val) => {setFormData({ ...formData, 'descContencion': val })}}
                    ></MovilidadContencionComponent>

                    {/* Tipo Contención: tieneTipoContencion, tipoContencion */}
                    <MovilidadContencionComponent 
                        movilidad='04 - ¿Qué tipo de contención? (brazos (Brazos, piernas, tórax,  etc)' 
                        tieneMovilidad = {formData.tieneTipoContencion} 
                        setTieneMovilidad = {(val) => {setFormData({ ...formData, 'tieneTipoContencion': val })}} 
                        descMovilidad = {formData.tipoContencion} 
                        setDescMovilidad = {(val) => {setFormData({ ...formData, 'tipoContencion': val })}}
                    ></MovilidadContencionComponent>


                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('PatologiaMedicamento', { data: formData })}
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

export default MovilidadContencionScreen;