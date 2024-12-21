import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ZaritSelectorComponent from './components/BradenComponent';
import Navigation from './components/NavigationComponent';

import dataDropDown from '../data/dropdown.json';
import styles from './Styles';

const ZaritScreen = ({navigation, route}) => {
    const { data } = route.params;

    const [formData, setFormData] = useState(data);
 
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const calcularPtje = () => {
        var res = 0;

        res += !isNaN(formData.ptjeSolicitaAyuda)? formData.ptjeSolicitaAyuda: 0;
        res += !isNaN(formData.ptjeTiempo)? formData.ptjeTiempo: 0;
        res += !isNaN(formData.selAgobiado)? formData.selAgobiado: 0;
        res += !isNaN(formData.ptjeVerguenza)? formData.ptjeVerguenza: 0;
        res += !isNaN(formData.ptjeEnfadado)? formData.ptjeEnfadado: 0;
        res += !isNaN(formData.ptjeAfecta)? formData.ptjeAfecta: 0;
        res += !isNaN(formData.ptjeMiedo)? formData.ptjeMiedo: 0;
        res += !isNaN(formData.ptjeDepende)? formData.ptjeDepende: 0;
        res += !isNaN(formData.ptjeEmpeorado)? formData.ptjeEmpeorado: 0;
        res += !isNaN(formData.ptjeTenso)? formData.ptjeTenso: 0;
        res += !isNaN(formData.ptjeIntimidad)? formData.ptjeIntimidad: 0;
        res += !isNaN(formData.ptjeSocial)? formData.ptjeSocial: 0;
        res += !isNaN(formData.ptjeIncomodo)? formData.ptjeIncomodo: 0;
        res += !isNaN(formData.ptjeCuidar)? formData.ptjeCuidar: 0;
        res += !isNaN(formData.ptjeIngresos)? formData.ptjeIngresos: 0;
        res += !isNaN(formData.ptjeCapaz)? formData.ptjeCapaz: 0;
        res += !isNaN(formData.ptjeControl)? formData.ptjeControl: 0;
        res += !isNaN(formData.ptjeOtra)? formData.ptjeOtra: 0;
        res += !isNaN(formData.ptjeIndeciso)? formData.ptjeIndeciso: 0;
        res += !isNaN(formData.ptjeHacerMas)? formData.ptjeHacerMas: 0;
        res += !isNaN(formData.ptjeCuidarMejor)? formData.ptjeCuidarMejor: 0;
        res += !isNaN(formData.ptjeGlobalmente)? formData.ptjeGlobalmente: 0;

        return res;
    }

    const obtenerSobrecarga = () => {
        var res = '';
        var totPtje = calcularPtje();

        if(totPtje <= 46)
            res = 'Ausencia de sobrecarga';
        else if(totPtje <= 55)
            res = 'Sobrecarga ligera';
        else
            res = 'Sobrecarga intensa';

        return res;
    }

    return (
        <View>
            <Text style={styles.title}>Evaluación de sobrecarga del cuidador (Escala ZARIT)</Text>
            <Text style={styles.label}>Realice las siguientes preguntas al cuidador y califique según respuesta (solo una alternativa):</Text>

            <ScrollView>
                <View style={styles.container}>

                    {/* Encabezado */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Pregunta</Text>
                        <Text style={styles.label}>Nivel</Text>
                        <Text style={styles.label}>Puntaje</Text>
                    </View>

                    {/* 01 selSolicitaAyuda, ptjeSolicitaAyuda,
                        02 selTiempo, ptjeTiempo,
                        03 selAgobiado, ptjeAgobiado,
                        04 selVerguenza, ptjeVerguenza,
                        05 selEnfadado, ptjeEnfadado,
                        06 selAfecta, ptjeAfecta,
                        07 selMiedo, ptjeMiedo,
                        08 selDepende, ptjeDepende,
                        09 selEmpeorado, ptjeEmpeorado,
                        10 selTenso, ptjeTenso,
                        11 selIntimidad, ptjeIntimidad,
                        12 selSocial, ptjeSocial,
                        13 selIncomodo, ptjeIncomodo,
                        14 selCuidar, ptjeCuidar,
                        15 selIngresos, ptjeIngresos,
                        16 selCapaz, ptjeCapaz,
                        17 selselControl, ptjeControl,
                        18 selOtra, ptjeOtra,
                        19 selIndeciso, ptjeIndeciso,
                        20 selHacerMas, ptjeHacerMas,
                        21 selCuidadMejor, ptjeCuidarMejor,
                        22 selGlobalmente, ptjeGlobalmente
                    */}

                    { /* selSolicitaAyuda, ptjeSolicitaAyuda */ }
                    <ZaritSelectorComponent 
                        braden='01 - ¿Piensa que su familiar solicita más ayuda de la que realmente necesita?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selSolicitaAyuda} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selSolicitaAyuda': valSel, 'ptjeSolicitaAyuda': valPtje })}} 
                        puntaje = {formData.ptjeSolicitaAyuda} 
                    ></ZaritSelectorComponent>

                        { /* 02 selTiempo, ptjeTiempo, */ }
                        <ZaritSelectorComponent 
                        braden='02 - ¿Piensa que debido al tiempo que dedica a su familiar ya no dispone de tiempo suficiente para usted?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selTiempo} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selTiempo': valSel, 'ptjeTiempo': valPtje })}} 
                        puntaje = {formData.ptjeTiempo} 
                    ></ZaritSelectorComponent>

                        { /* 03 selAgobiado, ptjeAgobiado, */ }
                        <ZaritSelectorComponent 
                        braden='03 - ¿Se siente agobiado por intentar compatibilizar el cuidado de su familiar con otras responsabilidades (trabajo, familia)?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selAgobiado} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selAgobiado': valSel, 'ptjeAgobiado': valPtje })}} 
                        puntaje = {formData.ptjeAgobiado} 
                    ></ZaritSelectorComponent>

                        { /* 04 selVerguenza, ptjeVerguenza, */ }
                        <ZaritSelectorComponent 
                        braden='04 - ¿Se siente vergüenza por la conducta de su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selVerguenza} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selVerguenza': valSel, 'ptjeVerguenza': valPtje })}} 
                        puntaje = {formData.ptjeVerguenza} 
                    ></ZaritSelectorComponent>

                        { /* 05 selEnfadado, ptjeEnfadado, */ }
                        <ZaritSelectorComponent 
                        braden='05 - ¿Se siente enfadado cuando está cerca de su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selEnfadado} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selEnfadado': valSel, 'ptjeEnfadado': valPtje })}} 
                        puntaje = {formData.ptjeEnfadado} 
                    ></ZaritSelectorComponent>

                        { /* 06 selAfecta, ptjeAfecta, */ }
                        <ZaritSelectorComponent 
                        braden='06 - ¿Cree que la situación actual afecta negativamente la relación que Ud. tiene con otros miembros de su familia?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selAfecta} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selAfecta': valSel, 'ptjeAfecta': valPtje })}} 
                        puntaje = {formData.ptjeAfecta} 
                    ></ZaritSelectorComponent>

                        { /* 07 selMiedo, ptjeMiedo, */ }
                        <ZaritSelectorComponent 
                        braden='07 - ¿Tiene miedo por el futuro de su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selMiedo} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selMiedo': valSel, 'ptjeMiedo': valPtje })}} 
                        puntaje = {formData.ptjeMiedo} 
                    ></ZaritSelectorComponent>

                        { /* 08 selDepende, ptjeDepende, */ }
                        <ZaritSelectorComponent 
                        braden='08 - ¿Piensa que su familiar depende de usted?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selDepende} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selDepende': valSel, 'ptjeDepende': valPtje })}} 
                        puntaje = {formData.ptjeDepende} 
                    ></ZaritSelectorComponent>

                        { /* 09 selEmpeorado, ptjeEmpeorado, */ }
                        <ZaritSelectorComponent 
                        braden='09 - ¿Piensa que su salud ha empeorado debido a tener que cuidar a su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selEmpeorado} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selSolicselEmpeoradoitaAyuda': valSel, 'ptjeEmpeorado': valPtje })}} 
                        puntaje = {formData.ptjeEmpeorado} 
                    ></ZaritSelectorComponent>

                        { /* 10 selTenso, ptjeTenso, */ }
                        <ZaritSelectorComponent 
                        braden='10 - ¿Se siente tenso cuanto está cerca de su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selTenso} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selTenso': valSel, 'ptjeTenso': valPtje })}} 
                        puntaje = {formData.ptjeTenso} 
                    ></ZaritSelectorComponent>

                        { /* 11 selIntimidad, ptjeIntimidad, */ }
                        <ZaritSelectorComponent 
                        braden='11 - ¿Piensa que no tiene tanta intimidad como le gustaría debido a tener que cuidar a su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selIntimidad} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selIntimidad': valSel, 'ptjeIntimidad': valPtje })}} 
                        puntaje = {formData.ptjeIntimidad} 
                    ></ZaritSelectorComponent>

                        { /* 12 selSocial, ptjeSocial, */ }
                        <ZaritSelectorComponent 
                        braden='12 - ¿Siente que su vida social se ha visto afectada negativamente por tener que cuidar a su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selSocial} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selSocial': valSel, 'ptjeSocial': valPtje })}} 
                        puntaje = {formData.ptjeSocial} 
                    ></ZaritSelectorComponent>

                        { /* 13 selIncomodo, ptjeIncomodo, */ }
                        <ZaritSelectorComponent 
                        braden='13 - ¿Se siente incómodo por distanciarse de sus amistades debido a tener que cuidar de su familiar?	' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selIncomodo} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selIncomodo': valSel, 'ptjeIncomodo': valPtje })}} 
                        puntaje = {formData.ptjeIncomodo} 
                    ></ZaritSelectorComponent>

                        { /* 14 selCuidar, ptjeCuidar, */ }
                        <ZaritSelectorComponent 
                        braden='14 - ¿Piensa que su familiar le considera a usted la única persona que le puede cuidar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selCuidar} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selCuidar': valSel, 'ptjeCuidar': valPtje })}} 
                        puntaje = {formData.ptjeCuidar} 
                    ></ZaritSelectorComponent>

                        { /* 15 selIngresos, ptjeIngresos, */ }
                        <ZaritSelectorComponent 
                        braden='15 - ¿Piensa que no tiene suficientes ingresos económicos para los gastos de cuidar a su familiar, además de susotros gastos?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selIngresos} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selIngresos': valSel, 'ptjeIngresos': valPtje })}} 
                        puntaje = {formData.ptjeIngresos} 
                    ></ZaritSelectorComponent>

                        { /* 16 selCapaz, ptjeCapaz, */ }
                        <ZaritSelectorComponent 
                        braden='16 - ¿Piensa que no será capaz de cuidar a su familiar por mucho más tiempo?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selCapaz} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selCapaz': valSel, 'ptjeCapaz': valPtje })}} 
                        puntaje = {formData.ptjeCapaz} 
                    ></ZaritSelectorComponent>

                        { /* 17 selControl, ptjeControl, */ }
                        <ZaritSelectorComponent 
                        braden='17 - ¿Siente que ha perdido el control de su vida desde que comenzó la enfermedad de su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selControl} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selControl': valSel, 'ptjeControl': valPtje })}} 
                        puntaje = {formData.ptjeControl} 
                    ></ZaritSelectorComponent>

                        { /* 18 selOtra, ptjeOtra, */ }
                        <ZaritSelectorComponent 
                        braden='18 - ¿Desearía poder dejar el cuidado de su familiar a otra persona? ' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selOtra} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selOtra': valSel, 'ptjeOtra': valPtje })}} 
                        puntaje = {formData.ptjeOtra} 
                    ></ZaritSelectorComponent>

                        { /* 19 selIndeciso, ptjeIndeciso, */ }
                        <ZaritSelectorComponent 
                        braden='19 - ¿Se siente indeciso sobre qué hacer con su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selIndeciso} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selIndeciso': valSel, 'ptjeIndeciso': valPtje })}} 
                        puntaje = {formData.ptjeIndeciso} 
                    ></ZaritSelectorComponent>

                        { /* 20 selHacerMas, ptjeHacerMas, */ }
                        <ZaritSelectorComponent 
                        braden='20 - ¿Piensa que debería hacer más por su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selHacerMas} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selHacerMas': valSel, 'ptjeHacerMas': valPtje })}} 
                        puntaje = {formData.ptjeHacerMas} 
                    ></ZaritSelectorComponent>

                        { /* 21 selCuidadMejor, ptjeCuidarMejor, */ }
                        <ZaritSelectorComponent 
                        braden='21 - ¿Piensa que podría cuidar mejor a su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selCuidadMejor} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selCuidadMejor': valSel, 'ptjeCuidarMejor': valPtje })}} 
                        puntaje = {formData.ptjeCuidarMejor} 
                    ></ZaritSelectorComponent>

                        { /* 22 selGlobalmente, ptjeGlobalmente */ }
                        <ZaritSelectorComponent 
                        braden='22 - Globalmente ¿Qué grado de “carga” experimenta por el hecho de cuidar a su familiar?' 
                        lista = {dataDropDown.zarit} 
                        seleccion = {formData.selGlobalmente} 
                        setSeleccion = {(valSel, valPtje) => {setFormData({ ...formData, 'selGlobalmente': valSel, 'ptjeGlobalmente': valPtje })}} 
                        puntaje = {formData.ptjeGlobalmente} 
                    ></ZaritSelectorComponent>

                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Ptje.Zarit</Text>
                        <Text style={styles.textResult}>{calcularPtje()}</Text>
                        <Text style={styles.label}>Escala Zarit</Text>
                        <Text style={styles.textResult}>{obtenerSobrecarga()}</Text>
                    </View>


                    <Navigation 
                        onPressPrev={() => navigation.navigate('CuidadorPrimario', { data: formData })} 
                        onPressNext={() => navigation.navigate('EnviaData', { data: formData })}>
                    </Navigation>

                </View>
            </ScrollView>
        </View>
    );

}

export default ZaritScreen;