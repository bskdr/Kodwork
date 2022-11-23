import {FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import JobCard from '../../components/JobCard';

const FavoritedJobs = () => {
  const favoritedJobs = useSelector(s => s.favoritedJobs);

  const renderJob = ({item}) => <JobCard job={item} isRemoveButton={true} />;

  return <FlatList data={favoritedJobs ? favoritedJobs : null} renderItem={renderJob} />;
};

export default FavoritedJobs;
