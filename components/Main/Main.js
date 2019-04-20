import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Alert,ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const styles = require('./MainStyles');

export default class HelloWorldApp extends Component {

  clickHandler = () => {
    Alert.alert('Floating Button Clicked');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
	        <Card title="Local Modules">
	          <Text style={styles.paragraph}>
	            This is a card from the react-native-elements
	          </Text>
	        </Card>
	        <Card title="Local Modules">
	          <Text style={styles.paragraph}>
	            This is a card from the react-native-elements
	          </Text>
	        </Card>
	        <Card title="Local Modules">
	          <Text style={styles.paragraph}>
	            This is a card from the react-native-elements
	          </Text>
	        </Card>
	        <Card title="Local Modules">
	          <Text style={styles.paragraph}>
	            This is a card from the react-native-elements
	          </Text>
	        </Card>
	        <Card title="Local Modules">
	          <Text style={styles.paragraph}>
	            This is a card from the react-native-elements
	          </Text>
	        </Card>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            //source={{uri:'http://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',}}
            source={require('../images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}