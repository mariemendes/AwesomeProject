import React from 'react';
import {View, Text, StyleSheet, useColorScheme, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello World
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFF',
  },
  darkText: {
    color: '#000',
  },
});
export default AppPro;
