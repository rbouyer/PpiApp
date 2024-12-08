import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { RadioButton } from 'react-native-paper';


const PatologiaMedicamentoScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View>
            <Text style={styles.title}>Patologias y Medicamentos</Text>
            <Text style={styles.label}>Alguna vez un profesional de salud le ha indicado que usted tiene</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Patología</Text>
                        <Text style={styles.label}>SI</Text>
                        <Text style={styles.label}>NO</Text>
                        <Text style={styles.label}>Nro medicamentos día</Text>
                    </View>

                    {/* Artritis Reumatoidea: tieneArtritis, nroMedArtritis */}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Artritis Reumatoidea</Text>

                        <View style={styles.radioGroup}>
                            <View style={styles.radioButton}>
                                <RadioButton.Android
                                    value="true"
                                    status={formData.tieneArtritis ? 'checked' : 'unchecked'}
                                    onPress={() => setFormData({ ...formData, 'tieneArtritis': true })}
                                    color="#007BFF"
                                />
                                <Text style={styles.radioLabel}>
                                    SI
                                </Text>
                            </View>

                            <View style={styles.radioButton}>
                                <RadioButton.Android
                                    value="false"
                                    status={!formData.tieneArtritis ? 'checked' : 'unchecked'}
                                    onPress={() => setFormData({ ...formData, 'tieneArtritis': false })}
                                    color="#007BFF"
                                />
                                <Text style={styles.radioLabel}>
                                    NO
                                </Text>
                            </View>
                        </View>


                        <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            textAlign="right"
                            value={formData.nroMedArtritis}
                            //onChangeText={(value) => handleInputChange('nroMedArtritis', value)}
                            onEndEditing={(e) => handleInputChange('nroMedArtritis', e.nativeEvent.text)}
                        />

                    </View>


                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('Examen', { data: formData })}
                        />
                        <Button 
                            title="Siguiente"
                            onPress={() => navigation.navigate('EnviaData', { data: formData })}
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    );

}

export default PatologiaMedicamentoScreen;