import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import PacienteIngresoScreen from './screens/PacienteIngresoScreen';
import PacienteResumenScreen from './screens/PacienteResumenScreen';
import ExamenScreen from './screens/ExamenScreen';
import EnviaDataScreen from './screens/EnviaDataScreen';

const Stack = createStackNavigator();

const App = () => {
  const [formData, setFormData] = useState(
    { emailUsuario: '', claveUsuario: '', 
      fechaNacimientoPaciente: new Date(), edadPaciente: 0, idPaciente: 0, sexoPaciente: '', pesoPaciente: 0, tallaPaciente: 0, 
      mesesPostracionPaciente: 0, anosPostracionPaciente: 0, diagPaciente: '', ingresoPaciente: '', estudioPaciente: '', imcPaciente: 0,
      noRecolectadoProteinemia: true, fechaExProteinemia: new Date(), validezExProteinemia: 'VE_NO_VAL', 
      noRecolectadoOximetria: true, fechaExOximetria: new Date(), validezExOximetria: 'VE_NO_VAL', 
      noRecolectadoGlicemiaV: true, fechaExGlicemiaV: new Date(), validezExGlicemiaV: 'VE_NO_VAL', 
      noRecolectadoGlicemiaC: true, fechaExGlicemiaC: new Date(), validezExGlicemiaC: 'VE_NO_VAL', 
      noRecolectadoHemoglobina: true, fechaExHemoglobina: new Date(), validezExHemoglobina: 'VE_NO_VAL', 
    }
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
        <Stack.Screen name="Examen" component={ExamenScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="EnviaData" component={EnviaDataScreen} initialParams={{ data: formData }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
