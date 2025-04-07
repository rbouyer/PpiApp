import { View, Text, TouchableOpacity } from 'react-native';
import Button from './ButtonComponent';

import styles from '../Styles';


const NavigationComponent = ({titlePrev, onPressPrev, titleNext, onPressNext}) => {
    /*alert(titleNext);*/

    return (
        <View style={styles.buttonRow}>
            {onPressPrev && (<Button
                title={titlePrev ? titlePrev: 'Volver'}
                onPress={onPressPrev}
            />)}
            {onPressNext && (<Button 
                title={titleNext ? titleNext: "Siguiente"}
                onPress={onPressNext}
            />)}
        </View>
    );

}

export default NavigationComponent;