import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Your Roadmap',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.title.toUpperCase()} `,
    }),
  },
});

export const Tabs = TabNavigator({
  Roadmap: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Roadmap',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Steps',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'My Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },

});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
