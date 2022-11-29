import {View, Text, useWindowDimensions} from 'react-native';
import React, {useEffect} from 'react';
import styles from './JobDetail.style';
import RenderHtml from 'react-native-render-html';
import {ScrollView} from 'react-native';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';

const JobDetail = ({route}) => {
  const {item} = route.params;
  const {width} = useWindowDimensions();
  const htmlSource = {
    html: item.contents,
  };
  const jobName = item.name;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'SET_JOBNAME', payload: {jobName}});
  }, []);

  const handleAddFavorite = (data) => {
    dispatch({type: 'ADD_FAVORITE', payload: {job: data}});
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.job_name}>{item.name}</Text>
      <View style={styles.location_container}>
        <Text style={styles.location_label}>Locations: </Text>
        <Text style={styles.location_name}>{item.locations[0].name}</Text>
      </View>
      <View style={styles.level_container}>
        <Text style={styles.level_label}>Level: </Text>
        <Text style={styles.level_name}>{item.levels[0].name}</Text>
      </View>
      <Text style={styles.detail_title}>Job Detail</Text>
      <View style={styles.content_container}>
        <RenderHtml
          contentWidth={width}
          source={htmlSource}
          baseStyle={styles.content}
        />
      </View>
      <View style={styles.buttons_container}>
        <Button title="Submit" onPress={() => {}} iconName="login" />
        <Button
          title="Favorite Job"
          onPress={() => handleAddFavorite(item)}
          iconName="cards-heart"
        />
      </View>
    </ScrollView>
  );
};

export default JobDetail;
