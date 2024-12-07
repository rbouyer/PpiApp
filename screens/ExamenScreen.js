import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import { format } from 'date-fns';
import { Picker } from '@react-native-picker/picker';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import dataDropDown from '../data/dropdown.json';
import {buscaEnArreglo} from '../helpers/GralHelper.js'
import {evaluaExamen} from '../helpers/ValidHelper.js'


const ExamenScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleCheckChange = (field, value) => {
        setFormData({ ...formData, [field]: !value });
    };

    const handleDateChange = (field, selectedDate) => {
      setFormData({ ...formData, [field]: selectedDate });
      setShowDatePicker(false); // Close the picker
    };


    return (
        <View>
            <Text style={styles.title}>Ingreso Paciente</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Proteinemia : noRecolectadoProteinemia, fechaExProteinemia, validezExProteinemia*/}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Proteinemia</Text>

                        {/* <CheckBox value={formData.noRecolectadoProteinemia} onValueChange={() => handleCheckChange('noRecolectadoProteinemia', formData.noRecolectadoProteinemia)} style={styles.checkbox}/> */}


                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Button color='gray'
                            title={formData.fechaExProteinemia != null? format(formData.fechaExProteinemia, 'dd-MM-yyyy'): ''}
                            onPress={() => setShowDatePicker(true)}
                            />
                            {showDatePicker && (<DateTimePicker
                            value={formData.fechaExProteinemia}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => handleDateChange('fechaExProteinemia', selectedDate)}
                            onEndEditing={(e) => handleInputChange('validezExProteinemia', evaluaExamen(formData.noRecolectadoProteinemia, e.nativeEvent.text))}
                            />)}
                        </View>

                        <Text style={[styles.textResult, {textAlign: "left"}]}>{buscaEnArreglo(formData.validezExProteinemia, dataDropDown.validezExamenes)}</Text>

                    </View>

                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('PacienteResumen', { data: formData })}
                        />
                        <Button 
                            title="Siguiente"
                            onPress={() => navigation.navigate('EnviaData', { data: formData })}
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    );

}


export default ExamenScreen;