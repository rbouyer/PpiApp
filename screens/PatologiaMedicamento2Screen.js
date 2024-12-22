import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PatologiaMedicamentoComponent from './components/PatologiaMedicamentoComponent';
import Navigation from './components/NavigationComponent';

import styles from './Styles';

const PatologiaMedicamento2Screen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    const esAdherenteTratamiento = () => {
        return !formData.olvidaMedicamento && formData.tomaMedicamentosEnHora && !formData.dejaDeTomarMedicamentoBien && !formData.dejaDeTomarMedicamentoMal;
    }

    return (
        <View>
            <Text style={styles.title}>Patologias y Medicamentos II</Text>
            <Text style={styles.label}>Pregunte al paciente, las siguientes cuatro preguntas de respuesta dicotómica</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.labelBold}>Patología</Text>
                        <Text style={styles.labelBold}></Text>
                        <Text style={styles.labelBold}></Text>
                        <Text style={styles.labelBold}></Text>
                        <Text style={styles.labelBold}></Text>
                        <Text style={styles.labelBold}>SI/NO</Text>

                    </View>

                    {/* olvidaMedicamento, tomaMedicamentosEnHora, dejaDeTomarMedicamentoBien, dejaDeTomarMedicamentoMal, adherenteTratamiento */}
                    <PatologiaMedicamentoComponent 
                        patologia='01- ¿Olvida alguna vez tomar los medicamentos para tratar su enfermedad? ' 
                        tienePatologia = {formData.olvidaMedicamento} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'olvidaMedicamento': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                     <PatologiaMedicamentoComponent 
                        patologia='02 - ¿Toma los medicamentos a las horas indicadas?' 
                        tienePatologia = {formData.tomaMedicamentosEnHora} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tomaMedicamentosEnHora': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                    <PatologiaMedicamentoComponent 
                        patologia='03 - Cuando se encuentra bien, ¿deja usted de tomar el medicamento?' 
                        tienePatologia = {formData.dejaDeTomarMedicamentoBien} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'dejaDeTomarMedicamentoBien': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>

                     <PatologiaMedicamentoComponent 
                        patologia='04 - Si alguna vez el medicmento le sienta mal, ¿deja usted de tomar el medicamento? ' 
                        tienePatologia = {formData.dejaDeTomarMedicamentoMal} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'dejaDeTomarMedicamentoMal': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>


                    <PatologiaMedicamentoComponent 
                        patologia='05 - ¿Paciente adherente al tratamiento?' 
                        tienePatologia = {esAdherenteTratamiento()} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'adherenteTratamiento': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></PatologiaMedicamentoComponent>


                    <Navigation 
                        onPressPrev={() => navigation.navigate('PatologiaMedicamento', { data: formData })} 
                        onPressNext={() => navigation.navigate('MovilidadContencion', { data: formData })}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default PatologiaMedicamento2Screen;