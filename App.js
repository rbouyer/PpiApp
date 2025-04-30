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

const Stack = createStackNavigator();

const App = () => {
  const [formData, setFormData] = useState(
    { emailUsuario: '', claveUsuario: '', idUsuario: 0, role: 'user',
      fechaNacimientoPaciente: null, edadPaciente: 0, idPaciente: 0, idVisita: 0, sexoPaciente: '', pesoPaciente: 0, tallaPaciente: 0, 
      mesesPostracionPaciente: 0, anosPostracionPaciente: 0, diagPaciente: '', ingresoPaciente: '', estudioPaciente: '', imcPaciente: 0,
      
      /* Examenes */
      noRecolectadoProteinemia: false, fechaExProteinemia: null, validezExProteinemia: 'VE_SI_VAL', valorExProteinemia: 0,
      noRecolectadoOximetria: false, fechaExOximetria: null, validezExOximetria: 'VE_SI_VAL', valorExOximetria: 0,
      noRecolectadoGlicemiaV: false, fechaExGlicemiaV: null, validezExGlicemiaV: 'VE_SI_VAL', valorExGlicemiaV: 0,
      noRecolectadoGlicemiaC: false, fechaExGlicemiaC: null, validezExGlicemiaC: 'VE_SI_VAL', valorExGlicemiaC: 0,
      noRecolectadoHemoglobina: false, fechaExHemoglobina: null, validezExHemoglobina: 'VE_SI_VAL', valorExHemoglobina: 0,

      noRecolectadoProcalcitonina: false, fechaExProcalcitonina: null, validezExProcalcitonina: 'VE_SI_VAL', valorExProcalcitonina: 0,
      noRecolectadoProteina: false, fechaExProteina: null, validezExProteina: 'VE_SI_VAL', valorExProteina: 0,
      noRecolectadoCreatinina: false, fechaExCreatinina: null, validezExCreatinina: 'VE_SI_VAL', valorExCreatinina: 0,

      /* Patologia y Medicamentos */
      tieneArtritis: null, nroMedArtritis: 0, tieneDiabetes: null, nroMedDiabetes: 0, tieneDisplidemia: null, nroMedDisplidemia: 0, tieneCardio: null, nroMedCardio: 0,
      tieneEPOC: null, nroMedEPOC: 0, tieneHipArterial: null, nroMedHipArterial: 0, tieneInUrinaria: null, nroMedInUrinaria: 0, tieneInfarto: null, nroMedInfarto: 0,
      tieneInsufCardiaca: null, nroMedInsufCardiaca: 0, tieneOsteoporosis: null, nroMedOsteoporosis: 0, tieneHepatico: null, nroMedHepatico: 0, tieneResInsulina: null, nroMedResInsulina: 0,
      tieneSecuelaACV: null, nroMedSecuelaACV: 0, tieneAudicionReducida: null, tieneVisionReducida: null, tieneAlcohol: null, tieneTabaco: null,

      /* Patologia y Medicamentos 2 */
      olvidaMedicamento: null, tomaMedicamentosEnHora: null, dejaDeTomarMedicamentoBien: null, dejaDeTomarMedicamentoMal: null, adherenteTratamiento: null,

      /* Movilidad y contención */
      tieneTraccion: null, descTraccion: '', tieneInmovilidad: null, descInmovilidad: '', tieneContencion: null, descContencion: '', tieneTipoContencion: null, tipoContencion: '',

      /* Alimentación */
      selFruta: '', selCarne: '', selHuevo: '', selPescado: '', selPasta: '', selPan: '', selVerdura: '', selLegumbre: '', selFiambre: '', 
      selLacteo: '', selDulce: '', selBebida: '', selRapida: '', selAperitivo: '', selJugo: '', tienePlanAlimentacion: null, 

      /* Riesgo Braden */
      selPercepcion: '', ptjePercepcion: null, selHumedad: '', ptjeHumedad: null, selActividad: '', ptjeActividad: null, selMovilidad: '', ptjeMovilidad: null,
      selNutricion: '', ptjeNutricion: null, selFuerza: '', ptjeFuerza: null,

      /* Mantención Piel */
      usoCrema: null, usoLinovera: null, usoColonia: null, usoHipoglos: null, usoOtraSolucion: null, usoBanoDiario: null, usoNada: null,

      /* Lesión ubicación */
      presentaCuidadoPiel: null, presentaLesionHumedad: null, selUbicacionLesion: '', otraUbicacionLesion: '', presentaIncontinencia: null, selTipoIncontinencia: '',
      selUbiIncontinencia: '', presentaPrevencionDermatitis: null, descPrevencionDermatitis: '', presentaDermatitisIncontinencia: null, presentaTratamientoDermatitis: null,
      presentaDispositivoNoInvasivo: null, tipoDispositivoNoInvasivo: '',  descOtroDispositivoNoInvasivo: '', 
      presentaDispositivoInvasivo: null, tipoDispositivoInvasivo: '',  descOtroDispositivoInvasivo: '', 
      presentaCirugia: null, tipoCirugia: '', fechaCirugia: null, descCirugia: '',
      presentaLPPC: null, nroLPPC: null, 

      /* Lppc */
      selUbicacionLppc: '', selLadoLppc: '', estaAsocDispositivoLppc: null, descDispositivoLppc: '', selCategoriaLppc: '', enTratamientoLppc: null, estaNotificadaLppc: null,

      /* examen fisico */
      sistolicaPresionSentada1: null, sistolicaPresionSentada2: null, sistolicaPresionParada1: null, sistolicaPresionParada2: null, sistolicaPulso: null, presentaBajaPeso: null,

      /* Barthel */
      dependenciaComer: true, dependenciaLavarse: true, dependenciaVestirse: true, dependenciaArreglarse: true, dependenciaDeposicion: true, 
      dependenciaMiccion: true, dependenciaRetrete: true, dependenciaTrasladarse:true, dependenciaDeambular: true, dependenciaMovilizarse:true,

      /* Cuidador */
      tieneCuidador: null, nombreCuidador: '', fechaNacimientoCuidador: null, edadCuidador: 0, selSexoCuidador: '', selRelacionCuidador: '', selEstudioCuidador: '', selSaludCuidador: '',

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

      lppc: null

    }
  );


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
