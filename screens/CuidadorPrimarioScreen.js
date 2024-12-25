import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

import CuidadorRBComponent from './components/PatologiaMedicamentoComponent';
import SelectorSimpleComponent from './components/SelectorSimpleComponent';
import Navigation from './components/NavigationComponent';
import Button from './components/ButtonComponent';

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';

import { format } from 'date-fns';
import { calculaEdad } from '../helpers/DateHelper';


const CuidadorPrimarioScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [formData, setFormData] = useState(data);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleDateChange = (field, selectedDate) => {
        setShowDatePicker(false); // Close the picker
        //console.log('field: ' + field + ', value: ' + selectedDate);
        var edad = calculaEdad(selectedDate);
        //console.log('Edad: ' + edad)
        setFormData({ ...formData, [field]: selectedDate, 'edadCuidador': edad});
      };
  
    return (
        <View>
            <Text style={styles.title}>Cuidador Primario</Text>
            <Text style={styles.label}>Detalle Cuidador Primario</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* tieneCuidador, nombreCuidador, fechaNacimientoCuidador, edadCuidador, selSexoCuidador, selRelacionCuidador, selEstudioCuidador, selSaludCuidador */}
                    <Text style={[styles.labelBold]}>Pregunta</Text>

                    <View style={styles.inputRow}>
                        <CuidadorRBComponent 
                            patologia='01 - ¿El paciente tiene cuidador primario?' 
                            tienePatologia = {formData.tieneCuidador} 
                            setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneCuidador': val })}} 
                            nroMedPatologia = {null} 
                            setNroMedPatologia = {null}
                        ></CuidadorRBComponent>
                    </View>

                    {/* Nombre */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>02 - Nombre (registre solo iniciales de los nombres y apellidos)</Text>

                        <TextInput
                            style={[styles.textInput]}
                            textAlign="left"
                            value={formData.nombreCuidador}
                            onChangeText={(value) => handleInputChange('nombreCuidador', value)}
                        />
                    </View>

                    {/* F.Nacimiento */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>03 - F.Nacimiento</Text>

                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Button color='blue'
                            title={format(formData.fechaNacimientoCuidador, 'dd-MM-yyyy')}
                            onPress={() => setShowDatePicker(true)}
                            />
                            {showDatePicker && (<DateTimePicker
                            value={formData.fechaNacimientoCuidador}
                            maximumDate={new Date()}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => {handleDateChange('fechaNacimientoCuidador', selectedDate);}}
                            />)}
                        </View>

                        <Text style={styles.label}>04 - Edad</Text>
                        <Text style={styles.textResult}>{formData.edadCuidador}</Text>

                    </View>

                    
                    {/* Sexo */}
                    <SelectorSimpleComponent 
                        descripcion='05 - Sexo'
                        lista={dataDropDown.sexo} 
                        seleccion = {formData.selSexoCuidador} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selSexoCuidador': val })}} 
                    ></SelectorSimpleComponent>

                    {/* Relación */}
                    <SelectorSimpleComponent 
                        descripcion='06 - ¿Cuál es la relación del cuidador   con el paciente?' 
                        lista={dataDropDown.relacion} 
                        seleccion = {formData.selRelacionCuidador} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selRelacionCuidador': val })}} 
                    ></SelectorSimpleComponent>

                    {/* Estudios */}
                    <SelectorSimpleComponent 
                        descripcion='07 - Detalle a continuación ¿cuál es el mayor nivel de estudios que usted ha obtenido?' 
                        lista={dataDropDown.estudios} 
                        seleccion = {formData.selEstudioCuidador} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selEstudioCuidador': val })}} 
                    ></SelectorSimpleComponent>

                    {/* Salud */}
                    <SelectorSimpleComponent 
                        descripcion='08 - En los últimos doce meses, ¿diría que su estado de salud ha sido?' 
                        lista={dataDropDown.estadoSalud} 
                        seleccion = {formData.selSaludCuidador} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selSaludCuidador': val })}} 
                    ></SelectorSimpleComponent>


                    <Navigation 
                        onPressPrev={() => navigation.navigate('Barthel', { data: formData })} 
                        onPressNext={() => navigation.navigate('Zarit', { data: formData })}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default CuidadorPrimarioScreen;