import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "./HomeStyles";
import { Logo } from '../components/Logo/Logo';
import { TextInputPass } from '../components/TextInputPass/TexInputPass';

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo/>
      <TextInputPass/>
      <StatusBar style="auto"/>
    </View>
  );
}
