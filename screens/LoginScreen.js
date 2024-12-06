import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
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
    // Validación credenciales)
    if (formData.emailUsuario.trim() === '' || formData.claveUsuario.trim() === '') {
      Alert.alert('Error', 'Debe ingresar ambos campos!');
      return;
    }

    //if (email === 'user@example.com' && password === 'password123') {
    //  Alert.alert('Success', 'Login Successful!');
    //} else {
    //  Alert.alert('Error', 'Invalid email or password!');
    //}
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

      <Button
        title="Siguiente"
        onPress={() => navigation.navigate('PacienteIngreso', { data: formData })}
      />
    </View>
  );
}

export default LoginScreen;