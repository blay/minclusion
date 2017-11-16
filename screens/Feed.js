import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';

class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.id.name}
              roundAvatar 
              avatar={require('./images/test_thumb.jpg')}   
              title={`${user.name.title.toUpperCase()} `}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>

      </ScrollView>
    );
  }
}

export default Feed;
