import React from 'react';

import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return <React.Fragment>
        <Text style={{ fontSize: 48 }}>Track List Screen</Text>
        <Button 
            title={"Go to Track Detail"} 
            onPress={() =>navigation.navigate('TrackDetail')}
        />
    </React.Fragment>
    
};

const styles = StyleSheet.create({});

export default TrackListScreen;