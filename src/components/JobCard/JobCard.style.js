import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        margin:5,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        padding: 8,
        backgroundColor: '#fff',
    },
    job_name: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
    },
    company_name: {
        color: '#000',
    },
    location_container: {
        backgroundColor: '#EF5350',
        borderRadius: 20,
        alignSelf: 'flex-start',
        paddingHorizontal: 7,
        paddingVertical: 2,
        marginTop: 2,
    },
    location_name: {
        color: '#fff',
        flexWeight: 'bold',
    },
    level_name: {
        color: '#EF5350',
        textAlign: 'right',
        fontWeight: 'bold',
    },
    button_container: {
        marginVertical: 15,
    },
});
