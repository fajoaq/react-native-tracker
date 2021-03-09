import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';

import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import { Context as locationContext } from '../context/LocationContext';
import TrackForm from '../components/TrackForm';
import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(locationContext);
    const [err] = useLocation(isFocused, addLocation);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Track Create Screen</Text>
            <Map />
            { err ? <Text>Please enable location services</Text> : null }
            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);