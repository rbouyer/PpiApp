import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../Styles';


const ButtonComponent = ({title, onPress, color}) => {
    //console.info(color);
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button.container, {backgroundColor: color? color: 'black' }]}>
                <Text style={styles.button.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );

}

export default ButtonComponent;