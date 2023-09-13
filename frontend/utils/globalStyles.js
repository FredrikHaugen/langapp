'use strict';
import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
        title: {
                fontSize: 24,
                color: '#333',
                fontWeight: 'bold',
                textAlign: 'center',
                paddingTop: 20,
        },
        container: {
                flex: 1,
                filter: 'blur(45px)',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            },
        background: {
            height: '100%',
            width: '100%',
            flex: 1,

        },
        chat: {
            paddingBottom: 10,
            fontSize: 18,
            color: '#333',
            paddingTop: 5,
        },
        mediumText: {
            fontSize: 18,
            color: '#333',
            paddingTop: 5,
        },
        glassView: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: 10,
            borderColor: 'rgba(255, 255, 255, 0.8)',
            filter: 'blur(10px)',
            width: '90%',
            height: '90%',
            justifyContent: 'center',
            alignItems: 'center',
        },

});

