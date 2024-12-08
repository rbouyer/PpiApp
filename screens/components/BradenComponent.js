import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import styles from '../Styles';

import dataDropDown from '../../data/dropdown.json';
import {buscaEnLista} from '../helpers/GralHelper.js'


const BradenComponent = ({braden, lista, seleccion, setSeleccion}) => {
 
    return (
        <View style={styles.container}>

            <View style={styles.inputRow}>

                <Text style={styles.label}>{braden}</Text>

                <Picker
                    selectedValue={seleccion}
                    style={[styles.picker]}
                    onValueChange={setSeleccion}
                >
                    { lista.map((sel)=>
                        <Picker.Item label={sel.label} value={sel.value} key={sel.value} />
                        )}
                </Picker>

                <Text style={styles.textResult}>{buscaEnLista(lista, seleccion).ptje}</Text>


            </View>

        </View>
    );

}

export default BradenComponent;