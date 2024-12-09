import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import PacienteIngresoScreen from './screens/PacienteIngresoScreen';
import PacienteResumenScreen from './screens/PacienteResumenScreen';
import ExamenScreen from './screens/ExamenScreen';
import PatologiaMedicamentoScreen from './screens/PatologiaMedicamentoScreen';
import MovilidadContencionScreen from './screens/MovilidadContencionScreen';
import AlimentoScreen from './screens/AlimentoScreen';
import BradenScreen from './screens/BradenScreen';
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
      
      tieneArtritis: false, nroMedArtritis: 0, tieneDiabetes: false, nroMedDiabetes: 0, tieneDisplidemia: false, nroMedDisplidemia: 0, tieneCardio: false, nroMedCardio: 0,
      tieneEPOC: false, nroMedEPOC: 0, tieneHipArterial: false, nroMedHipArterial: 0, tieneInUrinaria: false, nroMedInUrinaria: 0, tieneInfarto: false, nroMedInfarto: 0,
      tieneInsufCardiaca: false, nroMedInsufCardiaca: 0, tieneOsteoporosis: false, nroMedOsteoporosis: 0, tieneHepatico: false, nroMedHepatico: 0, tieneResInsulina: false, nroMedResInsulina: 0,
      tieneSecuelaACV: false, nroMedSecuelaACV: 0, tieneAudicionReducida: false, tieneVisionReducida: false,

      tieneTraccion: false, descTraccion: '', tieneInmovilidad: false, descInmovilidad: '', tieneContencion: false, descContencion: '', tieneTipoContencion: false, tipoContencion: '',

      selFruta: '', selCarne: '', selHuevo: '', selPescado: '', selPasta: '', selPan: '', selVerdura: '', selLegumbre: '', selFiambre: '', 
      selLacteo: '', selDulce: '', selBebida: '', selRapida: '', selAperitivo: '', selJugo: '',

      selPercepcion: '', ptjePercepcion: null, selHumedad: '', ptjeHumedad: null, selActividad: '', ptjeActividad: null, selMovilidad: '', ptjeMovilidad: null,
      selNutricion: '', ptjeNutricion: null, selFuerza: '', ptjeFuerza: null
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
        <Stack.Screen name="PatologiaMedicamento" component={PatologiaMedicamentoScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="MovilidadContencion" component={MovilidadContencionScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="Alimento" component={AlimentoScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="Braden" component={BradenScreen} initialParams={{ data: formData }}/>
        <Stack.Screen name="EnviaData" component={EnviaDataScreen} initialParams={{ data: formData }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
