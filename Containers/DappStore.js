import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, StyleSheet, View, TouchableOpacity, Image, Platform, Dimensions } from 'react-native';
import DappActions, { DappSelectors } from '../Redux/DappRedux'
import { List, ListItem, Text } from 'react-native-elements'
import { Container, Header, Content, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GraphiteIcon from '../Images/GraphiteIcon.png';
import CryptoIcon from '../Images/CryptoIcon.png';
import BlockSignIcon from '../Images/BlockSignIcon.png';
import TravelIcon from '../Images/TravelIcon.png';
import healthHere from '../Images/healthHere.png';
import note from '../Images/note.png';
import misthos from '../Images/misthos.png';
import chatIcon from '../Images/blue512.png';
const utils = require('./../Engine/misc/utils.js');

class DappStore extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerLeft: <Text h4 style={{marginLeft: 20, fontWeight: 'bold', color: 'white'}}>Partners</Text>,
      headerBackTitle: 'Back',
      headerRight: (
        //params.sendMessage()
        <TouchableOpacity onPress={() => console.log('search dapps')} style={{marginRight: 10}}>
          <Ionicons name="ios-add-circle" size={30} color='white'/>
        </TouchableOpacity>
      ),
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#34bbed'
      }
    };
  };

  _onPressButton = (url) => {
    this.props.setDappUrl(url)
    this.props.navigation.navigate('DappScreen')
  }

  render() {
    const oldPad = utils.is_oldPad()
    const customStyle = (oldPad) ? styles.oldbutton : styles.button
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 5}}>
          <View style={{margin: 10}}>
            <TouchableOpacity style={customStyle} onPress={(url) => this._onPressButton('https://app.graphitedocs.com')}>
              <Image source={GraphiteIcon} style={{width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Graphite</Text>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity style={customStyle} onPress={() => this._onPressButton('https://app.travelstack.club')}>
              <Image source={TravelIcon} style={{width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Travelstack</Text>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity style={customStyle} onPress={() => this._onPressButton('https://testnet.misthos.io/')}>
              <Image source={misthos} style={{width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Misthos</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 5}}>
          <View style={{margin: 10}}>
            <TouchableOpacity style={customStyle} onPress={() => this._onPressButton('https://note.riot.ai/')}>
              <Image source={note} style={{width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Notes</Text>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity style={customStyle} onPress={(url) => this._onPressButton('https://blockusign.co')}>
              <Image source={BlockSignIcon} style={{width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Blockusign</Text>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity style={customStyle} onPress={() => this._onPressButton('https://www.healthhere.com')}>
              <Image source={healthHere} style={{width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Clinic Q</Text>
          </View>
        </View>
        {(!oldPad) ? (<View style={{flexDirection: 'row', marginBottom: 5}}>
          <View style={{margin: 10}}>
            <TouchableOpacity style={styles.button} onPress={() => this._onPressButton('https://cryptocracy.io')}>
              <Image source={CryptoIcon} style={{width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Cryptocracy</Text>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity disabled={true} style={styles.button} onPress={() => this._onPressButton()}>
              <Image source={chatIcon} style={{opacity: 0.1, width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}></Text>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity disabled={true} style={styles.button} onPress={() => this._onPressButton()}>
              <Image source={chatIcon} style={{opacity: 0.1, width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}></Text>
          </View>
        </View>) : null}
        {(!oldPad) ? (<View style={{flexDirection: 'row', marginBottom: 5}}>
          <View style={{margin: 10}}>
            <TouchableOpacity disabled={true} style={styles.button} onPress={() => this._onPressButton()}>
              <Image source={chatIcon} style={{opacity: 0.1, width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}></Text>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity disabled={true} style={styles.button} onPress={() => this._onPressButton()}>
              <Image source={chatIcon} style={{opacity: 0.1, width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}></Text>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity disabled={true} style={styles.button} onPress={() => this._onPressButton()}>
              <Image source={chatIcon} style={{opacity: 0.1, width: 80, height: 80, borderRadius: 10}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}></Text>
          </View>
        </View>) : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginBottom: (Platform.OS === 'ios') ? 20 : 0,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  oldbutton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 5,
    marginBottom: (Platform.OS === 'ios') ? 20 : 0,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDappUrl: (dappUrl) => dispatch(DappActions.setDappUrl(dappUrl)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DappStore)
