import { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './ButtonPassStyles';
import { TextInputPass } from '../TextInputPass/TexInputPass';
import generatePass from '../../services/PasswordServices';

import * as Clipboard from 'expo-clipboard';

export function ButtonPass () {
    
    const [password, setPassword] = useState('');

    function handleGenButton () {
        let passwordFinish = generatePass();
        setPassword (passwordFinish);
    }

    function handleCopyButton () {
        Clipboard.setStringAsync(password);
    }

    return (
        <View>
            <TextInputPass pass={password} />
            
            <Pressable 
                style={styles.button}
                onPress={handleGenButton}>
                <Text style={styles.text}>
                    🔑 Generate your password 🔑
                </Text>
            </Pressable>
            
            <Pressable 
                style={styles.button}
                onPress={() => handleCopyButton()}>
                <Text style={styles.text}>
                    🗒️ Copy to clipboard 🗒️
                </Text>
            </Pressable>
        </View>
    );
}
