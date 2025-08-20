import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import BarthelComponent from './components/BradenComponent';
import Navigation from './components/NavigationComponent';

import styles from './Styles';

import dataDropDown from '../data/dropdown.json';

import {handleNextScreen} from '../helpers/GralHelper.js';


const BarthelScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

        // Al cambiar el estado de formData, se actualiza el total Barthel
    useEffect(() => {
        // This will run after formData updates
        actualizarTotal();
    }, [formData.ptjeDependenciaComer,formData.ptjeDependenciaLavarse,formData.ptjeDependenciaVestirse,formData.ptjeDependenciaArreglarse,formData.ptjeDependenciaDeposicion,formData.ptjeDependenciaMiccion,formData.ptjeDependenciaRetrete,formData.ptjeDependenciaTrasladarse,formData.ptjeDependenciaDeambular,formData.ptjeDependenciaMovilizarse]);

    const actualizarTotal = () => {
        var total = calcularPtje();
        setFormData({ ...formData, totalBarthel: total });
    }

    const calcularPtje = () => {
        var res = 0;

        res += !isNaN(formData.ptjeDependenciaComer)? formData.ptjeDependenciaComer: 0;
        res += !isNaN(formData.ptjeDependenciaLavarse)? formData.ptjeDependenciaLavarse: 0;
        res += !isNaN(formData.ptjeDependenciaVestirse)? formData.ptjeDependenciaVestirse: 0;
        res += !isNaN(formData.ptjeDependenciaArreglarse)? formData.ptjeDependenciaArreglarse: 0;
        res += !isNaN(formData.ptjeDependenciaDeposicion)? formData.ptjeDependenciaDeposicion: 0;
        res += !isNaN(formData.ptjeDependenciaMiccion)? formData.ptjeDependenciaMiccion: 0;
        res += !isNaN(formData.ptjeDependenciaRetrete)? formData.ptjeDependenciaRetrete: 0;
        res += !isNaN(formData.ptjeDependenciaTrasladarse)? formData.ptjeDependenciaTrasladarse: 0;
        res += !isNaN(formData.ptjeDependenciaDeambular)? formData.ptjeDependenciaDeambular: 0;
        res += !isNaN(formData.ptjeDependenciaMovilizarse)? formData.ptjeDependenciaMovilizarse: 0;

        return res;
    }

    const actualizarPtjeBarthel = () => {
        var total = calcularPtje();
        //setFormData({ ...formData, totalBarthel: total });
    
        return total;
    }

    const obtenerClasificacion = () => {
        var res = '';
        var totPtje = calcularPtje();

        if(totPtje < 20)
            res = 'DEPENDENCIA TOTAL';
        else if(totPtje <= 35)
            res = 'DEPENDENCIA SEVERA';
        else if(totPtje <= 55)
            res = 'DEPENDENCIA MODERADA';
        else if(totPtje <= 95)
            res = 'DEPENDENCIA LEVE';
        else
            res = 'INDEPENDENCIA';

        return res;
    }

    return (
        <View>
            <Text style={styles.title}>Barthel</Text>
            <Text style={styles.label}>En relacion a las actividades de la vida diaria (Seleccione uan alternativa por pregunta)</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.labelBold}>Pregunta</Text>
                        <Text style={styles.labelBold}>Criterio</Text>
                        <Text style={styles.labelBold}>Puntaje</Text>
 
                    </View>

                    {/* dependenciaComer: true, dependenciaLavarse: true, dependenciaVestirse: true, dependenciaArreglarse: true, dependenciaDeposicion: true, 
                        dependenciaMicción: true, dependenciaRetrete: true, dependenciaTrasladarse:true, dependenciaDeambular: true, dependenciaMovilizarse:true
                        ptjeDependenciaComer: null, ptjeDependenciaLavarse: null, ptjeDependenciaVestirse: null, ptjeDependenciaArreglarse: null, ptjeDependenciaDeposicion: null, 
                        ptjeDependenciaMiccion: null, ptjeDependenciaRetrete: null, ptjeDependenciaTrasladarse:null, ptjeDependenciaDeambular: null, ptjeDependenciaMovilizarse:null
                    */}
                    <BarthelComponent 
                        braden='01 - ¿Para Comer el paciente es?' 
                        lista = {dataDropDown.dependenciaComer} 
                        seleccion = {formData.dependenciaComer} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'dependenciaComer': valSel, 'ptjeDependenciaComer': valPtje })}} 
                        puntaje = {formData.ptjeDependenciaComer} 
                    ></BarthelComponent>

                    <BarthelComponent 
                        braden='02 - ¿Para Lavarse el paciente es? ' 
                        lista = {dataDropDown.dependenciaLavarse} 
                        seleccion = {formData.dependenciaLavarse} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'dependenciaLavarse': valSel, 'ptjeDependenciaLavarse': valPtje })}} 
                        puntaje = {formData.ptjeDependenciaLavarse} 
                    ></BarthelComponent>

<                   BarthelComponent 
                        braden='03 - ¿Para Vestirse el paciente es?' 
                        lista = {dataDropDown.dependenciaVestirse} 
                        seleccion = {formData.dependenciaVestirse} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'dependenciaVestirse': valSel, 'ptjeDependenciaVestirse': valPtje })}} 
                        puntaje = {formData.ptjeDependenciaVestirse} 
                    ></BarthelComponent>

<                   BarthelComponent 
                        braden='04 - ¿ Para Arreglarse el paciente es?' 
                        lista = {dataDropDown.dependenciaArreglarse} 
                        seleccion = {formData.dependenciaArreglarse} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'dependenciaArreglarse': valSel, 'ptjeDependenciaArreglarse': valPtje })}} 
                        puntaje = {formData.ptjeDependenciaArreglarse} 
                    ></BarthelComponent>

<                   BarthelComponent 
                        braden='05 - Deposiciones (valórese la semana previa)' 
                        lista = {dataDropDown.dependenciaDeposicion} 
                        seleccion = {formData.dependenciaDeposicion} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'dependenciaDeposicion': valSel, 'ptjeDependenciaDeposicion': valPtje })}} 
                        puntaje = {formData.ptjeDependenciaDeposicion} 
                    ></BarthelComponent>

<                   BarthelComponent 
                        braden='06 - Micción (valórese la semana previa)' 
                        lista = {dataDropDown.dependenciaMiccion} 
                        seleccion = {formData.dependenciaMiccion} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'dependenciaMiccion': valSel, 'ptjeDependenciaMiccion': valPtje })}} 
                        puntaje = {formData.ptjeDependenciaMiccion} 
                    ></BarthelComponent>

<                   BarthelComponent 
                        braden='07 - ¿Para Usar el retrete el paciente es?' 
                        lista = {dataDropDown.dependenciaRetrete} 
                        seleccion = {formData.dependenciaRetrete} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'dependenciaRetrete': valSel, 'ptjeDependenciaRetrete': valPtje })}} 
                        puntaje = {formData.ptjeDependenciaRetrete} 
                    ></BarthelComponent>

<                   BarthelComponent 
                        braden='08 - ¿Para Trasladarse el paciente es?' 
                        lista = {dataDropDown.dependenciaTrasladarse} 
                        seleccion = {formData.dependenciaTrasladarse} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'dependenciaTrasladarse': valSel, 'ptjeDependenciaTrasladarse': valPtje })}} 
                        puntaje = {formData.ptjeDependenciaTrasladarse} 
                    ></BarthelComponent>

<                   BarthelComponent 
                        braden='09 - ¿Para Deambular el paciente es?' 
                        lista = {dataDropDown.dependenciaDeambular} 
                        seleccion = {formData.dependenciaDeambular} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'dependenciaDeambular': valSel, 'ptjeDependenciaDeambular': valPtje })}} 
                        puntaje = {formData.ptjeDependenciaDeambular} 
                    ></BarthelComponent>

<                   BarthelComponent 
                        braden='10 - ¿El paciente al movilizarse en Escalones es?' 
                        lista = {dataDropDown.dependenciaMovilizarse} 
                        seleccion = {formData.dependenciaMovilizarse} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'dependenciaMovilizarse': valSel, 'ptjeDependenciaMovilizarse': valPtje })}} 
                        puntaje = {formData.ptjeDependenciaMovilizarse} 
                    ></BarthelComponent>

                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Ptje.Barthel</Text>
                        <Text style={styles.textResult}>{actualizarPtjeBarthel()}</Text>
                        <Text style={styles.label}>Condición Barthel</Text>
                        <Text style={styles.textResult}>{obtenerClasificacion()}</Text>
                    </View>

                    <Navigation 
                        onPressPrev={() => {navigation.navigate('ExamenFisico', { data: formData })}} 
                        //onPressNext={() => navigation.navigate('CuidadorPrimario', { data: formData })}
                        onPressNext={() => {handleNextScreen(navigation, 'CuidadorPrimario', {data: formData})}}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default BarthelScreen;