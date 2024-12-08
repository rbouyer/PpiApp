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
      noRecolectadoProteinemia: false, fechaExProteinemia: new Date(), validezExProteinemia: 'VE_SI_VAL', 
      noRecolectadoOximetria: false, fechaExOximetria: new Date(), validezExOximetria: 'VE_SI_VAL', 
      noRecolectadoGlicemiaV: false, fechaExGlicemiaV: new Date(), validezExGlicemiaV: 'VE_SI_VAL', 
      noRecolectadoGlicemiaC: false, fechaExGlicemiaC: new Date(), validezExGlicemiaC: 'VE_SI_VAL', 
      noRecolectadoHemoglobina: false, fechaExHemoglobina: new Date(), validezExHemoglobina: 'VE_SI_VAL', 
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
