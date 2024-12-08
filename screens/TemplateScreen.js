import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TemplateScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    return (
        <View>
            <Text style={styles.title}>Titulo Screen</Text>
            <Text style={styles.label}>Detalle examen</Text>
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
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('Volver', { data: formData })}
                        />
                        <Button 
                            title="Siguiente"
                            onPress={() => navigation.navigate('Siguiente', { data: formData })}
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    );

}

export default TemplateScreen;