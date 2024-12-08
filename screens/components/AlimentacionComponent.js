import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import styles from '../Styles';

import dataDropDown from '../../data/dropdown.json';


const AlimentoComponent = ({alimento, seleccion, setSeleccion}) => {
 
    return (
        <View style={styles.container}>

            <View style={styles.inputRow}>

                <Text style={styles.label}>{alimento}</Text>

                <Picker
                    selectedValue={seleccion}
                    style={[styles.picker]}
                    onValueChange={setSeleccion}
                >
                    { dataDropDown.alimentos.map((alimento)=>
                        <Picker.Item label={alimento.label} value={alimento.value} key={alimento.value} />
                        )}
                </Picker>

            </View>

        </View>
    );

}

export default AlimentoComponent;