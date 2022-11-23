import React from 'react';
import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import JobCard from '../../components/JobCard';
import {FlatList, Text} from 'react-native';

const JobList = ({navigation}) => {
  const {loading, error, data} = useFetch(API_URL + 'jobs?page=2');

  const handleJobSelect = item => {
    navigation.navigate('DetailPage', {item});
  };

  const renderJob = ({item}) => (
    <JobCard job={item} onSelect={() => handleJobSelect(item)} />
  );

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return <FlatList data={data.results} renderItem={renderJob} />;
};

export default JobList;
