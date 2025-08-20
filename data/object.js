export const initFormData = { emailUsuario: '', claveUsuario: '', idUsuario: 0, role: 'user',
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
      tieneSecuelaACV: null, nroMedSecuelaACV: 0, tieneOtroMedicamento: null, nroMedOtro: 0,
      tieneAudicionReducida: null, tieneVisionReducida: null, tieneAlcohol: null, tieneTabaco: null,

      /* Patologia y Medicamentos 2 */
      olvidaMedicamento: null, tomaMedicamentosEnHora: null, dejaDeTomarMedicamentoBien: null, dejaDeTomarMedicamentoMal: null, adherenteTratamiento: null,

      /* Movilidad y contención */
      tieneTraccion: null, descTraccion: '', tieneInmovilidad: null, descInmovilidad: '', tieneContencion: null, descContencion: '', tieneTipoContencion: null, tipoContencion: '',

      /* Escaras y Cambio Posicion */
      diagnosticoEscaras: '', utilizaColchonAE: null, funcionaColchonAE: null, funciona24HrsColchonAE: null, cambiaFamiliarPosicionColchonAE: null,
      selCambioPosicionColchonAE: '',
      indicaMedicoCambioPos: null, cuidaPielPrevenirLPPC: null, descripcionCuidadoPielPrevenirLPPC: '', cuidaAdecuadamentePielPrevenirLPPC: null,

      /* Alimentación */
      selFruta: '', selCarne: '', selHuevo: '', selPescado: '', selPasta: '', selPan: '', selVerdura: '', selLegumbre: '', selFiambre: '', 
      selLacteo: '', selDulce: '', selBebida: '', selRapida: '', selAperitivo: '', selJugo: '', tienePlanAlimentacion: null, 

      /* Riesgo Braden */
      selPercepcion: '', ptjePercepcion: null, selHumedad: '', ptjeHumedad: null, selActividad: '', ptjeActividad: null, selMovilidad: '', ptjeMovilidad: null,
      selNutricion: '', ptjeNutricion: null, selFuerza: '', ptjeFuerza: null, totalBraden: 0,

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
      ptjeDependenciaComer: 0, ptjeDependenciaLavarse: 0, ptjeDependenciaVestirse: 0, ptjeDependenciaArreglarse: 0, 
      ptjeDependenciaDeposicion: 0, ptjeDependenciaMiccion: 0, ptjeDependenciaRetrete: 0,
      ptjeDependenciaTrasladarse: 0, ptjeDependenciaDeambular: 0, ptjeDependenciaMovilizarse: 0, totalBarthel: 0,

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
      totalZarit: 0,

      lppc: null

    };