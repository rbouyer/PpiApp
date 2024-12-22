import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from '../Styles';


const SelectorComponent = ({lista, seleccion, setSeleccion}) => {
 
    return (
        <View style={{flex: 1}}>

            <View style={styles.selector}>
                <Picker
                    selectedValue={seleccion}
                    style={[styles.picker]}
                    onValueChange={setSeleccion}
                    dropdownIconColor={'white'}
                >
                    { lista.map((sel)=>
                        <Picker.Item label={sel.label} value={sel.value} key={sel.value} />
                        )}
                </Picker>
            </View>

        </View>
    );

}

export default SelectorComponent;