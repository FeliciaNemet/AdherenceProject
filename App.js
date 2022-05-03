import { black } from '@jest/types/node_modules/chalk';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView, Pressable } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
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
            <Pressable>
              <Text style={styles.button}>QYT : 02</Text>
            </Pressable>

          </View>
          <View style={styles.comlivit}>
            <Image source={require('./assets/Pill.png')} />
            <Text style={styles.comlivitText}>Comlivit</Text>
            <Text style={styles.dateText}>16 Dec, 9:00 AM</Text>
            <Pressable>
              <Text style={styles.button}>QYT : 02</Text>
            </Pressable>
          </View>
          <View style={styles.vitC}>
            <Image source={require('./assets/VitC.png')} />
            <Text style={styles.vitCText}>Vitamin C</Text>
            <Text style={styles.dateText}>17 Dec, 9:00 AM</Text>
            <Pressable>
              <Text style={styles.button}>QYT : 02</Text>
            </Pressable>
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
        <View style={styles.calendar}>
          <View style={styles.day}>
            <Text style={styles.word}>MON</Text>
            <Text style={styles.num}>6</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.word}>TUE</Text>
            <Text style={styles.num}>7</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.word}>WED</Text>
            <Text style={styles.num}>8</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.word}>THU</Text>
            <Text style={styles.num}>9</Text>
          </View>
          <View style={styles.friday}>
            <Text style={styles.friWord}>FRI</Text>
            <Text style={styles.friNum}>10</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.word}>SAT</Text>
            <Text style={styles.num}>11</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.word}>SUN</Text>
            <Text style={styles.num}>12</Text>
          </View>
        </View>
        <View style={styles.tupperWare}>
          <View style={styles.cube}>
            <Text style={styles.omegaText}>Omega 3</Text>
            <Text style={styles.dateText}>Take with food.</Text>
          </View>
          <View>
            <Pressable>
              <Text style={styles.buttonA}>QYT : 03</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.tupperWare}>
          <View style={styles.cube}>
            <Text style={styles.omegaText}>Comlivit</Text>
            <Text style={styles.dateText}>Take with full glass of water.</Text>
          </View>
          <View>
            <Pressable>
              <Text style={styles.buttonA}>QYT : 01</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.tupperWare}>
          <View style={styles.cube}>
            <Text style={styles.omegaText}>Vitamin C</Text>
            <Text style={styles.dateText}>Take with food.</Text>
          </View>
          <View>
            <Pressable>
              <Text style={styles.buttonA}>QYT : 02</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.tupperWare}>
          <View style={styles.cube}>
            <Text style={styles.omegaText}>Vitamin D</Text>
            <Text style={styles.dateText}>No special instructions</Text>
          </View>
          <View>
            <Pressable>
              <Text style={styles.buttonA}>QYT : 01</Text>
            </Pressable>
          </View>
        </View>
        
        
      </View>
      <View style={styles.meds}>
        <Text style={styles.medsText}>Medication Taken</Text>
      </View>
      <Image source={require('./assets/GroupA.png')} style={styles.footer} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 28,
    top: -80,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    width: "100%",
  },
  box: {
    marginTop: 150,
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
    padding: 10,
  },
  omega: {
    margin: 5,
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
    fontWeight: "700",
    paddingTop: 10,
  },
  dateText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#B2B2B2',
    fontSize: 12,
    fontWeight: "400",
  },
  button: {
    backgroundColor: '#6CC1BC',
    color: 'white',
    borderRadius: 12,
    overflow: "hidden",
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 3,
    paddingRight: 3,
    fontWeight: "600",
    marginBottom: 15,
    marginTop: 10,
    marginRight: 23,
  },
  comlivit: {
    margin: 5,
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
    fontWeight: "700",
    paddingTop: 10,
  },
  vitC: {
    margin: 5,
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
    fontWeight: "700",
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
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 10,
    padding: 10,
    borderRadius: 12,
    margin: 15,
  },
  day: {
    alignItems: 'center',
  },
  friday: {
    alignItems: 'center',
  },
  word: {
    fontSize: 12,
    color: '#AFAFBD',
  },
  friWord: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  num: {
    paddingTop: 10,
    fontSize: 22,
    padding: 10,
    margin: 15,
  },
  friNum: {
    paddingTop: 10,
    margin: 15,
    padding: 10,
    fontSize: 22,
    backgroundColor: '#166478',
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  tupperWare: {
    borderStyle: 'solid',
    padding: 15,
    borderColor: '#B2B2B2',
    borderWidth: 1,
    marginLeft: 15, marginRight: 15,
    marginTop: 5, marginBottom: 5,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cube: {
    marginLeft: 20,
  },
  buttonA: {
    backgroundColor: '#6CC1BC',
    color: 'white',
    borderRadius: 12,
    overflow: "hidden",
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 3,
    paddingRight: 3,
    fontWeight: "600",
    marginBottom: 15,
    marginTop: 20,
    marginRight: 20,
  },
  meds: {
    marginBottom: 150,
  },
  medsText: {
    color: 'black',
    margin: 25,
    fontSize: 20,
    fontWeight: "600",
  },
  footer: {
    width: "100%",
    bottom: -80,
    position: 'absolute',
    backgroundColor: '#E5E5E5',
  }
});

export default App;
