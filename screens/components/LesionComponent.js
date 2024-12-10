import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import styles from '../Styles';

import dataDropDown from '../../data/dropdown.json';
import { buscaEnLista } from '../../helpers/GralHelper';

const LesionComponent = ({descripcion, lista, seleccion, setSeleccion, llenado}) => {
 
    const tieneLlenado = () => {
        var item = buscaEnLista(lista, seleccion);

        return item != null && item.llenado;
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputRow}>

                <Text style={styles.label}>{descripcion}</Text>

                <Picker
                    selectedValue={seleccion}
                    style={[styles.picker]}
                    onValueChange={(val) => setSeleccion(val, tieneLlenado()? llenado: null)}
                >
                    { lista.map((item)=>
                        <Picker.Item label={item.label} value={item.value} key={item.value} />
                        )}
                </Picker>

                {tieneLlenado() && (<TextInput style={[styles.textInput]}
                    editable={tieneLlenado()}
                    selectTextOnFocus={tieneLlenado()}
                    textAlign="left"
                    value={llenado}
                    onChangeText={(val) => setSeleccion(seleccion, val)}
                />)}

            </View>

        </View>
    );

}

export default LesionComponent;