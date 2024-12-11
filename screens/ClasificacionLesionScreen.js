import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './Styles';

import imgCat1 from '../assets/lpp_categoria1.png';
import imgCat2 from '../assets/lpp_categoria2.png';
import imgCat3 from '../assets/lpp_categoria3.png';
import imgCat4 from '../assets/lpp_categoria4.png';
import imgCat5 from '../assets/lpp_categoria5.png';
import imgCat6 from '../assets/lpp_categoria6.png';

const ClasificacionLesionScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);

    return (
        <View>
            <Text style={styles.title}>Clasificación Lesión</Text>
            <Text style={styles.label}>Clasificación de las Lesiones por Presión (LPP)</Text>
            <ScrollView>
                <View style={styles.container}>

                    <Image source={imgCat1} style={styles.imageCategoria}/>
                    <Image source={imgCat2} style={styles.imageCategoria}/>
                    <Image source={imgCat3} style={styles.imageCategoria}/>
                    <Image source={imgCat4} style={styles.imageCategoria}/>
                    <Image source={imgCat5} style={styles.imageCategoria}/>
                    <Image source={imgCat6} style={styles.imageCategoria}/>
                    
                    <View style={styles.inputRow}>
                        <Button
                            title="Volver"
                            onPress={() => navigation.navigate('Lppc', { data: formData })}
                        />
                    </View>
                    <Text style={styles.label}></Text>
                    <Text style={styles.label}></Text>

                </View>
            </ScrollView>
        </View>
    );

}

export default ClasificacionLesionScreen;