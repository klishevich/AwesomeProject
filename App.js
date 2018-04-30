import React from 'react';
import { StyleSheet, Text, View, Button, Picker, Switch, Image } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'ruby'
    }
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 386, height: 220}}/>
        <Text>Boris-Britva!!!</Text>
        <Text>Hey. Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={()=>{}}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Picker
          selectedValue={ this.state.language }
          style={{ height: 50, width: 300 }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C#" value="cs" />
        </Picker>
        <Switch value={ true } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
