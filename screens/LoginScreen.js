import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';

import Button from './components/ButtonComponent';

import styles from './Styles';

const Separator = () => <View style={styles.separator} />;

const LoginScreen = ({navigation, route}) => {
    const { data } = route.params;
  
    //alert(JSON.stringify(data, null, 2));
 
    const [formData, setFormData] = useState(data);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = (formData, setFormData) => {
    console.info('formData.emailUsuario: ' + formData.emailUsuario);
    console.info('formData.claveUsuario: ' + formData.claveUsuario);


    // Validación credenciales)
    if (formData.emailUsuario.trim() === '' || formData.claveUsuario.trim() === '') {
      Alert.alert('Error', 'Debe ingresar ambos campos!');
      return;
    }

    getUsuarioFromApi(formData, setFormData).then(usuario => {
      console.log('Usuario: ' + JSON.stringify(usuario));

      console.info('usuario.email: ' + usuario.email);
      console.info('usuario.password: ' + usuario.password);
      console.info('usuario.role: ' + usuario.role);
  
      if (!(formData.emailUsuario === usuario.email && formData.claveUsuario === usuario.password)) {
        Alert.alert('Error', 'Usuario o clave invalida');
      } else {
        // Siguiente screen depende de tipo usuario
        if(usuario.role === 'user')
          navigation.navigate('Examen', { data: formData });
        else if(usuario.role === 'admin')
          navigation.navigate('PacienteIngreso', { data: formData });
    }
    });
  };

  const getUsuarioFromApi = (formData, setFormData) => {

    return fetch('https://ppiapi.akasoft.cl/api/usuario/email/' + formData.emailUsuario.trim())
      .then(response => response.json())
      .then(json => {
        return json.data;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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
          title="Siguiente"
          //onPress={() => navigation.navigate('PacienteIngreso', { data: formData })}
          onPress={() => handleLogin(formData, setFormData)}
        />
      </View>
    </View>
  );
}

export default LoginScreen;