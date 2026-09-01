import { View, TextInput } from 'react-native';
import { styles } from './TextInputPassStyles';

interface TextInputPassProps {
  pass: string;
}

export function TextInputPass(props: TextInputPassProps) {
  return (
    <>
      <TextInput
            placeholder='Senha gerada'
            style={styles.inputer}>
      </TextInput>
    </>
  );
}
