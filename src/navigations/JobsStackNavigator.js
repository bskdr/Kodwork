import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import JobList from '../pages/JobList';
import JobDetail from '../pages/JobDetail';
import DetailHeader from '../components/DetailHeader';

const Stack = createStackNavigator();

const JobsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsPage"
        component={JobList}
        options={{
          headerTitleStyle: {color: '#EF5350'},
          headerTitleAlign: 'center',
          title: 'Jobs',
        }}
      />
      <Stack.Screen
        name="DetailPage"
        component={JobDetail}
        options={{
          headerTintColor: '#EF5350',
          headerTitle: (props) => <DetailHeader {...props} />
        }}
      />
    </Stack.Navigator>
  );
};

export default JobsStackNavigator;
