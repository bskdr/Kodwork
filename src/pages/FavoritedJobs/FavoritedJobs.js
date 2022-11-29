import {FlatList} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import JobCard from '../../components/JobCard';

const FavoritedJobs = () => {
  const favoritedJobs = useSelector(s => s.favoritedJobs);

  const dispatch = useDispatch();

  const handleRemoveJobFromFavorites = data => {
    dispatch({type: 'REMOVE_FAVORITE', payload: {removedJob: data}});
  };

  const renderJob = ({item}) => (
    <JobCard
      job={item}
      isRemoveButton={true}
      removeJob={() => handleRemoveJobFromFavorites(item)}
    />
  );

  return (
    <FlatList
      data={favoritedJobs ? favoritedJobs : null}
      renderItem={renderJob}
    />
  );
};

export default FavoritedJobs;
