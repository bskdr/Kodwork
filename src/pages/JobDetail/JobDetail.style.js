import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 5,
  },
  job_name: {
    color: '#37474F',
    fontWeight: 'bold',
    fontSize: 22,
  },
  location_container: {
    flexDirection: 'row',
  },
  location_label: {
    color: '#EF5350',
    fontWeight: 'bold',
    fontSize: 16,
  },
  location_name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  level_container: {
    flexDirection: 'row',
    fontSize: 16,
  },
  level_label: {
    color: '#EF5350',
    fontWeight: 'bold',
    fontSize: 16,
  },
  level_name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  detail_title: {
    color: '#37474F',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10,
  },
  content_container: {
    padding : 5,
    backgroundColor : '#fff',
  },
  content: {
    color: '#000',
  },
  buttons_container: {
    flexDirection: 'row',
    marginVertical: 20,
  }
});
