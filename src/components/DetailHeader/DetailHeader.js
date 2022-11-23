import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

function DetailHeader() {
    const title = useSelector(s => s.jobName)
    return (
        <View>
            <Text style={styles.title} numberOfLines={1}>{title ? title : ''}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#EF5350',
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default DetailHeader;