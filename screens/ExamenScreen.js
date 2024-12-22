import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from 'expo-checkbox';
import { format } from 'date-fns';
import { Picker } from '@react-native-picker/picker';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import dataDropDown from '../data/dropdown.json';
import {buscaEnArreglo} from '../helpers/GralHelper.js'
import {evaluaExamen} from '../helpers/ValidHelper.js'

import Navigation from './components/NavigationComponent';
import Button from './components/ButtonComponent';


const ExamenScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [showDatePickerPro, setShowDatePickerPro] = useState(false);
    const [showDatePickerOxi, setShowDatePickerOxi] = useState(false);
    const [showDatePickerGlV, setShowDatePickerGlV] = useState(false);
    const [showDatePickerGlC, setShowDatePickerGlC] = useState(false);
    const [showDatePickerHem, setShowDatePickerHem] = useState(false);

    const [formData, setFormData] = useState(data);

    const handleCheckChange = (field, value, fieldValidez, fechaEx) => {
        setFormData({ ...formData, [field]: !value, [fieldValidez]:  evaluaExamen(!value, fechaEx)});
    };
 

    return (
        <View>
            <Text style={styles.title}>Examenes</Text>
            <Text style={styles.label}>Resultados de Exámenes ( validos si tienen un plazo no mayor a tres meses hoy )</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.labelBold}>Examen</Text>
                        <Text style={styles.labelBold}>No recolectado</Text>
                        <Text style={styles.labelBold}>F.Examen</Text>
                        <Text style={styles.labelBold}>Valor</Text>

                    </View>

                    {/* Proteinemia : noRecolectadoProteinemia, fechaExProteinemia, validezExProteinemia*/}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Proteinemia</Text>

                        <View style={[styles.inputRow, {flex: 1, alignItems: 'center'}]}>
                            <CheckBox style={styles.checkbox} value={formData.noRecolectadoProteinemia} 
                            onValueChange={() => handleCheckChange('noRecolectadoProteinemia', formData.noRecolectadoProteinemia, 'validezExProteinemia', formData.fechaExProteinemia)}/>
                        </View>

                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Button color='blue'
                            title={formData.fechaExProteinemia != null? format(formData.fechaExProteinemia, 'dd-MM-yyyy'): ''}
                            onPress={() => setShowDatePickerPro(true)}
                            />
                            {showDatePickerPro && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExProteinemia}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => {setShowDatePickerPro(false); console.info(selectedDate); setFormData({ ...formData, 'fechaExProteinemia': selectedDate, 'validezExProteinemia': evaluaExamen(formData.noRecolectadoProteinemia, selectedDate) });}}
                            />)}
                        </View>

                        <Text style={[styles.textResult, {textAlign: "left"}]}>{buscaEnArreglo(formData.validezExProteinemia, dataDropDown.validezExamenes)}</Text>

                    </View>


                    {/* Oximetría de pulso : noRecolectadoOximetria, fechaExOximetria, validezExOximetria */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Oximetría de pulso</Text>

                        <View style={[styles.inputRow, {flex: 1, alignItems: 'center'}]}>
                            <CheckBox style={styles.checkbox} value={formData.noRecolectadoOximetria} 
                            onValueChange={() => handleCheckChange('noRecolectadoOximetria', formData.noRecolectadoOximetria, 'validezExOximetria', formData.fechaExOximetria)}/>
                        </View>

                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Button color='blue'
                            title={formData.fechaExOximetria != null? format(formData.fechaExOximetria, 'dd-MM-yyyy'): ''}
                            onPress={() => setShowDatePickerOxi(true)}
                            />
                            {showDatePickerOxi && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExOximetria}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => {setShowDatePickerOxi(false); console.info(selectedDate); setFormData({ ...formData, 'fechaExOximetria': selectedDate, 'validezExOximetria': evaluaExamen(formData.noRecolectadoOximetria, selectedDate) });}}
                            />)}
                        </View>

                        <Text style={[styles.textResult, {textAlign: "left"}]}>{buscaEnArreglo(formData.validezExOximetria, dataDropDown.validezExamenes)}</Text>

                    </View>


                    {/* Glicemia venosa : noRecolectadoGlicemiaV, fechaExGlicemiaV, validezExGlicemiaV */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Glicemia venosa</Text>

                        <View style={[styles.inputRow, {flex: 1, alignItems: 'center'}]}>
                            <CheckBox style={styles.checkbox} value={formData.noRecolectadoGlicemiaV} 
                            onValueChange={() => handleCheckChange('noRecolectadoGlicemiaV', formData.noRecolectadoGlicemiaV, 'validezExGlicemiaV', formData.fechaExGlicemiaV)}/>
                        </View>

                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Button color='blue'
                            title={formData.fechaExGlicemiaV != null? format(formData.fechaExGlicemiaV, 'dd-MM-yyyy'): ''}
                            onPress={() => setShowDatePickerGlV(true)}
                            />
                            {showDatePickerGlV && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExGlicemiaV}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => {setShowDatePickerGlV(false); console.info(selectedDate); setFormData({ ...formData, 'fechaExGlicemiaV': selectedDate, 'validezExGlicemiaV': evaluaExamen(formData.noRecolectadoGlicemiaV, selectedDate) });}}
                            />)}
                        </View>

                        <Text style={[styles.textResult, {textAlign: "left"}]}>{buscaEnArreglo(formData.validezExGlicemiaV, dataDropDown.validezExamenes)}</Text>

                    </View>


                    {/* Glicemia capilar : noRecolectadoGlicemiaC, fechaExGlicemiaC, validezExGlicemiaC */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Glicemia capilar</Text>

                        <View style={[styles.inputRow, {flex: 1, alignItems: 'center'}]}>
                            <CheckBox style={styles.checkbox} value={formData.noRecolectadoGlicemiaC} 
                            onValueChange={() => handleCheckChange('noRecolectadoGlicemiaC', formData.noRecolectadoGlicemiaC, 'validezExGlicemiaC', formData.fechaExGlicemiaC)}/>
                        </View>

                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Button color='blue'
                            title={formData.fechaExGlicemiaC != null? format(formData.fechaExGlicemiaC, 'dd-MM-yyyy'): ''}
                            onPress={() => setShowDatePickerGlC(true)}
                            />
                            {showDatePickerGlC && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExGlicemiaC}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => {setShowDatePickerGlC(false); console.info(selectedDate); setFormData({ ...formData, 'fechaExGlicemiaC': selectedDate, 'validezExGlicemiaC': evaluaExamen(formData.noRecolectadoGlicemiaC, selectedDate) });}}
                            />)}
                        </View>

                        <Text style={[styles.textResult, {textAlign: "left"}]}>{buscaEnArreglo(formData.validezExGlicemiaC, dataDropDown.validezExamenes)}</Text>

                    </View>


                    {/* Hemoglobina glicosilada : noRecolectadoHemoglobina, fechaExHemoglobina, validezExHemoglobina */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Hemoglobina glicosilada</Text>

                        <View style={[styles.inputRow, {flex: 1, alignItems: 'center'}]}>
                            <CheckBox style={styles.checkbox} value={formData.noRecolectadoHemoglobina} 
                            onValueChange={() => handleCheckChange('noRecolectadoHemoglobina', formData.noRecolectadoHemoglobina, 'validezExHemoglobina', formData.fechaExHemoglobina)}/>
                        </View>

                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Button color='blue'
                            title={formData.fechaExHemoglobina != null? format(formData.fechaExHemoglobina, 'dd-MM-yyyy'): ''}
                            onPress={() => setShowDatePickerHem(true)}
                            />
                            {showDatePickerHem && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExHemoglobina}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => {setShowDatePickerHem(false); console.info(selectedDate); setFormData({ ...formData, 'fechaExHemoglobina': selectedDate, 'validezExHemoglobina': evaluaExamen(formData.noRecolectadoHemoglobina, selectedDate) });}}
                            />)}
                        </View>

                        <Text style={[styles.textResult, {textAlign: "left"}]}>{buscaEnArreglo(formData.validezExHemoglobina, dataDropDown.validezExamenes)}</Text>

                    </View>


                    <Navigation 
                        onPressPrev={() => navigation.navigate('PacienteResumen', { data: formData })} 
                        onPressNext={() => navigation.navigate('PatologiaMedicamento', { data: formData })}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}


export default ExamenScreen;