import { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './ButtonPassStyles';
import { TextInputPass } from '../TextInputPass/TexInputPass';

export function ButtonPass () {
    
    const [password, setPassword] = useState('');

    function handleGenButton () {
        let generateToken = setPassword  ('Teste input senha');
        console.log(generateToken);
    }

    return (
        <View>
            <TextInputPass/>
            
            <Pressable 
                style={styles.button}
                onPress={handleGenButton}>
                <Text style={styles.text}>
                    🔑 Gerar Senha 🔑
                </Text>
            </Pressable>
            
            <Pressable 
                style={styles.button}
                onPress={() => {
                console.log('Copy button pressed');
                }}>
                <Text style={styles.text}>
                    🗒️ Copiar 🗒️
                </Text>
            </Pressable>
        </View>
    );
}