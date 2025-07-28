import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { format } from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';

import PatologiaMedicamentoComponent from './components/PatologiaMedicamentoComponent';
import LesionComponent from './components/LesionComponent';
import Navigation from './components/NavigationComponent';
import Button from './components/ButtonComponent';

import dataDropDown from '../data/dropdown.json';

import {buscaEnArreglo, handleNextScreen} from '../helpers/GralHelper.js';
import {calculaAnos, calculaEdad, formatearFecha} from '../helpers/DateHelper.js';


const LesionScreen = ({navigation, route}) => {
    const [showDatePicker, setShowDatePicker] = useState(false);

    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    const [errors, setErrors] = useState({fld01: '', fld02: '', fld03: '', fld04: '', fld05: '', fld06: '', fld07: '', fld08: '', fld09: '', fld10: '', 
                                            fld11: '', fld12: '', fld13: '', fld14: '', fld15: '', fld16: '', fld17: '', fld18: ''});
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };
 
    const handleInputMesesPostracionChange = (value) => {
      setFormData({ ...formData, "mesesPostracionPaciente": value });
      //setFormData({ ...formData, "anosPostracionPaciente": calculaAnos(value) });
    };
  
    const handleDateChange = (field, selectedDate) => {
        setFormData({ ...formData, [field]: selectedDate });
        setShowDatePicker(false); // Close the picker
    };

    const handleValidNextScreen = () => {
        var nextScreen = formData.presentaLPPC? 'Lppc' : 'ExamenFisico';
 
        if(validateInputs()){
            //navigation.navigate(nextScreen, { data: formData });
            handleNextScreen(navigation, nextScreen, {data: formData});
        } else
            alert("Se detectaron errores de ingreso, favor revisar y completar o corregir data ingresada.");
    }

    const validateInputs = () => {
        let isValid = true;
        var nroLPPC = formData.nroLPPC && formData.nroLPPC != '0'? +buscaEnArreglo(formData.nroLPPC, dataDropDown.lppOC): 0;

        console.log('nroLPPC: ' + nroLPPC);

        errors.fld18 = null;
        if (formData.presentaLPPC && nroLPPC <= 0) {
            errors.fld18 = "Debe seleccionar campo 18: 'Número de LPP de origen comunitario'";
            setErrors({ ...errors, 'fld18': 'Debe seleccionar campo 18: Número de LPP de origen comunitario' });
            isValid = false;
        }

        return isValid;
    };

    return (
        <View>
            <Text style={styles.title}>Ubicación Lesión</Text>
            <ScrollView>
                <Text style={styles.label}>Seleccione en cada pregunta la alternativa que indica el paciente y/o su familiar : </Text>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.labelBold}>Pregunta</Text>
                        <Text style={styles.labelBold}></Text>
                        <Text style={[styles.labelBold, {textAlign: 'center'}]}>SI/NO</Text>
                    </View>

                    {/* 
                        presentaCuidadoPiel: false, presentaLesionHumedad: false, selUbicacionLesion: '', otraUbicacionLesion: '', presentaIncontinencia: false, selTipoIncontinencia: '',
                        selUbiIncontinencia: '', presentaPrevencionDermatitis: false, descPrevecionDermatitis: '', presentaDermatitisIncontinencia: false, presentaTratamientoDermatitis: false,
                        presentaDispositivoNoInvasivo: false, tipoDispositivoNoInvasivo: '',  descOtroDispositivoNoInvasivo: '', 
                        presentaDispositivoInvasivo: false, tipoDispositivoInvasivo: '',  descOtroDispositivoInvasivo: '', 
                        presentaCirugia: false, tipoCirugia: '', fechaCirugia: null, descCirugia: '',
                        presentaLPPC: false, nroLPPC: null 
                    */}
 
                    {/* Presenta Cuidado Piel: presentaCuidadoPiel */}
                    <PatologiaMedicamentoComponent 
                        patologia='01 - ¿El Plan de cuidado a la piel Adecuado para prevenir LPPC?' 
                        tienePatologia = {formData.presentaCuidadoPiel} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaCuidadoPiel': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    <Text style={styles.labelBold}>Humedad</Text>

                    {/* Presenta Lesion Humedad: presentaLesionHumedad */}
                    <PatologiaMedicamentoComponent 
                        patologia='02 - ¿Paciente presenta alguna lesión por humedad en cualquier localización? ' 
                        tienePatologia = {formData.presentaLesionHumedad} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaLesionHumedad': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* selUbicacionLesion: '', otraUbicacionLesion */}
                    <LesionComponent 
                        descripcion='03 - Localización' 
                        lista = {dataDropDown.ubicacion} 
                        seleccion = {formData.selUbicacionLesion} 
                        setSeleccion = {(valSel, valLlenado) => {setFormData({ ...formData, 'selUbicacionLesion': valSel, 'otraUbicacionLesion': valLlenado })}} 
                        llenado = {formData.otraUbicacionLesion} 
                    ></LesionComponent>


                    <Text style={styles.labelBold}>Incontinencia</Text>

                    {/* Incontinencia: presentaIncontinencia */}
                    <PatologiaMedicamentoComponent 
                        patologia='04- ¿El paciente tiene incontinencia?' 
                        tienePatologia = {formData.presentaIncontinencia} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaIncontinencia': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Tipo Incontinencia: '', selTipoIncontinencia */}
                    <LesionComponent 
                        descripcion='05 - Tipo de incontinencia' 
                        lista = {dataDropDown.incontinencia} 
                        seleccion = {formData.selTipoIncontinencia} 
                        setSeleccion = {(valSel, valLlenado) => {setFormData({ ...formData, 'selUbicacionselTipoIncontinenciaLesion': valSel })}} 
                        llenado = {formData.otraUbicacionLesion} 
                    ></LesionComponent>

                    {/* Incontinencia: presentaPrevencionDermatitis */}
                    <PatologiaMedicamentoComponent 
                        patologia='06  - En pacientes con incontinencia, ¿se aplican medidas de prevención de dermatitis? ' 
                        tienePatologia = {formData.presentaPrevencionDermatitis} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaPrevencionDermatitis': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Prevecion Dermatitis: descPrevencionDermatitis */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>07 - ¿Qué medidas aplica ?</Text>
                        <TextInput style={[styles.textInput]}
                            textAlign="left"
                            value={formData.descPrevencionDermatitis}
                            onChangeText={(val) => {setFormData( {...formData, 'descPrevencionDermatitis': val })}}
                        />
                    </View>

                    {/* Presenta Dermatitis Incontinencia: presentaDermatitisIncontinencia */}
                    <PatologiaMedicamentoComponent 
                        patologia='08 - ¿El paciente presenta dermatitis asociada a incontinencia?' 
                        tienePatologia = {formData.presentaDermatitisIncontinencia} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaDermatitisIncontinencia': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Presenta Tratamiento Dermatitis Incontinencia: presentaTratamientoDermatitis */}
                    <PatologiaMedicamentoComponent 
                        patologia='09 -Si tiene dermatitis asociada a incontinencia, ¿se está aplicando tratamiento?' 
                        tienePatologia = {formData.presentaTratamientoDermatitis} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaTratamientoDermatitis': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    <Text style={styles.labelBold}>Dispositivos médicos</Text>

                    {/* Presenta Dispositivo NoInvasivo: presentaDispositivoNoInvasivo */}
                    <PatologiaMedicamentoComponent 
                        patologia='10 - ¿Pacientes con dispositivos médicos no invasivos?' 
                        tienePatologia = {formData.presentaDispositivoNoInvasivo} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaDispositivoNoInvasivo': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Tipo DispositivoNoInvasivo: tipoDispositivoNoInvasivo,  descOtroDispositivoNoInvasivo */}
                   <LesionComponent 
                        descripcion='11 - Tipo Dispositivo No Invasivo' 
                        lista = {dataDropDown.dispositivoNoInvasivo} 
                        seleccion = {formData.tipoDispositivoNoInvasivo} 
                        setSeleccion = {(valSel, valLlenado) => {setFormData({ ...formData, 'tipoDispositivoNoInvasivo': valSel, 'descOtroDispositivoNoInvasivo': valLlenado })}} 
                        llenado = {formData.descOtroDispositivoNoInvasivo} 
                    ></LesionComponent>

                    {/* Presenta Dispositivo Invasivo: presentaDispositivoInvasivo */}
                    <PatologiaMedicamentoComponent 
                        patologia='12 - ¿Pacientes con dispositivos médicos invasivos?' 
                        tienePatologia = {formData.presentaDispositivoInvasivo} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaDispositivoInvasivo': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Tipo DispositivoInvasivo: tipoDispositivoInvasivo,  descOtroDispositivoInvasivo */}
                   <LesionComponent 
                        descripcion='12.1 - Tipo Dispositivo Invasivo' 
                        lista = {dataDropDown.dispositivoInvasivo} 
                        seleccion = {formData.tipoDispositivoInvasivo} 
                        setSeleccion = {(valSel, valLlenado) => {setFormData({ ...formData, 'tipoDispositivoInvasivo': valSel, 'descOtroDispositivoInvasivo': valLlenado })}} 
                        llenado = {formData.descOtroDispositivoInvasivo} 
                    ></LesionComponent>


                    <Text style={styles.labelBold}>Cirugia</Text>

                    {/* Presenta Cirugia: presentaCirugia */}
                    <PatologiaMedicamentoComponent 
                        patologia='13 - Paciente con cirugía en los últimos 4 meses?' 
                        tienePatologia = {formData.presentaCirugia} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaCirugia': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Prevecion Dermatitis: tipoCirugia: '', fechaCirugia: null, descCirugia: '' */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>14. Tipo Cirugia</Text>
                        <TextInput style={[styles.textInput]}
                            textAlign="left"
                            value={formData.tipoCirugia}
                            onChangeText={(val) => {setFormData( {...formData, 'tipoCirugia': val })}}
                        />
                    </View>

                    {/* F.Cirugia */}
                    <View style={styles.inputRow}>

                    <Text style={styles.label}>15. F.Cirugia</Text>

                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <Button color='blue'
                        title={formatearFecha(formData.fechaCirugia)}
                        onPress={() => setShowDatePicker(true)}
                        />
                        {showDatePicker && (<DateTimePicker
                        value={formData.fechaCirugia? formData.fechaCirugia: new Date()}
                        maximumDate={new Date()}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                        onChange={(event, selectedDate) => handleDateChange('fechaCirugia', selectedDate)}
                        />)}
                    </View>
                    </View>

                    <View style={styles.inputRow}>
                        <Text style={styles.label}>16. Nombre Cirugia</Text>
                        <TextInput style={[styles.textInput]}
                            textAlign="left"
                            value={formData.descCirugia}
                            onChangeText={(val) => {setFormData( {...formData, 'descCirugia': val })}}
                        />
                    </View>


                    <Text style={styles.labelBold}>LPPC</Text>

                    {/* LPP Comunitaria: presentaLPPC */}
                    <PatologiaMedicamentoComponent 
                        patologia='17 - ¿Paciente presenta LPP comunitaria (LPPC)?' 
                        tienePatologia = {formData.presentaLPPC} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'presentaLPPC': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* LPP Origen Comunitario: '', nroLPPC */}
                    <LesionComponent 
                        descripcion='18 - Número de LPP de origen comunitario (LPPC) hoy en día' 
                        lista = {dataDropDown.lppOC} 
                        seleccion = {formData.nroLPPC} 
                        setSeleccion = {(valSel, valLlenado) => {setErrors({ ...errors, 'fld18': '' });setFormData({ ...formData, 'nroLPPC': valSel })}} 
                    ></LesionComponent>
                    <View style={styles.inputRow}>
                        {errors.fld18 && <Text style={styles.errorText}>{errors.fld18}</Text>}
                    </View>

                    <Navigation 
                        onPressPrev={() => navigation.navigate('Piel', { data: formData })} 
                        onPressNext={() => handleValidNextScreen()}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default LesionScreen;