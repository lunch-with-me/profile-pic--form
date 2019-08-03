/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const options={
  title:'my pic',
  takePhotoButtonTitle:'take photo from camera',
  chooseFromLibraryButtonTitle:'choose photo from library',
}


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      avatarSource:null
    }
  }

pic=()=>{
  //alert('clicked');
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    
    } else {
      const source = { uri: response.uri };
  
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  
      this.setState({
        avatarSource: source,
      });
    }
  });
}



render() {
  
return (
    
 
  
    <ScrollView>
      <View>
        <TouchableOpacity 
        onPress={this.pic}>
          <Text>select image</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  

);
    
  }
}





export default App;
