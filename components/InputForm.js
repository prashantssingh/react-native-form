import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const InputForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const firstNameInputHandler = (enteredText) => {
        setFirstName(enteredText);
    };
    
    const lastNameInputHandler = (enteredText) => {
        setLastName(enteredText);
    };
      
    const emailInputHandler = (enteredText) => {
        setEmail(enteredText);
    };
    
    const phoneInputHandler = (enteredText) => {
        setPhone(enteredText);
    }

    const clearAll = () => {
        this.firstName.clear();
        this.lastName.clear();
        this.email.clear();
        this.phone.clear();
    }

    return (
        <View>
            <View style={styles.inputContainer}>
            <TextInput placeholder="First Name" ref={input => { this.firstName = input }}  style={styles.input} onChangeText={firstNameInputHandler} value={firstName} />
            <TextInput placeholder="Last Name" ref={input => { this.lastName = input }} style={styles.input} onChangeText={lastNameInputHandler} value={lastName} />
            <TextInput placeholder="Email" ref={input => { this.email = input }} style={styles.input} onChangeText={emailInputHandler} value={email} />
            <TextInput placeholder="Phone" ref={input => { this.phone = input }} style={styles.input} onChangeText={phoneInputHandler} value={phone} />  
            </View>
            <View style={styles.button}>
                <Button title="NEXT" onPress={props.nextHandler} />
                <Button title="CLEAR" onPress={clearAll} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 10,
    },
    input: {
        width: '93%',
        borderColor: '#fff',
        color: '#fff',
        fontSize: 25,
        borderBottomWidth: 2,
        padding: 1,
        margin: 20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 2
    }
})

export default InputForm;