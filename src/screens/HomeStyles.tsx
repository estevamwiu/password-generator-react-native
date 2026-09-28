import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#013464',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: 'yellow',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#013464',
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'column',
}});

export default styles;
