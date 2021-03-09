import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return (
    <Button 
        titleStyle={styles.link}
        title={ text } 
        type='clear' 
        onPress={() => navigation.navigate(routeName)} 
    />
    );
};

const styles = StyleSheet.create({
    link: {
        fontSize: 19,
        color: 'blue'
    }
});

export default withNavigation(NavLink);