import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

const HeaderLine = (props) => {
    return (
        <View>
          <Text style={styles.mainContentHeaderLine1}>ENTER THE</Text>
          <Text style={styles.mainContentHeaderLine2}>DETAILS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContentHeaderLine1: {
        color: '#00e08b',
        paddingRight: 15,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        fontSize: 40,
    },
    mainContentHeaderLine2: {
        color: '#fff',
        paddingRight: 15,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        fontSize: 40,
    },
})

export default HeaderLine;