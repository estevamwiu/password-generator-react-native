import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "./HomeStyles";
import { Logo } from '../components/Logo/Logo';
import { ButtonPass } from '../components/ButtonPass/ButtonPass';

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled">

      <View style={styles.logoContainer}>
        <Logo/>
      </View>

      <View style={styles.buttonContainer}>
        <ButtonPass/>
      </View>

      <StatusBar style="auto"/>
    </ScrollView>
  );
}
