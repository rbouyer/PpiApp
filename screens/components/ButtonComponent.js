import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../Styles';


const ButtonComponent = ({title, onPress}) => {
 
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button.container}>
                <Text style={styles.button.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );

}

export default ButtonComponent;