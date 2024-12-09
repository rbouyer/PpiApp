import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from '../Styles';

import {buscaEnLista} from '../../helpers/GralHelper.js'


const BradenComponent = ({braden, lista, seleccion, setSeleccion, puntaje}) => {
 
    const obtenerPtje = (lista, selItem) => {
        var res = 0;
        var item = buscaEnLista(lista, selItem);
        
        if(item != null) res = item.ptje;

        return res;
    }

    const onChangeSelec = (val) => {
        //console.info("onChangeSel: val: " + val);
        //setPuntaje(obtenerPtje(lista, val));
        setSeleccion(val, obtenerPtje(lista, val));
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputRow}>

                <Text style={styles.label}>{braden}</Text>

                <Picker
                    selectedValue={seleccion}
                    style={[styles.picker]}
                    onValueChange={onChangeSelec}
                >
                    { lista.map((sel)=>
                        <Picker.Item label={sel.label} value={sel.value} key={sel.value} />
                        )}
                </Picker>

                <Text style={styles.textResult}>{puntaje}</Text>

            </View>

        </View>
    );

}

export default BradenComponent;