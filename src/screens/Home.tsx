import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "./HomeStyles";
import { Logo } from '../components/Logo/Logo';
import { TextInputPass } from '../components/TextInputPass/TexInputPass';
import { ButtonPass } from '../components/ButtonPass/ButtonPass';

export default function Home() {
  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Logo/>      
      </View>
      
      <View style={styles.buttonContainer}>
        <ButtonPass/>
      </View>

      <StatusBar style="auto"/>
    </View>
  );
}
