import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
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

const Stack = createStackNavigator();

const App = () => {
  const [formData, setFormData] = useState(
    { emailUsuario: '', claveUsuario: '', 
      fechaNacimientoPaciente: new Date(), edadPaciente: 0, idPaciente: 0, sexoPaciente: '', pesoPaciente: 0, tallaPaciente: 0, 
      mesesPostracionPaciente: 0, anosPostracionPaciente: 0, diagPaciente: '', ingresoPaciente: '', estudioPaciente: '', imcPaciente: 0,
      
      /* Examenes */
      noRecolectadoProteinemia: false, fechaExProteinemia: new Date(), validezExProteinemia: 'VE_SI_VAL', 
      noRecolectadoOximetria: false, fechaExOximetria: new Date(), validezExOximetria: 'VE_SI_VAL', 
      noRecolectadoGlicemiaV: false, fechaExGlicemiaV: new Date(), validezExGlicemiaV: 'VE_SI_VAL', 
      noRecolectadoGlicemiaC: false, fechaExGlicemiaC: new Date(), validezExGlicemiaC: 'VE_SI_VAL', 
      noRecolectadoHemoglobina: false, fechaExHemoglobina: new Date(), validezExHemoglobina: 'VE_SI_VAL', 
      
      /* Patologia y Medicamentos */
      tieneArtritis: false, nroMedArtritis: 0, tieneDiabetes: false, nroMedDiabetes: 0, tieneDisplidemia: false, nroMedDisplidemia: 0, tieneCardio: false, nroMedCardio: 0,
      tieneEPOC: false, nroMedEPOC: 0, tieneHipArterial: false, nroMedHipArterial: 0, tieneInUrinaria: false, nroMedInUrinaria: 0, tieneInfarto: false, nroMedInfarto: 0,
      tieneInsufCardiaca: false, nroMedInsufCardiaca: 0, tieneOsteoporosis: false, nroMedOsteoporosis: 0, tieneHepatico: false, nroMedHepatico: 0, tieneResInsulina: false, nroMedResInsulina: 0,
      tieneSecuelaACV: false, nroMedSecuelaACV: 0, tieneAudicionReducida: false, tieneVisionReducida: false,

      /* Patologia y Medicamentos 2 */
      olvidaMedicamento: false, tomaMedicamentosEnHora: false, dejaDeTomarMedicamentoBien: false, dejaDeTomarMedicamentoMal: false, adherenteTratamiento: false,

      /* */
      tieneTraccion: false, descTraccion: '', tieneInmovilidad: false, descInmovilidad: '', tieneContencion: false, descContencion: '', tieneTipoContencion: false, tipoContencion: '',

      /* Alimentación */
      selFruta: '', selCarne: '', selHuevo: '', selPescado: '', selPasta: '', selPan: '', selVerdura: '', selLegumbre: '', selFiambre: '', 
      selLacteo: '', selDulce: '', selBebida: '', selRapida: '', selAperitivo: '', selJugo: '',

      /* Riesgo Braden */
      selPercepcion: '', ptjePercepcion: null, selHumedad: '', ptjeHumedad: null, selActividad: '', ptjeActividad: null, selMovilidad: '', ptjeMovilidad: null,
      selNutricion: '', ptjeNutricion: null, selFuerza: '', ptjeFuerza: null,

      /* Mantención Piel */
      usoCrema: false, usoLinovera: false, usoColonia: false, usoHipoglos: false, usoOtraSolucion: false, usoBanoDiario: false, usoNada: false,

      /* Lesión ubicación */
      presentaCuidadoPiel: false, presentaLesionHumedad: false, selUbicacionLesion: '', otraUbicacionLesion: '', presentaIncontinencia: false, selTipoIncontinencia: '',
      selUbiIncontinencia: '', presentaPrevencionDermatitis: false, descPrevencionDermatitis: '', presentaDermatitisIncontinencia: false, presentaTratamientoDermatitis: false,
      presentaDispositivoNoInvasivo: false, tipoDispositivoNoInvasivo: '',  descOtroDispositivoNoInvasivo: '', 
      presentaDispositivoInvasivo: false, tipoDispositivoInvasivo: '',  descOtroDispositivoInvasivo: '', 
      presentaCirugia: false, tipoCirugia: '', fechaCirugia: new Date(), descCirugia: '',
      presentaLPPC: false, nroLPPC: null, 

      /* Lppc */
      selUbicacionLppc: '', selLadoLppc: '', estaAsocDispositivoLppc: false, descDispositivoLppc: '', selCategoriaLppc: '', enTratamientoLppc: false, estaNotificadaLppc: false,

      /* examen fisico */
      sistolicaPresionSentada1: null, sistolicaPresionSentada2: null, sistolicaPresionParada1: null, sistolicaPresionParada2: null, sistolicaPulso: null, presentaBajaPeso: null,

      /* Barthel */
      dependenciaComer: true, dependenciaLavarse: true, dependenciaVestirse: true, dependenciaArreglarse: true, dependenciaDeposicion: true, 
      dependenciaMiccion: true, dependenciaRetrete: true, dependenciaTrasladarse:true, dependenciaDeambular: true, dependenciaMovilizarse:true,

      /* Cuidador */
      tieneCuidador: false, nombreCuidador: '', fechaNacimientoCuidador: new Date(), edadCuidador: 0, selSexoCuidador: '', selRelacionCuidador: '', selEstudioCuidador: '', selSaludCuidador: '',

      /* Zarit */
      selSolicitaAyuda: '', ptjeSolicitaAyuda: 0,
      selTiempo: '', ptjeTiempo: 0,
      selAgobiado: '', ptjeAgobiado: 0,
      selVerguenza: '', ptjeVerguenza: 0,
      selEnfadado: '', ptjeEnfadado: 0,
      selAfecta: '', ptjeAfecta: 0,
      selMiedo: '', ptjeMiedo: 0,
      selDepende: '', ptjeDepende: 0,
      selEmpeorado: '', ptjeEmpeorado: 0,
      selTenso: '', ptjeTenso: 0,
      selIntimidad: '', ptjeIntimidad: 0,
      selSocial: '', ptjeSocial: 0,
      selIncomodo: '', ptjeIncomodo: 0,
      selCuidar: '', ptjeCuidar: 0,
      selIngresos: '', ptjeIngresos: 0,
      selCapaz: '', ptjeCapaz: 0,
      selControl: '', ptjeControl: 0,
      selOtra: '', ptjeOtra: 0,
      selIndeciso: '', ptjeIndeciso: 0,
      selHacerMas: '', ptjeHacerMas: 0,
      selCuidadMejor: '', ptjeCuidarMejor: 0,
      selGlobalmente: '', ptjeGlobalmente: 0,

      lppc: new Array()

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
