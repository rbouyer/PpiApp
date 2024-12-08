import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';


import BradenComponent from './components/BradenComponent';


const BradenScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View>
            <Text style={styles.title}>Riesgo Braden</Text>
            <ScrollView>
            <Text style={styles.label}>¿Cuál es el nivel de riesgo de LPPC que el paciente tiene hoy?  (Escala de Riesgo Braden?)</Text>
            <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Criterio</Text>
                        <Text style={styles.label}>Nivel</Text>
                        <Text style={styles.label}>Puntaje Item</Text>
                    </View>

                    {/* 
                        selFruta, selCarne, selHuevo, selPescado, selPasta, selPan, selVerdura, selLegumbre, selFiambre, 
                        selLacteo, selDulce, selBebida, selRapida, selAperitivo, selJugo */}

                    {/* Fruta: selFruta */}
                    <BradenComponent 
                        alimento='01 - Fruta Fresca (excluyendo zumos)' 
                        seleccion = {formData.selFruta} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selFruta': val })}} 
                    ></BradenComponent>

                    {/* Carne: selCarne */}
                    <BradenComponent 
                        alimento='02 - Carne (pollo, ternera, cerdo, cordero ' 
                        seleccion = {formData.selCarne} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selCarne': val })}} 
                    ></BradenComponent>

                    {/* Huevo: selHuevo */}
                    <BradenComponent 
                        alimento='03 - Huevos' 
                        seleccion = {formData.selHuevo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selHuevo': val })}} 
                    ></BradenComponent>

                    {/* Pescado: selPescado */}
                    <BradenComponent 
                        alimento='04  - Pescado' 
                        seleccion = {formData.selPescado} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selPescado': val })}} 
                    ></BradenComponent>

                    {/* Pasta: selPasta */}
                    <BradenComponent 
                        alimento='05 - Pasta, Arroz, Papas' 
                        seleccion = {formData.selPasta} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selPasta': val })}} 
                    ></BradenComponent>

                    {/* Pan: selPan */}
                    <BradenComponent 
                        alimento='06 - Pan, Cereales' 
                        seleccion = {formData.selPan} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selPan': val })}} 
                    ></BradenComponent>

                    {/* Pan: selVerdura */}
                    <BradenComponent 
                        alimento='07 - Verduras, Ensaladas, Hortalizas' 
                        seleccion = {formData.selVerdura} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selVerdura': val })}} 
                    ></BradenComponent>

                    {/* Legumbre: selLegumbre */}
                    <BradenComponent 
                        alimento='08  -Legumbres' 
                        seleccion = {formData.selLegumbre} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selLegumbre': val })}} 
                    ></BradenComponent>

                    {/* Fiambre: selFiambre */}
                    <BradenComponent 
                        alimento='09 - Embutidos y Fiambres' 
                        seleccion = {formData.selFiambre} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selFiambre': val })}} 
                    ></BradenComponent>

                    {/* Lacteo: selLacteo */}
                    <BradenComponent 
                        alimento='10 - Productos Lacteos ( leche, queso, yogurt )' 
                        seleccion = {formData.selLacteo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selLacteo': val })}} 
                    ></BradenComponent>

                    {/* Dulce: selDulce */}
                    <BradenComponent 
                        alimento='11 - Duelces ( galletas, mermeladas, cereales con azucar, caramelos )' 
                        seleccion = {formData.selDulce} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selDulce': val })}} 
                    ></BradenComponent>

                    {/* Bebida: selBebida */}
                    <BradenComponent 
                        alimento='12 - Bebidas y jugos con azucar' 
                        seleccion = {formData.selBebida} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selBebida': val })}} 
                    ></BradenComponent>

                    {/* Rapida: selRapida, selAperitivo, selJugo */}
                    <BradenComponent 
                        alimento='13 - Comida rapida ( pollo frito, bocadillos, pizzas, hamburguezas )' 
                        seleccion = {formData.selRapida} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selRapida': val })}} 
                    ></BradenComponent>

                    {/* selAperitivo: selAperitivo */}
                    <BradenComponent 
                        alimento='14 -  Aperitivos o comidas saladas de picar ( papas fritas, galletitas saladas )' 
                        seleccion = {formData.selAperitivo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selAperitivo': val })}} 
                    ></BradenComponent>

                    {/* Jugo: selJugo */}
                    <BradenComponent 
                        alimento='15 - Jugos naturales o de versuras' 
                        seleccion = {formData.selJugo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selJugo': val })}} 
                    ></BradenComponent>


                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('MovilidadContencion', { data: formData })}
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

export default BradenScreen;