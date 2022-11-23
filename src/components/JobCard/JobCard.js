import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './JobCard.style';
import Button from '../Button';

const JobCard = ({job, onSelect, isRemoveButton}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.job_name}>{job.name}</Text>
        <Text style={styles.company_name}>{job.company.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.location_name}>{job.locations[0].name}</Text>
        </View>
        <Text style={styles.level_name}>{job.levels[0].name}</Text>
        {isRemoveButton && (
          <View style={styles.button_container}>
            <Button title="Remove" />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
