import React from 'react';
import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import JobCard from '../../components/JobCard';
import {FlatList, Text} from 'react-native';
import Loading from '../../components/Loading';

const JobList = ({navigation}) => {
  const {loading, error, data} = useFetch(API_URL + 'jobs?page=3');

  const handleJobSelect = item => {
    navigation.navigate('DetailPage', {item});
  };

  const renderJob = ({item}) => (
    <JobCard job={item} onSelect={() => handleJobSelect(item)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        Unexpected Error
      </Text>
    );
  }

  return <FlatList data={data.results} renderItem={renderJob} />;
};

export default JobList;
