import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import Navigation from './components/NavigationComponent';
import Button from './components/ButtonComponent';



const EnviaDataScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [formData, setFormData] = useState(data);

    const enviarFormData = () => {
      var urlPost = 'https://ppiapi.akasoft.cl/api/ficha/idVisita/' + formData.idVisita; 
      var errPost = null;

      try {
        const response = fetch(urlPost, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        console.log(response);
      } catch(error){
        errPost = error;
      } finally {
        if(errPost == null){
          alert('Data Enviada');
        } else {
          alert('Error al enviar datos a servidor: ' + errPost);
        }
      }

    };
    
    return (
      <View>
        <Text style={styles.title}>Envio de Datos</Text>
        <View>
          <ScrollView>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{textAlign: 'center'}}>Se realizará una validación final antes de enviar la ficha al servidor central.</Text>
              <Text></Text>
              <Text style={{textAlign: 'center'}}>Una vez enviada la ficha no se permitiran modificaciones sobre esta.</Text>
              <Text></Text>
              <Text></Text>
            </View>
            <View style={styles.buttonRow}>
              <Button
                  title="Volver"
                  onPress={() => navigation.navigate('Zarit', { data: formData })}
              />
              <Button 
                title="Enviar datos" 
                onPress={() => enviarFormData()} 
              />
            </View>
          
          </ScrollView>
        </View>

      </View>
    );
  }
 
  
  export default EnviaDataScreen;