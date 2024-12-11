import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './Styles';

const TemplateScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    return (
        <View>
            <Text style={styles.title}>Características LPPC</Text>
            <Text style={styles.label}>Ingrese las características LPPC</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Examen</Text>
                        <Text style={styles.label}>No recolectado</Text>
                        <Text style={styles.label}>F.Examen</Text>
                        <Text style={styles.label}>Valor</Text>

                    </View>

                    {/* Proteinemia : noRecolectadoProteinemia, fechaExProteinemia, validezExProteinemia*/}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Fila 1 - Columna 1</Text>

                        <Text style={styles.label}>Fila 1 - Columna 2</Text>

                        <Text style={styles.label}>Fila 1 - Columna 3</Text>

                        <Text style={styles.label}>Fila 1 - Columna 4</Text>

                    </View>


                    <View style={styles.inputRow}>
                        {/* <Button
                            title="Cancelar"
                            onPress={alert('¿Esta seguro que desea cancelar el ingreso de las características LPPC?')}
                        /> */}
                        <Button 
                            title="Volver"
                            onPress={() => navigation.navigate('Lesion', { data: formData })}
                        />
                        <Button 
                            title="Siguiente"
                            onPress={() => navigation.navigate('ExamenFisico', { data: formData })}
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    );

}

export default TemplateScreen;