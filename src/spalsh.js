import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading process or any other initialization logic
    setTimeout(() => {
      // Navigate to the main screen after the splash screen is displayed
      navigation.replace('MainScreen');
    }, 3000); // Adjust the duration as per your requirements
  }, []);

  return (
    <View style={styles.container}>
      {/* Add your splash screen image/logo */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Splash;
