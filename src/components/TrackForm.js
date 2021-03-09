import React from 'react';
import { Input, Button } from 'react-native-elements';

import Spacer from '../components/Spacer';

const TrackForm = () => {
    return <React.Fragment>
        <Spacer>
            <Input placeholder="Enter name" />
        </Spacer>
        <Button title="Start Recording" />
    </React.Fragment>
};

export default TrackForm;