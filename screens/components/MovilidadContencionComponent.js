import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from '../Styles';


const MovilidadContencionComponent = ({movilidad, tieneMovilidad, setTieneMovilidad, descMovilidad, setDescMovilidad}) => {
 
    return (
        <View style={styles.container}>

            <View style={styles.inputRow}>

                <Text style={styles.label}>{movilidad}</Text>

                <View style={styles.radioGroup}>
                    <View style={styles.radioButton}>
                        <RadioButton.Android
                            value="true"
                            status={tieneMovilidad === true ? 'checked' : 'unchecked'}
                            onPress={() => setTieneMovilidad(true)}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>
                            SI
                        </Text>
                    </View>

                    <View style={styles.radioButton}>
                        <RadioButton.Android
                            value="false"
                            status={tieneMovilidad === false ? 'checked' : 'unchecked'}
                            onPress={() => setTieneMovilidad(false)}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>
                            NO
                        </Text>
                    </View>
                </View>


                {descMovilidad != null && (<TextInput  style={styles.textInput}
                    editable={tieneMovilidad}
                    selectTextOnFocus={tieneMovilidad}
                    keyboardType="default"
                    textAlign="left"
                    value={descMovilidad}
                    onChangeText={(val) =>  setDescMovilidad(val)}
                    onEndEditing={(e) => setDescMovilidad(e.nativeEvent.text)}
                />)}

            </View>

        </View>
    );

}

export default MovilidadContencionComponent;