import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal} from 'react-native';

const FormSubmitted = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainContentHeaderLine2}>Form Successfully</Text>
            <Text style={styles.mainContentHeaderLine1}>Submitted</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20263f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContentHeaderLine1: {
        color: '#00e08b',
        flexDirection: 'row',
        fontSize: 40,
    },
    mainContentHeaderLine2: {
        color: '#fff',
        flexDirection: 'row',
        fontSize: 40,
    }
});

export default FormSubmitted;