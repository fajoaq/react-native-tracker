import React, { useState, useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import AuthFom from '../components/AuthForm';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return <View style={styles.container}>
        <AuthForm 
            headerText="Sign Up for Tracker"
            errorMessage={ state.errorMessage }
            submitButtonText="Sign Up"
            onSubmit={ signup }
        />
        <Button 
            titleStyle={styles.link}
            title="Already have an account? Sign In" 
            type='clear' 
            onPress={() => navigation.navigate('Signin')} 
        />
    </View>
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 175
    },
    link: {
        fontSize: 19,
        color: 'blue'
    }
});

export default SignupScreen;