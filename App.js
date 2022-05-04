import { black } from '@jest/types/node_modules/chalk';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState,} from 'react';
import { StyleSheet, Text, Image, View, ScrollView, Pressable, TouchableOpacity, } from 'react-native';




const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/Mask.png')} style={styles.headerImage} />
        <Text style={styles.text}>Adherence</Text>
        <Image source={require('./assets/Groups.png')} style={styles.setting}/>
      </View>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.boxText}>Upcoming</Text>
          <View style={styles.rowBox}>
            <View style={styles.omega}>
              <Image source={require('./assets/Pills.png')} />
              <Text style={styles.omegaText}>Omega 3</Text>
              <View style={styles.clock}>
                <Image source={require('./assets/clock.png')} style={styles.clocker}/>
                <Text style={styles.dateText}>15 Dec, 9:00 AM</Text>
              </View>
              <Pressable>
                <Text style={styles.button}>QTY : 02</Text>
              </Pressable>
            </View>
            <View style={styles.comlivit}>
              <Image source={require('./assets/Pill.png')} />
              <Text style={styles.comlivitText}>Comlivit</Text>
              <View style={styles.clock}>
                <Image source={require('./assets/clock.png')} style={styles.clocker}/>
                <Text style={styles.dateText}>16 Dec, 9:00 AM</Text>
              </View>
              <Pressable>
              <Text style={styles.button}>QTY : 02</Text>
              </Pressable>
            </View>
          <View style={styles.vitC}>
            <Image source={require('./assets/VitC.png')} />
            <Text style={styles.vitCText}>Vitamin C</Text>
            <View style={styles.clock}>
              <Image source={require('./assets/clock.png')} style={styles.clocker}/>
              <Text style={styles.dateText}>17 Dec, 9:00 AM</Text>
            </View>
            <Pressable>
              <Text style={styles.button}>QTY : 02</Text>
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
              <Text style={styles.buttonA}>QTY : 03</Text>
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
              <Text style={styles.buttonA}>QTY : 01</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.tupperWare}>
          <View style={styles.cube}>
            <Text style={styles.omegaText}>Vitamin C</Text>
            <Text style={styles.dateText}>Take with food.</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.buttonA}>QTY : 02</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tupperWare}>
          <View style={styles.cube}>
            <Text style={styles.omegaText}>Vitamin D</Text>
            <Text style={styles.dateText}>No special instructions</Text>
          </View>
          <View>
            <Pressable>
              <Text style={styles.buttonA}>QTY : 03</Text>
            </Pressable>
          </View>
        </View>
        
        
      </View>
      <View style={styles.meds}>
        <Text style={styles.medsText}>Medication Taken</Text>
        <View style={styles.tupperWare2}>
          <View style={styles.cube}>
            <Text style={styles.omegaText}>Omega 3</Text>
            <Text style={styles.dateText}>12 Dec, 9:00 AM</Text>
          </View>
          <View>
            
              <Text style={styles.buttonA}>QTY : 03</Text>

          </View>
        </View>
        <View style={styles.tupperWare2}>
          <View style={styles.cube}>
            <Text style={styles.omegaText}>Comlivit</Text>
            <Text style={styles.dateText}>12 Dec, 9:00 AM</Text>
          </View>
          <View>
            <Pressable>
              <Text style={styles.buttonA}>QTY : 01</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.tupperWare2}>
          <View style={styles.cube}>
            <Text style={styles.omegaText}>Vitamin C</Text>
            <Text style={styles.dateText}>12 Dec, 9:00 AM</Text>
          </View>
          <View>
            <Pressable>
              <Text style={styles.buttonA}>QTY : 02</Text>
            </Pressable>
          </View>
        </View>
        
      </View>
      </ScrollView>
      <View style={styles.footer}>
        <Image source={require('./assets/GroupA.png')}  />
      </View >
      <StatusBar style="auto" />
    </View>
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
  setting: {
    top: -115,
    right: -140,
    width: 20,
    height: 20,
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
    justifyContent: 'space-between',
    padding: 15,
  },
  omega: {
    margin: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  omegaText: {
    color: '#166478',
    fontSize: 18,
    fontWeight: "700",
    paddingTop: 10,
  },
  clock: {
    flexDirection: 'row',
  },
  clocker: {
    marginRight: 1,
    marginTop: 11,
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
    margin: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 12,
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
    margin: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 12,
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
    padding: 25,
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
    marginBottom: 80,
  },
  medsText: {
    color: 'black',
    margin: 25,
    fontSize: 20,
    fontWeight: "600",
  },
  tupperWare2: {
    padding: 15,
    marginLeft: 15, marginRight: 15,
    marginTop: 5, marginBottom: 5,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  footer: {
    width: "100%",
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
  }
});

export default App;
