import { View, TextInput } from 'react-native';
import { styles } from './TextInputPassStyles';

export function TextInputPass() {
  return (

      <TextInput
            placeholder='Password'
            style={styles.inputer}>
      </TextInput>
  
  );
}
