import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import VisitaIdScreen from './screens/VisitaIdScreen';

import AdminScreen from './screens/AdminScreen';
import AdminPacienteCreacionScreen from './screens/AdminPacienteCreacionScreen';
import AdminVisitaCreacionScreen from './screens/AdminVisitaCreacionScreen';
import AdminUsuarioCreacionScreen from './screens/AdminUsuarioCreacionScreen';
import AdminSubirConsentimientoScreen from './screens/AdminSubirConsentimientoScreen';
import AdminDescargarConsentimientoScreen from './screens/AdminDescargarConsentimientoScreen';

import PacienteIngresoScreen from './screens/PacienteIngresoScreen';
import PacienteResumenScreen from './screens/PacienteResumenScreen';
import ExamenScreen from './screens/ExamenScreen';
import PatologiaMedicamentoScreen from './screens/PatologiaMedicamentoScreen';
import PatologiaMedicamento2Screen from './screens/PatologiaMedicamento2Screen';
import MovilidadContencionScreen from './screens/MovilidadContencionScreen';
import AlimentoScreen from './screens/AlimentoScreen';
import BradenScreen from './screens/BradenScreen';
import PielScreen from './screens/PielScreen';
import LesionScreen from './screens/LesionScreen';

import LppcScreen from './screens/LppcScreen';
import ExamenFisicoScreen from './screens/ExamenFisicoScreen';
import BarthelScreen from './screens/BarthelScreen';
import CuidadorPrimarioScreen from './screens/CuidadorPrimarioScreen';
import ZaritScreen from './screens/ZaritScreen';
import ClasificacionLesionScreen from './screens/ClasificacionLesionScreen';

import EnviaDataScreen from './screens/EnviaDataScreen';

import {initFormData} from './data/object.js';

const Stack = createStackNavigator();

const App = () => {
  const [formData, setFormData] = useState({...initFormData});

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} initialParams={{ data: formData }}/>

        <Stack.Screen name="VisitaId" component={VisitaIdScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="Admin" component={AdminScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="AdminPacienteCreacion" component={AdminPacienteCreacionScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="AdminVisitaCreacion" component={AdminVisitaCreacionScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="AdminUsuarioCreacion" component={AdminUsuarioCreacionScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="AdminSubirConsentimiento" component={AdminSubirConsentimientoScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="AdminDescargarConsentimiento" component={AdminDescargarConsentimientoScreen} initialParams={{ data: formData }}/>

        <Stack.Screen name="PacienteIngreso" component={PacienteIngresoScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="PacienteResumen" component={PacienteResumenScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="Examen" component={ExamenScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="PatologiaMedicamento" component={PatologiaMedicamentoScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="PatologiaMedicamento2" component={PatologiaMedicamento2Screen} initialParams={{ data: formData }}/>
        <Stack.Screen name="MovilidadContencion" component={MovilidadContencionScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="Alimento" component={AlimentoScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="Braden" component={BradenScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="Piel" component={PielScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="Lesion" component={LesionScreen} initialParams={{ data: formData }}/>

        <Stack.Screen name="Lppc" component={LppcScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="ExamenFisico" component={ExamenFisicoScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="Barthel" component={BarthelScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="CuidadorPrimario" component={CuidadorPrimarioScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="Zarit" component={ZaritScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="ClasificacionLesion" component={ClasificacionLesionScreen} initialParams={{ data: formData }}/>

        <Stack.Screen name="EnviaData" component={EnviaDataScreen} initialParams={{ data: formData }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
