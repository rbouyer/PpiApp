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
import {formatearFecha} from '../helpers/DateHelper.js'

import Navigation from './components/NavigationComponent';
import Button from './components/ButtonComponent';


const ExamenScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [showDatePickerPro, setShowDatePickerPro] = useState(false);
    const [showDatePickerOxi, setShowDatePickerOxi] = useState(false);
    const [showDatePickerGlV, setShowDatePickerGlV] = useState(false);
    const [showDatePickerGlC, setShowDatePickerGlC] = useState(false);
    const [showDatePickerHem, setShowDatePickerHem] = useState(false);

    const [showDatePickerProc, setShowDatePickerProc] = useState(false);
    const [showDatePickerProt, setShowDatePickerProt] = useState(false);
    const [showDatePickerCrea, setShowDatePickerCrea] = useState(false);

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
                            title={formatearFecha(formData.fechaExProteinemia)}
                            onPress={() => setShowDatePickerPro(true)}
                            />
                            {showDatePickerPro && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExProteinemia || new Date()}
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
                            title={formatearFecha(formData.fechaExOximetria)}
                            onPress={() => setShowDatePickerOxi(true)}
                            />
                            {showDatePickerOxi && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExOximetria || new Date()}
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
                            title={formatearFecha(formData.fechaExGlicemiaV)}
                            onPress={() => setShowDatePickerGlV(true)}
                            />
                            {showDatePickerGlV && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExGlicemiaV || new Date()}
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
                            title={formatearFecha(formData.fechaExGlicemiaC)}
                            onPress={() => setShowDatePickerGlC(true)}
                            />
                            {showDatePickerGlC && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExGlicemiaC || new Date()}
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
                            title={formatearFecha(formData.fechaExHemoglobina)}
                            onPress={() => setShowDatePickerHem(true)}
                            />
                            {showDatePickerHem && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExHemoglobina || new Date()}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => {setShowDatePickerHem(false); console.info(selectedDate); setFormData({ ...formData, 'fechaExHemoglobina': selectedDate, 'validezExHemoglobina': evaluaExamen(formData.noRecolectadoHemoglobina, selectedDate) });}}
                            />)}
                        </View>

                        <Text style={[styles.textResult, {textAlign: "left"}]}>{buscaEnArreglo(formData.validezExHemoglobina, dataDropDown.validezExamenes)}</Text>

                    </View>



                    {/* Procalcitonina Sérica : noRecolectadoProcalcitonina, fechaExProcalcitonina, validezExProcalcitonina */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Procalcitonina Sérica</Text>

                        <View style={[styles.inputRow, {flex: 1, alignItems: 'center'}]}>
                            <CheckBox style={styles.checkbox} value={formData.noRecolectadoProcalcitonina} 
                            onValueChange={() => handleCheckChange('noRecolectadoProcalcitonina', formData.noRecolectadoProcalcitonina, 'validezExProcalcitonina', formData.fechaExProcalcitonina)}/>
                        </View>

                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Button color='blue'
                            title={formatearFecha(formData.fechaExProcalcitonina)}
                            onPress={() => setShowDatePickerProc(true)}
                            />
                            {showDatePickerProc && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExProcalcitonina || new Date()}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => {setShowDatePickerProc(false); console.info(selectedDate); setFormData({ ...formData, 'fechaExProcalcitonina': selectedDate, 'validezExProcalcitonina': evaluaExamen(formData.noRecolectadoProcalcitonina, selectedDate) });}}
                            />)}
                        </View>

                        <Text style={[styles.textResult, {textAlign: "left"}]}>{buscaEnArreglo(formData.validezExProcalcitonina, dataDropDown.validezExamenes)}</Text>

                    </View>


                    {/* Proteína C Reactiva : noRecolectadoProteina, fechaExProteina, validezExProteina */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Proteína C Reactiva</Text>

                        <View style={[styles.inputRow, {flex: 1, alignItems: 'center'}]}>
                            <CheckBox style={styles.checkbox} value={formData.noRecolectadoProteina} 
                            onValueChange={() => handleCheckChange('noRecolectadoProteina', formData.noRecolectadoProteina, 'validezExProteina', formData.fechaExProteina)}/>
                        </View>

                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Button color='blue'
                            title={formatearFecha(formData.fechaExProteina)}
                            onPress={() => setShowDatePickerProt(true)}
                            />
                            {showDatePickerProt && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExProteina || new Date()}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => {setShowDatePickerProt(false); console.info(selectedDate); setFormData({ ...formData, 'fechaExProteina': selectedDate, 'validezExProteina': evaluaExamen(formData.noRecolectadoProteina, selectedDate) });}}
                            />)}
                        </View>

                        <Text style={[styles.textResult, {textAlign: "left"}]}>{buscaEnArreglo(formData.validezExProteina, dataDropDown.validezExamenes)}</Text>

                    </View>


                    {/* Creatinina Sérica : noRecolectadoCreatinina: false, fechaExCreatinina: new Date(), validezExCreatinina */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Creatinina Sérica</Text>

                        <View style={[styles.inputRow, {flex: 1, alignItems: 'center'}]}>
                            <CheckBox style={styles.checkbox} value={formData.noRecolectadoCreatinina} 
                            onValueChange={() => handleCheckChange('noRecolectadoCreatinina', formData.noRecolectadoCreatinina, 'validezExCreatinina', formData.fechaExCreatinina)}/>
                        </View>

                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Button color='blue'
                            title={formatearFecha(formData.fechaExCreatinina)}
                            onPress={() => setShowDatePickerCrea(true)}
                            />
                            {showDatePickerCrea && (<DateTimePicker
                            maximumDate={new Date()}
                            value={formData.fechaExCreatinina || new Date()}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            onChange={(event, selectedDate) => {setShowDatePickerCrea(false); console.info(selectedDate); setFormData({ ...formData, 'fechaExCreatinina': selectedDate, 'validezExCreatinina': evaluaExamen(formData.noRecolectadoCreatinina, selectedDate) });}}
                            />)}
                        </View>

                        <Text style={[styles.textResult, {textAlign: "left"}]}>{buscaEnArreglo(formData.validezExCreatinina, dataDropDown.validezExamenes)}</Text>

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