import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Let's Discover the World!</Text>
      <View style={styles.underline} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f56040",
    height: 220,
    marginBottom: -50,
  },
  heading: {
    fontSize: 34,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    paddingTop: 10
  },
  underline: {
    marginVertical: 10,
    padding: 4,
    width: '30%',
    alignSelf: 'center',
    backgroundColor: '#fcaf45',
    borderRadius: 20,
  },
});

export default Header;
