import React, { useContext, useState } from 'react';
import { Input, Button } from 'react-native-elements';

import Spacer from '../components/Spacer';
import { Context as locationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { 
        state: { name, recording, locations },
        startRecording, 
        stopRecording, 
        changeName 
    } = useContext(locationContext);
    const [saveTrack] = useSaveTrack();

    return <React.Fragment>
        <Spacer>
            <Input onChangeText={ changeName } value={ name } placeholder="Enter name" />
        </Spacer>
        <Spacer>
            { recording ? 
                <Button title="Stop" onPress={ stopRecording } /> 
                :
                <Button title="Start Recording"  onPress={ startRecording }/> 
            }
        </Spacer>
        <Spacer>
            {
                !recording && locations.length ?
                <Button title="Save Recording" onPress={saveTrack}/>
                :
                null
            }
        </Spacer>
    </React.Fragment>
};

export default TrackForm;