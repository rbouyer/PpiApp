import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from '../Styles';


const PatologiaMedicamentoComponent = ({patologia, tienePatologia, setTienePatologia, nroMedPatologia, setNroMedPatologia}) => {
 
    return (
        <View style={styles.container}>

            <View style={styles.inputRow}>

                <Text style={styles.label}>{patologia}</Text>

                <View style={styles.radioGroup}>
                    <View style={styles.radioButton}>
                        <RadioButton.Android
                            value="true"
                            status={tienePatologia ? 'checked' : 'unchecked'}
                            onPress={() => setTienePatologia(true)}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>
                            SI
                        </Text>
                    </View>

                    <View style={styles.radioButton}>
                        <RadioButton.Android
                            value="false"
                            status={!tienePatologia ? 'checked' : 'unchecked'}
                            onPress={() => setTienePatologia(false)}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>
                            NO
                        </Text>
                    </View>
                </View>


                {nroMedPatologia != null && (<TextInput  style={styles.textInput}
                    editable={tienePatologia}
                    selectTextOnFocus={tienePatologia}
                    keyboardType="numeric"
                    textAlign="right"
                    value={nroMedPatologia}
                    onChangeText={(val) =>  setNroMedPatologia(val)}
                    onEndEditing={(e) => setNroMedPatologia(e.nativeEvent.text)}
                />)}
                {/* else */}
                {nroMedPatologia == null && (<Text  style={styles.label}
                />)}

            </View>

        </View>
    );

}

export default PatologiaMedicamentoComponent;