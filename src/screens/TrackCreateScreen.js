import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import { Context as locationContext } from '../context/LocationContext';
import TrackForm from '../components/TrackForm';
/* import '../_mockLocation'; */

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(locationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording)   
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Track Create Screen</Text>
            <Map />
            { err ? <Text>Please enable location services</Text> : null }
            <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={20} />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);