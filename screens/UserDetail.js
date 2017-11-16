import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import { Card, Tile, List, ListItem, Button, Badge, FormLabel, FormInput, } from 'react-native-elements';

class UserDetail extends Component {
  render() {
    const { picture, name, phone, description } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={require('./images/test_large.jpg')} 
          featured
          title={`${name.title.toUpperCase()} `}
          caption={description}
        />


  <Card title='What is the knowledge test?' >
     <Text style={{marginBottom: 10}}>
    This proficiency test will provide a standardised and reliable way to verify newly arrived doctors know-how and skills. All employees of the Medical Programme will be involved in the proficiency test in one way or another. In order to launch the proficiency test in October already, we also need to employ administrators and free-up teachers to focus on this task. A positive effect of this is that the quality of the Medical Programmes ordinary examinations will also be improved. 
  </Text>
  </Card>

  <Card title='How to register for the knowledge exam:' >
     <Text style={{marginBottom: 10}}>
    Click here to learn how to register for the exam.
   </Text>
   <Button
    icon={{name: 'code'}}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Läs mer' />
   </Card>
   
   <Card title='Video Interviews' >
      <Image
            resizeMode="cover"
            source={require('./images/video_large.jpg')} 
          />     
     <Text style={{marginBottom: 10}}>
      Learn more about the knowledge test from these interviews.
     </Text>
     <Badge containerStyle={{ backgroundColor: 'orange', marginBottom: 10, width: 150}}>
        <Text>50% Complete</Text>
     </Badge>
     <Button
      icon={{name: 'code'}}
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='Läs mer' />
    </Card>

    <FormLabel>Feedback</FormLabel>
    <FormInput />
    <Button title='SUBMIT' backgroundColor='#03A9F4' />


      </ScrollView>
    );
  }
}

export default UserDetail;
