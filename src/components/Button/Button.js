import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';

const Button = ({title, iconName, size = 20, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={size} color="#fff" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
