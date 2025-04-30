import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

import Navigation from './components/NavigationComponent';
import Button from './components/ButtonComponent';

import { URL_API } from '../data/constants';
import {obtenerData, crearEntidad, actualizarEntidad} from '../helpers/RestApiHelper.js';
import {initFormData} from '../data/object';

const EnviaDataScreen = ({navigation, route}) => {
    const { data } = route.params;
    const [formData, setFormData] = useState(data);


    const enviarFormData = async () => {
      return await enviarFormDataSync();
    }

    const enviarFormDataSync = async () => {
      var urlPost = URL_API  + 'api/ficha/idVisita/' + formData.idVisita; 
      var errPost = null;

      try {
        console.log('enviarDataScreen ID user: ' + formData.idUsuario);
        const usuario = await obtenerData(URL_API + 'api/usuario/id/' + formData.idUsuario);
/*         const response = fetch(urlPost, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
 */
        console.log('enviarDataScreen role: ' + JSON.stringify(formData.role));
        console.log('enviarDataScreen user: ' + JSON.stringify(usuario));

        var nuevaVisita = null;
        if(usuario.role == 'admin'){
          // Vuelve a la pantalla de inicio
          nuevaVisita = await actualizarEntidad(urlPost, formData);
          navigation.navigate('Admin', { data: {} });
        }
        else if(usuario.role == 'user'){
          // Vuelve a la pantalla de inicio
          nuevaVisita = await crearEntidad(urlPost, formData);
          const newFormData = { ...initFormData, idUsuario: usuario.id };
          navigation.navigate('VisitaId', { data: newFormData });
        } 

        if(nuevaVisita != null){
          console.log('EnviarDataScreen response' + JSON.stringify(nuevaVisita));
        }


      } catch(error){
        errPost = error;
      } finally {
        if(errPost == null){
          alert('Data enviada exitosamente al servidor');
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