import { black } from '@jest/types/node_modules/chalk';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/Mask.png')} style={styles.headerImage} />
        <Text style={styles.text}>Adherence</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>Upcoming</Text>
        <View style={styles.rowBox}>
          <View style={styles.omega}>
            <Image source={require('./assets/Pills.png')} />
            <Text style={styles.omegaText}>Omega 3</Text>
            <Text style={styles.dateText}>15 Dec, 9:00 AM</Text>

          </View>
          <View style={styles.comlivit}>
            <Image source={require('./assets/Pill.png')} />
            <Text style={styles.comlivitText}>Comlivit</Text>
            <Text style={styles.dateText}>16 Dec, 9:00 AM</Text>
          </View>
          <View style={styles.vitC}>
            <Image source={require('./assets/VitC.png')} />
            <Text style={styles.vitCText}>Vitamin C</Text>
            <Text style={styles.dateText}>17 Dec, 9:00 AM</Text>
          </View>
        </View>
      </View>
      <View style={styles.history}>
        <View style={StyleSheet.historySpread}>
          <View style={styles.historyTextBox}>
            <Text style={styles.historyText}>History</Text>
          </View>
          <View styles={styles.historyButtonBox}>
          
          </View>
        </View>
        
        
      </View>
      <View style={styles.meds}>
        <Text style={styles.medsText}>Medication Taken</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
  },
  text: {
    color: 'white',
    fontSize: 28,
    top: -80,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
  },
  boxText: {
    color: 'black',
    margin: 25,
    fontSize: 20,
    fontWeight: "600",
  },
  rowBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  omega: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  omegaText: {
    color: '#166478',
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10,
  },
  dateText: {
    paddingTop: 10,
    color: '#B2B2B2',
    fontSize: 12,
    fontWeight: "400",
  },
  comlivit: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 5,
    borderColor: '#B2B2B2',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  comlivitText: {
    color: '#166478',
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10,
  },
  vitC: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderColor: '#B2B2B2',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  vitCText: {
    color: '#166478',
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10,
  },
  history: {

  },
  historySpread: {

  },
  historyTextBox: {

  },
  historyText: {
    color: 'black',
    margin: 25,
    fontSize: 20,
    fontWeight: "600",
  },
  meds: {

  },
  medsText: {
    color: 'black',
    margin: 25,
    fontSize: 20,
    fontWeight: "600",
  }

  
});

export default App;
