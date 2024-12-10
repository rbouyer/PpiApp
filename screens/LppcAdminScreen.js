import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import styles from './Styles';

const LppcAdminScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    return (
        <View>
            <Text style={styles.title}>Administraciín de Características LPPC</Text>
            <Text style={styles.label}>Agregue Características LPPC</Text>
            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Columna 1</Text>
                        <Text style={styles.label}>Columna 2</Text>
                        <Text style={styles.label}>Columna 3</Text>
                        <Text style={styles.label}>Columna 4</Text>

                    </View>

                    {/* Proteinemia : noRecolectadoProteinemia, fechaExProteinemia, validezExProteinemia*/}
                    <View style={styles.inputRow}>

                        <Text style={styles.label}>Fila 1 - Columna 1</Text>

                        <Text style={styles.label}>Fila 1 - Columna 2</Text>

                        <Text style={styles.label}>Fila 1 - Columna 3</Text>

                        <Text style={styles.label}>Fila 1 - Columna 4</Text>

                    </View>


                    <View style={styles.inputRow}>
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

export default LppcAdminScreen;