import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritedJobs from '../pages/FavoritedJobs/FavoritedJobs';
import JobsStackNavigator from './JobsStackNavigator';

const Drawer = createDrawerNavigator();

const BaseNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#EF5350',
        drawerLabelStyle: {fontSize: 16},
      }}>
      <Drawer.Screen
        name="JobsStackPage"
        component={JobsStackNavigator}
        options={{
          title: 'Jobs',
        }}
      />
      <Drawer.Screen
        name="FavoritedJobsPage"
        component={FavoritedJobs}
        options={{
          title: 'Favorited Jobs',
        }}
      />
    </Drawer.Navigator>
  );
};

export default BaseNavigator;
