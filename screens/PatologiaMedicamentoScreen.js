import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';


import PatologiaMedicamentoComponent from './components/PatologiaMedicamentoComponent';
import Navigation from './components/NavigationComponent';

const PatologiaMedicamentoScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View>
            <Text style={styles.title}>Patologias y Medicamentos</Text>
            <ScrollView>
                <Text style={styles.label}>Alguna vez un profesional de salud le ha indicado que usted tiene</Text>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Patología</Text>
                        <Text style={styles.label}>SI</Text>
                        <Text style={styles.label}>NO</Text>
                        <Text style={styles.label}>Nro medicamentos día</Text>
                    </View>

                    {/* 
    tieneArtritis: false, nroMedArtritis: 0, tieneDiabetes: false, nroMedDiabetes: 0, tieneDisplidemia: false, nroMedDisplidemia: 0, tieneCardio: false, nroMedcardio: 0,
    tieneEPOC: false, nroMedEPOC: 0, tieneHipArterial: false, nroMedHipArterial: 0, tieneInUrinaria: false, nroMedInUrinaria: 0, tieneInfarto: false, nroMedInfarto: 0,
    tieneInsufCardiaca: false, nroMedInsufCardiaca: 0, tieneOsteoporosis: false, nroMedOsteoporosis: 0, tieneHepatico: false, nroMedHepatico: 0, tieneResInsulina: false, nroMedResInsulina: 0,
    tieneSecuelaACV: false, nroMedSecuelaACV: 0, tieneAudicionReducida: false, tieneVisionReducida: false*/}
                    {/* Artritis Reumatoidea: tieneArtritis, nroMedArtritis */}
                    <PatologiaMedicamentoComponent 
                        patologia='Artritis Reumatoidea' 
                        tienePatologia = {formData.tieneArtritis} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneArtritis': val })}} 
                        nroMedPatologia = {formData.nroMedArtritis} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedArtritis': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Diabetes: tieneDiabetes, nroMedDiabetes */}
                    <PatologiaMedicamentoComponent 
                        patologia='Diabetes' 
                        tienePatologia = {formData.tieneDiabetes} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneDiabetes': val })}} 
                        nroMedPatologia = {formData.nroMedDiabetes} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedDiabetes': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Dislipidemia: tieneDisplidemia, nroMedDisplidemia */}
                    <PatologiaMedicamentoComponent 
                        patologia='Dislipidemia' 
                        tienePatologia = {formData.tieneDisplidemia} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneDisplidemia': val })}} 
                        nroMedPatologia = {formData.nroMedDisplidemia} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedDisplidemia': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Enfermedad cardiovascular: tieneCardio, nroMedCardio */}
                    <PatologiaMedicamentoComponent 
                        patologia='Enfermedad cardiovascular' 
                        tienePatologia = {formData.tieneCardio} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneCardio': val })}} 
                        nroMedPatologia = {formData.nroMedCardio} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedCardio': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* EPOC: tieneEPOC, nroMedEPOC */}
                    <PatologiaMedicamentoComponent 
                        patologia='EPOC' 
                        tienePatologia = {formData.tieneEPOC} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneEPOC': val })}} 
                        nroMedPatologia = {formData.nroMedEPOC} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedEPOC': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Hipertensión Arterial: tieneHipArterial, nroMedHipArterial */}
                    <PatologiaMedicamentoComponent 
                        patologia='Hipertensión Arterial' 
                        tienePatologia = {formData.tieneHipArterial} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneHipArterial': val })}} 
                        nroMedPatologia = {formData.nroMedHipArterial} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedHipArterial': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Incontinencia Urinaria: tieneInUrinaria, nroMedInUrinaria */}
                    <PatologiaMedicamentoComponent 
                        patologia='Incontinencia Urinaria' 
                        tienePatologia = {formData.tieneInUrinaria} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneInUrinaria': val })}} 
                        nroMedPatologia = {formData.nroMedInUrinaria} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedInUrinaria': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Infarto agudo al Miocardio: tieneInfarto, nroMedInfarto */}
                    <PatologiaMedicamentoComponent 
                        patologia='Infarto agudo al Miocardio' 
                        tienePatologia = {formData.tieneInfarto} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneInfarto': val })}} 
                        nroMedPatologia = {formData.nroMedInfarto} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedInfarto': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Insuficiencia Cardiaca: tieneInsufCardiaca, nroMedInsufCardiaca */}
                    <PatologiaMedicamentoComponent 
                        patologia='Insuficiencia Cardiaca' 
                        tienePatologia = {formData.tieneInsufCardiaca} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneInsufCardiaca': val })}} 
                        nroMedPatologia = {formData.nroMedInsufCardiaca} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedInsufCardiaca': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Osteoporosis: tieneOsteoporosis, nroMedOsteoporosis */}
                    <PatologiaMedicamentoComponent 
                        patologia='Osteoporosis' 
                        tienePatologia = {formData.tieneOsteoporosis} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneOsteoporosis': val })}} 
                        nroMedPatologia = {formData.nroMedOsteoporosis} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedOsteoporosis': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Problemas Hepáticos  : tieneHepatico, nroMedHepatico */}
                    <PatologiaMedicamentoComponent 
                        patologia='Problemas Hepáticos' 
                        tienePatologia = {formData.tieneHepatico} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneHepatico': val })}} 
                        nroMedPatologia = {formData.nroMedHepatico} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedHepatico': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Resistencia a la Insulina  : tieneResInsulina, nroMedResInsulina */}
                    <PatologiaMedicamentoComponent 
                        patologia='Resistencia a la Insulina' 
                        tienePatologia = {formData.tieneResInsulina} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneResInsulina': val })}} 
                        nroMedPatologia = {formData.nroMedResInsulina} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedResInsulina': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Secuela de ACV: tieneSecuelaACV, nroMedSecuelaACV */}
                    <PatologiaMedicamentoComponent 
                        patologia='Secuela de ACV' 
                        tienePatologia = {formData.tieneSecuelaACV} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneSecuelaACV': val })}} 
                        nroMedPatologia = {formData.nroMedSecuelaACV} 
                        setNroMedPatologia = {(val) => {setFormData({ ...formData, 'nroMedSecuelaACV': val })}}
                    ></PatologiaMedicamentoComponent>

                    {/* Audición reducida: tieneAudicionReducida */}
                    <PatologiaMedicamentoComponent 
                        patologia='Audición reducida' 
                        tienePatologia = {formData.tieneAudicionReducida} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneAudicionReducida': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    {/* Visión reducida: tieneVisionReducida */}
                    <PatologiaMedicamentoComponent 
                        patologia='Visión reducida' 
                        tienePatologia = {formData.tieneVisionReducida} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tieneVisionReducida': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>


                    <Navigation 
                        onPressPrev={() => navigation.navigate('Examen', { data: formData })} 
                        onPressNext={() => navigation.navigate('PatologiaMedicamento2', { data: formData })}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default PatologiaMedicamentoScreen;