import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

import AlimentoComponent from './components/AlimentacionComponent';
import Navigation from './components/NavigationComponent';
import AlimentoRadioComponent from './components/PatologiaMedicamentoComponent';

import dataDropDown from '../data/dropdown.json';

import {handleNextScreen} from '../helpers/GralHelper.js';


const AlimentoScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View>
            <Text style={styles.title}>Alimentación</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.labelBold}>Alimentos</Text>
                        <Text style={styles.labelBold}>Selección</Text>
                    </View>

                    {/* 
                        selFruta, selCarne, selHuevo, selPescado, selPasta, selPan, selVerdura, selLegumbre, selFiambre, 
                        selLacteo, selDulce, selBebida, selRapida, selAperitivo, selJugo */}

                    {/* Fruta: selFruta */}
                    <AlimentoComponent 
                        alimento='01 - Fruta Fresca (excluyendo zumos)' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selFruta} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selFruta': val })}} 
                    ></AlimentoComponent>

                    {/* Carne: selCarne */}
                    <AlimentoComponent 
                        alimento='02 - Carne (pollo, ternera, cerdo, cordero ' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selCarne} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selCarne': val })}} 
                    ></AlimentoComponent>

                    {/* Huevo: selHuevo */}
                    <AlimentoComponent 
                        alimento='03 - Huevos' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selHuevo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selHuevo': val })}} 
                    ></AlimentoComponent>

                    {/* Pescado: selPescado */}
                    <AlimentoComponent 
                        alimento='04  - Pescado' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selPescado} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selPescado': val })}} 
                    ></AlimentoComponent>

                    {/* Pasta: selPasta */}
                    <AlimentoComponent 
                        alimento='05 - Pasta, Arroz, Papas' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selPasta} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selPasta': val })}} 
                    ></AlimentoComponent>

                    {/* Pan: selPan */}
                    <AlimentoComponent 
                        alimento='06 - Pan, Cereales' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selPan} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selPan': val })}} 
                    ></AlimentoComponent>

                    {/* Pan: selVerdura */}
                    <AlimentoComponent 
                        alimento='07 - Verduras, Ensaladas, Hortalizas' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selVerdura} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selVerdura': val })}} 
                    ></AlimentoComponent>

                    {/* Legumbre: selLegumbre */}
                    <AlimentoComponent 
                        alimento='08  -Legumbres' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selLegumbre} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selLegumbre': val })}} 
                    ></AlimentoComponent>

                    {/* Fiambre: selFiambre */}
                    <AlimentoComponent 
                        alimento='09 - Embutidos y Fiambres' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selFiambre} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selFiambre': val })}} 
                    ></AlimentoComponent>

                    {/* Lacteo: selLacteo */}
                    <AlimentoComponent 
                        alimento='10 - Productos Lacteos ( leche, queso, yogurt )' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selLacteo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selLacteo': val })}} 
                    ></AlimentoComponent>

                    {/* Dulce: selDulce */}
                    <AlimentoComponent 
                        alimento='11 - Duelces ( galletas, mermeladas, cereales con azucar, caramelos )' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selDulce} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selDulce': val })}} 
                    ></AlimentoComponent>

                    {/* Bebida: selBebida */}
                    <AlimentoComponent 
                        alimento='12 - Bebidas y jugos con azucar' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selBebida} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selBebida': val })}} 
                    ></AlimentoComponent>

                    {/* Rapida: selRapida, selAperitivo, selJugo */}
                    <AlimentoComponent 
                        alimento='13 - Comida rapida ( pollo frito, bocadillos, pizzas, hamburguezas )' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selRapida} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selRapida': val })}} 
                    ></AlimentoComponent>

                    {/* selAperitivo: selAperitivo */}
                    <AlimentoComponent 
                        alimento='14 -  Aperitivos o comidas saladas de picar ( papas fritas, galletitas saladas )' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selAperitivo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selAperitivo': val })}} 
                    ></AlimentoComponent>

                    {/* Jugo: selJugo */}
                    <AlimentoComponent 
                        alimento='15 - Jugos naturales o de verduras' 
                        lista = {dataDropDown.alimentos}
                        seleccion = {formData.selJugo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selJugo': val })}} 
                    ></AlimentoComponent>


                    {/* Pregunta: plan alimentacion prev: tienePlanAlimentacion */}
                    <AlimentoRadioComponent 
                        patologia='¿El paciente tiene un plan de alimentación para prevenir las LPPC?' 
                        tienePatologia = {formData.tienePlanAlimentacion} 
                        setTienePatologia = {(val) => {setFormData({ ...formData, 'tienePlanAlimentacion': val })}} 
                        nroMedPatologia = {null} 
                        setNroMedPatologia = {null}
                    ></AlimentoRadioComponent>



                    <Navigation 
                        onPressPrev={() => navigation.navigate('EscarasCambioPosicion', { data: formData })} 
                        //onPressNext={() => navigation.navigate('Braden', { data: formData })}
                        onPressNext={() => handleNextScreen(navigation, 'Braden', {data: formData})}
                    >
                    </Navigation>
                </View>
            </ScrollView>
        </View>
    );

}

export default AlimentoScreen;