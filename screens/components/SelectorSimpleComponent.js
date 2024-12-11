import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from '../Styles';


const SelectorSimpleComponent = ({descripcion, lista, seleccion, setSeleccion}) => {
 
    return (
        <View style={styles.container}>

            <View style={styles.inputRow}>

                <Text style={styles.label}>{descripcion}</Text>

                <Picker
                    selectedValue={seleccion}
                    style={[styles.picker]}
                    onValueChange={setSeleccion}
                >
                    { lista.map((sel)=>
                        <Picker.Item label={sel.label} value={sel.value} key={sel.value} />
                        )}
                </Picker>

            </View>

        </View>
    );

}

export default SelectorSimpleComponent;