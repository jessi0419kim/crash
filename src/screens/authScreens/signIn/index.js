import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const SignIn = () => {
  return (
      <View style={styles.container}>
        <Text>SignIn</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default SignIn