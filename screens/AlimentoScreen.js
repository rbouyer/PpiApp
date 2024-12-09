import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';


import AlimentoComponent from './components/AlimentacionComponent';


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
                        <Text style={styles.label}>Alimentos</Text>
                        <Text style={styles.label}>Selección</Text>
                    </View>

                    {/* 
                        selFruta, selCarne, selHuevo, selPescado, selPasta, selPan, selVerdura, selLegumbre, selFiambre, 
                        selLacteo, selDulce, selBebida, selRapida, selAperitivo, selJugo */}

                    {/* Fruta: selFruta */}
                    <AlimentoComponent 
                        alimento='01 - Fruta Fresca (excluyendo zumos)' 
                        seleccion = {formData.selFruta} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selFruta': val })}} 
                    ></AlimentoComponent>

                    {/* Carne: selCarne */}
                    <AlimentoComponent 
                        alimento='02 - Carne (pollo, ternera, cerdo, cordero ' 
                        seleccion = {formData.selCarne} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selCarne': val })}} 
                    ></AlimentoComponent>

                    {/* Huevo: selHuevo */}
                    <AlimentoComponent 
                        alimento='03 - Huevos' 
                        seleccion = {formData.selHuevo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selHuevo': val })}} 
                    ></AlimentoComponent>

                    {/* Pescado: selPescado */}
                    <AlimentoComponent 
                        alimento='04  - Pescado' 
                        seleccion = {formData.selPescado} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selPescado': val })}} 
                    ></AlimentoComponent>

                    {/* Pasta: selPasta */}
                    <AlimentoComponent 
                        alimento='05 - Pasta, Arroz, Papas' 
                        seleccion = {formData.selPasta} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selPasta': val })}} 
                    ></AlimentoComponent>

                    {/* Pan: selPan */}
                    <AlimentoComponent 
                        alimento='06 - Pan, Cereales' 
                        seleccion = {formData.selPan} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selPan': val })}} 
                    ></AlimentoComponent>

                    {/* Pan: selVerdura */}
                    <AlimentoComponent 
                        alimento='07 - Verduras, Ensaladas, Hortalizas' 
                        seleccion = {formData.selVerdura} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selVerdura': val })}} 
                    ></AlimentoComponent>

                    {/* Legumbre: selLegumbre */}
                    <AlimentoComponent 
                        alimento='08  -Legumbres' 
                        seleccion = {formData.selLegumbre} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selLegumbre': val })}} 
                    ></AlimentoComponent>

                    {/* Fiambre: selFiambre */}
                    <AlimentoComponent 
                        alimento='09 - Embutidos y Fiambres' 
                        seleccion = {formData.selFiambre} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selFiambre': val })}} 
                    ></AlimentoComponent>

                    {/* Lacteo: selLacteo */}
                    <AlimentoComponent 
                        alimento='10 - Productos Lacteos ( leche, queso, yogurt )' 
                        seleccion = {formData.selLacteo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selLacteo': val })}} 
                    ></AlimentoComponent>

                    {/* Dulce: selDulce */}
                    <AlimentoComponent 
                        alimento='11 - Duelces ( galletas, mermeladas, cereales con azucar, caramelos )' 
                        seleccion = {formData.selDulce} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selDulce': val })}} 
                    ></AlimentoComponent>

                    {/* Bebida: selBebida */}
                    <AlimentoComponent 
                        alimento='12 - Bebidas y jugos con azucar' 
                        seleccion = {formData.selBebida} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selBebida': val })}} 
                    ></AlimentoComponent>

                    {/* Rapida: selRapida, selAperitivo, selJugo */}
                    <AlimentoComponent 
                        alimento='13 - Comida rapida ( pollo frito, bocadillos, pizzas, hamburguezas )' 
                        seleccion = {formData.selRapida} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selRapida': val })}} 
                    ></AlimentoComponent>

                    {/* selAperitivo: selAperitivo */}
                    <AlimentoComponent 
                        alimento='14 -  Aperitivos o comidas saladas de picar ( papas fritas, galletitas saladas )' 
                        seleccion = {formData.selAperitivo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selAperitivo': val })}} 
                    ></AlimentoComponent>

                    {/* Jugo: selJugo */}
                    <AlimentoComponent 
                        alimento='15 - Jugos naturales o de versuras' 
                        seleccion = {formData.selJugo} 
                        setSeleccion = {(val) => {setFormData({ ...formData, 'selJugo': val })}} 
                    ></AlimentoComponent>


                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('MovilidadContencion', { data: formData })}
                        />
                        <Button 
                            title="Siguiente"
                            onPress={() => navigation.navigate('Braden', { data: formData })}
                        />
                    </View>
                    <Text style={styles.label}></Text>
                    <Text style={styles.label}></Text>

                </View>
            </ScrollView>
        </View>
    );

}

export default AlimentoScreen;