import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import PacienteIngresoScreen from './screens/PacienteIngresoScreen';
import PacienteResumenScreen from './screens/PacienteResumenScreen';

const Stack = createStackNavigator();

const App = () => {
  const [formData, setFormData] = useState(
    { emailUsuario: '', claveUsuario: '', 
      fechaNacimientoPaciente: new Date(), edadPaciente: 0, idPaciente: 0, sexoPaciente: '', pesoPaciente: 0, tallaPaciente: 0, 
      mesesPostracionPaciente: 0, diagPaciente: '', ingresoPaciente: '', ensenanzaPaciente: '', imcPaciente: 0}
  );

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="PacienteIngreso" component={PacienteIngresoScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="PacienteResumen" component={PacienteResumenScreen} initialParams={{ data: formData }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
