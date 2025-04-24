import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';

import Button from './components/ButtonComponent';

import styles from './Styles';

import { URL_API } from '../data/constants'
import {obtenerData, crearEntidad} from '../helpers/RestApiHelper.js'
import { ScrollView } from 'react-native-gesture-handler';


const Separator = () => <View style={styles.separator} />;

const LoginScreen = ({navigation, route}) => {
    const { data } = route.params;
  
    //alert(JSON.stringify(data, null, 2));
 
    const [formData, setFormData] = useState(data);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = async (formData, setFormData) => {
    console.info('formData.emailUsuario: ' + formData.emailUsuario);
    console.info('formData.claveUsuario: ' + formData.claveUsuario);


    // Validación credenciales)
    if (formData.emailUsuario.trim() === '' || formData.claveUsuario.trim() === '') {
      Alert.alert('Error', 'Debe ingresar ambos campos!');
      return;
    }

    try {
      var usuario = await obtenerData(URL_API + 'api/usuario/email/' + formData.emailUsuario.trim());
    
      if (usuario == null) {
        Alert.alert('Error', 'Usuario no registrado');
        return;
      }
      console.log('Usuario: ' + JSON.stringify(usuario));
  
      console.info('usuario.id: ' + usuario.id);
      console.info('usuario.email: ' + usuario.email);
      console.info('usuario.password: ' + usuario.password);
      console.info('usuario.role: ' + usuario.role);
  
      if (!(formData.emailUsuario === usuario.email && formData.claveUsuario === usuario.password)) {
        console.log('Login invalido');
        Alert.alert('Error', 'Usuario o clave invalida');
      } else {
        const updatedFormData = { ...formData, idUsuario: parseInt(usuario.id) };
        //handleInputChange('idUsuario', usuario.id);
        // Siguiente screen depende de tipo usuario
        console.log('Login formData: ' + JSON.stringify(updatedFormData));
  
        if(usuario.role === 'user')
          navigation.navigate('VisitaId', { data: updatedFormData });
        else if(usuario.role === 'admin')
          navigation.navigate('Admin', { data: updatedFormData });
      }
  
    } catch(err) {
      Alert.alert('Error', 'Fallo la conexión al servidor: ' + err.message);

    }



/*     getUsuarioFromApi(formData, setFormData).then(usuario => {
      const idUsuario = usuario.id;
      console.log('Usuario: ' + JSON.stringify(usuario));

      console.info('usuario.id: ' + usuario.id);
      console.info('usuario.email: ' + usuario.email);
      console.info('usuario.password: ' + usuario.password);
      console.info('usuario.role: ' + usuario.role);
  
      if (!(formData.emailUsuario === usuario.email && formData.claveUsuario === usuario.password)) {
        console.log('Login invalido');
        Alert.alert('Error', 'Usuario o clave invalida');
      } else {
        handleInputChange('idUsuario', idUsuario);
        // Siguiente screen depende de tipo usuario
        if(usuario.role === 'user')
          navigation.navigate('VisitaId', { data: formData });
        else if(usuario.role === 'admin')
          navigation.navigate('Admin', { data: formData });
    }
    });
 */
  };

/*   const getUsuarioFromApi = (formData, setFormData) => {

    return fetch(URL_API + 'api/usuario/email/' + formData.emailUsuario.trim())
      .then(response => response.json())
      .then(json => {
        return json.data;
      })
      .catch(error => {
        console.error(error);
      });
  };
 */
  return (
    <View>
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.title}>Ingrese credenciales (correo y clave)</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={formData.emailUsuario}
        onChangeText={(text) => handleInputChange('emailUsuario', text)}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Clave"
        secureTextEntry={true}
        value={formData.claveUsuario}
        onChangeText={(text) => handleInputChange('claveUsuario', text)}
      />

      <Separator />

      <View style={[styles.inputRow, {flex: 1, padding: 5}]}>
        <Button
          title="Ingresar"
          ancho="200"
          //onPress={() => navigation.navigate('PacienteIngreso', { data: formData })}
          onPress={() => handleLogin(formData, setFormData)}
        />
      </View>
    </View>
      </ScrollView>
    </View>

  );
}

export default LoginScreen;